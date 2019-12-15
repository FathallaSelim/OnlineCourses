from django.shortcuts import render
from django.views.generic import View
from courses.models import Course, CourseResource, Video
from django.db.models import Q

from django.http import HttpResponse

from pure_pagination import Paginator, EmptyPage, PageNotAnInteger
from operation.models import UserFavorite, CourseComments, UserCourse
from utils.mixin_utils import LoginRequiredMixin


class CourseListView(View):
    def get(self, request):
        courses = Course.objects.all().order_by("-add_time")
        # Popular courses on the right
        hot_courses = Course.objects.all().order_by("-click_nums")[:3]

        search_keywords = request.GET.get('keywords', '')
        if search_keywords:
            courses = courses.filter(Q(name__icontains=search_keywords) | Q(
                desc__icontains=search_keywords) | Q(
                detail__icontains=search_keywords))

        # Sort by the number of students and the number of courses
        sort = request.GET.get('sort', '')
        if sort:
            if sort == 'students':
                courses = courses.order_by("-students")
            elif sort == 'hot':
                courses = courses.order_by("-click_nums")

        # Pagination of course institutions
        # Try to get the page parameter passed by the foreground get request
        # If it is an invalid configuration parameter, the first page is returned by default.
        try:
            page = request.GET.get('page', 1)
        except PageNotAnInteger:
            page = 1
        # Take 3 out here, each page shows 3
        p = Paginator(courses, 3, request=request)
        courses = p.page(page)

        return render(request, 'course-list.html', {
            'courses': courses,
            'hot_courses': hot_courses,
            'sort': sort
        })


class CourseDetailView(View):
    def get(self, request, course_id):
        course = Course.objects.get(id=course_id)
        # Increase clicks
        course.click_nums += 1
        course.save()

        # Judging Favorite
        has_fav_course = False
        has_fav_org = False

        if request.user.is_authenticated:
            if UserFavorite.objects.filter(user=request.user, fav_id=course.id,
                                           fav_type=1):
                has_fav_course = True
            if UserFavorite.objects.filter(user=request.user,
                                           fav_id=course.course_org.id,
                                           fav_type=2):
                has_fav_org = True

        tag = course.tag
        # If there is tag
        if tag:
            related_courses = Course.objects.filter(tag=tag)[:1]
            # ***Problems with the following code*** #
            # all_related_courses = Course.objects.filter(tag=tag)
            # related_courses =[]
            # for course in all_related_courses:
            #     if int(course.id) == int(course_id):
            #         related_courses.append(course)
            # ******************* #
        else:
            # If it is empty, pass an empty array, otherwise it is an empty string, and it will be wrong to traverse in html
            related_courses = []

        has_attended = False
        # First check in the user_course table whether
        # the user is already associated with the course. If not, save an association record.
        if request.user.is_authenticated:
            user_courses = UserCourse.objects.filter(
                user=request.user,
                course=course
            )
            if user_courses:
                has_attended = True

        return render(request, 'course-detail.html', {
            'course': course,
            'related_courses': related_courses,
            'has_fav_course': has_fav_course,
            'has_fav_org': has_fav_org,
            'has_attended': has_attended
        })


class CourseInfoView(LoginRequiredMixin, View):
    """Course Chapter Information"""

    def get(self, request, course_id):
        course = Course.objects.get(id=course_id)

        course_resource = CourseResource.objects.filter(course=course)
        # ?
        # course_resource = CourseResource.objects.get(id=course_id)

        # First check in the user_course table whether
        # the user is already associated with the course. If not, save an association record.
        user_courses = UserCourse.objects.filter(
            user=request.user,
            course=course
        )

        # If no record is found,
        # it means that the user has not started learning, then save a record and let the number of students plus one
        if not user_courses:
            user_course = UserCourse(user=request.user, course=course)
            user_course.save()
            # Number of students plus one
            course.students += 1
            course.save()

        # First instantiate a user_courses operation class according to the course
        user_courses = UserCourse.objects.filter(course=course)
        # Take all the corresponding users in this instance and put them into user_ids
        user_ids = [user_course.user.id for user_course in user_courses]
        # The __in rule is used to indicate that as long as user_id is equal to any one of the user_ids array,
        all_user_courses = UserCourse.objects.filter(user_id__in=user_ids)
        # Take all courses ID
        course_ids = [user_course.course.id for user_course in
                      all_user_courses]
        # Get other courses
        related_courses = Course.objects.filter(id__in=course_ids).order_by(
            "-click_nums")[:5]
        return render(request, 'course-video.html', {
            'course': course,
            'course_resource': course_resource,
            'user_courses': user_courses,
            'related_courses': related_courses
        })


class CourseCommentsView(View):
    def get(self, request, course_id):
        course = Course.objects.get(id=course_id)
        course_resource = CourseResource.objects.filter(course=course)
        comments = CourseComments.objects.all()
        return render(request, 'course-comment.html', {
            'course': course,
            'course_resource': course_resource,
            'comments': comments
        })


class AddCommentsView(LoginRequiredMixin, View):
    """Add Course Review"""

    def post(self, request):
        if not request.user.is_authenticated:
            return HttpResponse('{"status":"fail", "msg":"用户未登录"}',
                                content_type='application/json')
        course_id = request.POST.get("course_id", 0)
        comments = request.POST.get("comments", "")
        if int(course_id) > 0 and comments:
            course_comment = CourseComments()
            # get only takes one, if multiple or none are met,
            # an exception occurs, and filter returns an array without throwing
            course = Course.objects.get(id=int(course_id))
            course_comment.course = course
            course_comment.comments = comments
            course_comment.user = request.user
            course_comment.save()
            return HttpResponse('{"status":"success", "msg":"Added Successfully"}',
                                content_type='application/json')
        else:
            return HttpResponse('{"status":"fail", "msg":"Add Failed"}',
                                content_type='application/json')


# Playing video view
class VideoPlayView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'next'

    def get(self, request, video_id):
        # id It is the value added by default in the data table.
        video = Video.objects.get(id=int(video_id))
        # Find the corresponding course
        course = video.lesson.course
        # Check if the user has started the lesson
        user_courses = UserCourse.objects.filter(user=request.user,
                                                 course=course)
        # Join the user's curriculum if not yet
        if not user_courses:
            user_course = UserCourse(user=request.user, course=course)
            user_course.save()
        # Query Course Resources
        all_resources = CourseResource.objects.filter(course=course)
        # Select student relations who have studied this course
        user_courses = UserCourse.objects.filter(course=course)
        # Remove user_id from relationship
        user_ids = [user_course.user_id for user_course in user_courses]
        # For the courses learned by these users, the foreign key will automatically have the id and get the field
        all_user_courses = UserCourse.objects.filter(user_id__in=user_ids)
        # Remove all course id
        course_ids = [user_course.course_id for user_course in
                      all_user_courses]
        # Get other lessons learned by users who have taken this course
        related_courses = Course.objects.filter(id__in=course_ids).order_by(
            "-click_nums").exclude(id=course.id)[:4]
        # Whether to collect courses
        return render(request, "course-play.html", {
            "course": course,
            "all_resources": all_resources,
            "related_courses": related_courses,
            "video": video,
        })
