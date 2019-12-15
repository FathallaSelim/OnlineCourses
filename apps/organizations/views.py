from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import View
from .models import CourseOrg, CityDict
from pure_pagination import Paginator, EmptyPage, PageNotAnInteger
from .forms import UserAskForm
from operation.models import UserFavorite
from organizations.models import Teacher
from courses.models import Course
from django.db.models import Q


# Create your views here.

class OrgView(View):
    def get(self, request):
        orgs = CourseOrg.objects.all()

        # Popular institutions, take the top three after the ranking
        hot_orgs = orgs.order_by("-click_nums")[:3]

        cities = CityDict.objects.all()

        search_keywords = request.GET.get('keywords', '')
        if search_keywords:
            orgs = orgs.filter(Q(name__icontains=search_keywords) | Q(
                desc__icontains=search_keywords))

        # Select the city on the front end, pass to city_id, as a filter, the default is empty
        city_id = request.GET.get('city', '')
        # If city_id is not empty, a selection has been made
        if city_id:
            orgs = orgs.filter(city_id=city_id)

        # Select the organization category on the front end and pass it to category as a filter. The default is empty.
        category = request.GET.get('ct', '')
        if category:
            orgs = orgs.filter(category=category)

        # Sort by the number of students and the number of courses
        sort = request.GET.get('sort', '')
        if sort:
            if sort == 'students':
                orgs = orgs.order_by("-students")
            elif sort == 'courses':
                orgs = orgs.order_by("-course_nums")

        # After screening, count again
        org_total_num = orgs.count()

        # Pagination of course institutions
        # Try to get the page parameter passed by the foreground get request
        # If it is not a valid configuration parameter, the first page is returned by default.
        try:
            page = request.GET.get('page', 1)
        except PageNotAnInteger:
            page = 1
        #Here refers to five from allorg, each page shows 5
        p = Paginator(orgs, 2, request=request)
        orgs = p.page(page)

        return render(request, 'org-list.html', {
            'orgs': orgs,
            'cities': cities,
            'org_total_num': org_total_num,
            'city_id': city_id,
            'category': category,
            'hot_orgs': hot_orgs,
            'sort': sort
        })


class AddUserAskView(View):
    def post(self, request):
        user_ask_form = UserAskForm(request.POST)
        if user_ask_form.is_valid():
            # When commit is true for true save
            user_ask = user_ask_form.save(commit=True)
            # If the save is successful, the return json string is sucess,
            # and the content type is to tell the browser the information type
            return HttpResponse("{'status': 'success', 'msg':'Added successfully'}",
                                content_type='application/json')
        else:
            return HttpResponse("{'status':'fail', 'msg':'Add error'}",
                                content_type='application/json')


class OrgHomeView(View):
    """Institution Home"""

    def get(self, request, org_id):
        current_page = 'home'
        course_org = CourseOrg.objects.get(id=int(org_id))
        course_org.click_nums += 1
        course_org.save()
        courses = course_org.course_set.all()[:3]
        teachers = course_org.teacher_set.all()[:1]

        # Determine if a user is a favorite
        has_fav = False
        if request.user.is_authenticated:
            if UserFavorite.objects.filter(user=request.user,
                                           fav_id=course_org.id, fav_type=2):
                has_fav = True

        return render(request, 'org-detail-homepage.html', {
            'courses': courses,
            'teachers': teachers,
            'course_org': course_org,
            'current_page': current_page,
            'has_fav': has_fav
        })


class OrgCourseView(View):
    """Institutional Course Page"""

    def get(self, request, org_id):
        current_page = 'course'
        course_org = CourseOrg.objects.get(id=int(org_id))
        # Because it is a course page, take out all courses
        courses = course_org.course_set.all()

        # Determine if a user is a favorite
        has_fav = False
        if request.user.is_authenticated:
            if UserFavorite.objects.filter(user=request.user,
                                           fav_id=course_org.id, fav_type=2):
                has_fav = True

        return render(request, 'org-detail-course.html', {
            'courses': courses,
            'course_org': course_org,
            'current_page': current_page,
            'has_fav': has_fav,
        })


class OrgDescView(View):
    """Institution Details Page"""

    def get(self, request, org_id):
        current_page = 'desc'
        course_org = CourseOrg.objects.get(id=int(org_id))

        # Determine if a user is a favorite
        has_fav = False
        if request.user.is_authenticated:
            if UserFavorite.objects.filter(user=request.user,
                                           fav_id=course_org.id, fav_type=2):
                has_fav = True

        return render(request, 'org-detail-desc.html', {
            'course_org': course_org,
            'current_page': current_page,
            'has_fav': has_fav
        })


class OrgTeacherView(View):

    def get(self, request, org_id):
        current_page = 'teachers'
        course_org = CourseOrg.objects.get(id=int(org_id))
        teachers = course_org.teacher_set.all()

        # Determine if a user is a favorite
        has_fav = False
        if request.user.is_authenticated:
            if UserFavorite.objects.filter(user=request.user,
                                           fav_id=course_org.id, fav_type=2):
                has_fav = True

        return render(request, 'org-detail-teachers.html', {
            'course_org': course_org,
            'current_page': current_page,
            'teachers': teachers,
            'has_fav': has_fav
        })


class AddFavView(View):
    """User favorites, which can be courses, institutions and lecturers, or cancel favorites"""

    def post(self, request):
        # The default value is 0
        fav_id = request.POST.get('fav_id', 0)
        fav_type = request.POST.get('fav_type', 0)

        # Determine whether to log in or not, it is an anonymous user class
        if not request.user.is_authenticated:
            # Return error message to ajax, jump to login page and implement it in ajax
            return HttpResponse("{'status':'fail', 'msg':'User is not logged in'}",
                                content_type='application/json')
        existing_records = UserFavorite.objects.filter(
            user=request.user,
            fav_id=int(fav_id),
            fav_type=int(fav_type),
        )
        if existing_records:
            # Cancel collection if it already exists
            existing_records.delete()
            if int(fav_type) == 1:
                course = Course.objects.get(id=int(fav_id))
                if course.fav_nums > 0:
                    course.fav_nums -= 1
                    course.save()
            elif int(fav_type) == 2:
                course_org = CourseOrg.objects.get(id=int(fav_id))
                if course_org.fav_nums > 0:
                    course_org.fav_nums -= 1
                    course_org.save()
            elif int(fav_type) == 3:
                teacher = Teacher.objects.get(id=int(fav_id))
                if teacher.fav_nums > 0:
                    teacher.fav_nums -= 1
                    teacher.save()

            return HttpResponse("{'status':'success', 'msg':'collect'}",
                                content_type='application/json')
        else:
            user_fav = UserFavorite()
            if int(fav_id) > 0 and int(fav_type) > 0:
                user_fav.user = request.user
                user_fav.fav_id = int(fav_id)
                user_fav.fav_type = int(fav_type)
                user_fav.save()

                if int(fav_type) == 1:
                    course = Course.objects.get(id=int(fav_id))
                    course.fav_nums += 1
                    course.save()
                elif int(fav_type) == 2:
                    course_org = CourseOrg.objects.get(id=int(fav_id))
                    course_org.fav_nums += 1
                    course_org.save()
                elif int(fav_type) == 3:
                    teacher = Teacher.objects.get(id=int(fav_id))
                    teacher.fav_nums += 1
                    teacher.save()

                return HttpResponse("{'status':'success', 'msg':'collected'}",
                                    content_type='application/json')
            else:
                return HttpResponse("{'status':'fail', 'msg':'favoritesError'}",
                                    content_type='application/json')


class TeacherListView(View):
    def get(self, request):
        teachers = Teacher.objects.all()
        teacher_num = teachers.count()

        search_keywords = request.GET.get('keywords', '')
        if search_keywords:
            teachers = teachers.filter(name__icontains=search_keywords)

        # Sort by popularity
        sort = request.GET.get('sort', '')
        if sort:
            if sort == 'hot':
                teachers = teachers.order_by("-click_nums")

        # Top three lecturers
        hottest_teachers = Teacher.objects.all().order_by('click_nums')[:3]

        # Pagination
        try:
            page = request.GET.get('page', 1)
        except PageNotAnInteger:
            page = 1
        # Take 3 out here, each page shows 3
        p = Paginator(teachers, 1, request=request)
        teachers = p.page(page)

        return render(request, 'teachers-list.html', {
            'teachers': teachers,
            'teacher_num': teacher_num,
            'sort': sort,
            'hottest_teachers': hottest_teachers,
        })


class TeacherDetailView(View):
    def get(self, request, teacher_id):
        teacher = Teacher.objects.get(id=int(teacher_id))
        teacher.click_nums += 1
        teacher.save()
        courses = Course.objects.filter(teacher=teacher)
        hottest_teachers = Teacher.objects.all().order_by('click_nums')[:3]

        # Check whether the lecturer has been favorited on the html page
        has_fav_teacher = False
        if UserFavorite.objects.filter(user=request.user, fav_type=3, fav_id=int(teacher.id)):
            has_fav_teacher = True

        # Judging whether the organization has been favorited on the html page
        has_fav_org = False
        if UserFavorite.objects.filter(user=request.user, fav_type=2, fav_id=int(teacher.org.id)):
            has_fav_org = True

        return render(request, 'teacher-detail.html',{
            'teacher': teacher,
            'courses': courses,
            'hottest_teachers': hottest_teachers,
            'has_fav_org': has_fav_org,
            'has_fav_teacher': has_fav_teacher,
        })