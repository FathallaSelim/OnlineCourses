from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.backends import ModelBackend
from django.urls import reverse

from .models import UserProfile, EmailVerifyRecord
from django.db.models import Q
from django.views.generic.base import View
from django.contrib.auth.hashers import make_password
from .forms import LoginForm, RegisterForm, ForgetForm, ModifyPwdForm
from utils.email_send import send_register_email
from utils.mixin_utils import LoginRequiredMixin
from users.forms import UploadImageForm, UserInfoForm
from operation.models import UserCourse, UserFavorite, UserMessage
import json
from organizations.models import CourseOrg, Teacher
from courses.models import Course
from pure_pagination import Paginator, EmptyPage, PageNotAnInteger
from users.models import Banner


class CustomBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            user = UserProfile.objects.get(
                Q(username=username) | Q(email=username))
            if user.check_password(password):
                return user
        except Exception as e:
            return None


# def user_login(request):
#     if request.method == "POST":
#         username = request.POST.get("username", "")
#         password = request.POST.get("password", "")
#         user = authenticate(request, username=username, password=password)
#         if user is not None:
#             login(request, user)
#             return render(request, "index.html")
#         else:
#             return render(request, "login.html", {"msg": "用户名或密码错误"})
#     elif request.method == "GET":
#         return render(request, 'login.html', {})


class LoginView(View):
    def get(self, request):
        return render(request, 'login.html', {})

    def post(self, request):
        login_form = LoginForm(request.POST)
        if login_form.is_valid():
            username = request.POST.get('username', '')
            password = request.POST.get('password', '')
            user = authenticate(username=username, password=password)

            if user is not None:
                if user.is_active:
                    login(request, user)
                    # return render(request, 'index.html')
                    return HttpResponseRedirect(reverse('index'))
                else:
                    return render(request, 'login.html', {'msg': 'You have not activated your account'})
            else:
                return render(request, 'login.html', {'msg': 'wrong user name or password'})
        else:
            return render(request, 'login.html', {'login_form': login_form})


class LogoutView(View):
    """user logout"""

    def get(self, request):
        logout(request)
        from django.urls import reverse
        return HttpResponseRedirect(reverse('index'))


class RegisterView(View):
    def get(self, request):
        register_form = RegisterForm()
        return render(request, 'register.html',
                      {'register_form': register_form})

    def post(self, request):
        register_form = RegisterForm(request.POST)
        if register_form.is_valid():
            username = request.POST.get('email', '')
            if UserProfile.objects.filter(email=username):
                return render(request, 'register.html', {'msg': 'This mailbox is already registered',
                                                         'register_form': register_form})
            password = request.POST.get('password', '')

            user_profile = UserProfile()
            user_profile.username = username
            user_profile.email = username
            user_profile.password = make_password(password)
            # The default activation status is false
            user_profile.is_active = True
            user_profile.save()

            # Write welcome message
            user_message = UserMessage()
            user_message.user = user_profile.id
            user_message.message = "Welcome to our site."
            user_message.save()

            # Send verification
            send_register_email(username, 'register')
            return render(request, 'login.html')
        else:
            return render(request, 'register.html',
                          {'register_form': register_form})


class ActiveUserView(View):
    def get(self, request, active_code):
        all_records = EmailVerifyRecord.objects.filter(code=active_code)
        if all_records:
            for record in all_records:
                email = record.email
                # get the user obj with the right email. notice that userprofile is inherited
                user = UserProfile.objects.get(email=email)
                user.is_active = True
                user.save()
        else:
            return render(request, 'active_failure.html')
        return render(request, 'login.html', {'msg': 'User activated'})


class ForgetPwdView(View):
    def get(self, request):
        forget_form = ForgetForm()
        return render(request, 'forgetpwd.html', {'forget_form': forget_form})

    def post(self, request):
        forget_form = ForgetForm(request.POST)
        if forget_form.is_valid():
            email = request.POST.get('email', '')
            if send_register_email(email, send_type='forget'):
                return render(request, 'reset_passwd_mail.html')
            else:
                return render(request, 'forgetpwd.html',
                              {'forget_form': forget_form})
        else:
            return render(request, 'forgetpwd.html',
                          {'forget_form': forget_form})


class ResetView(View):
    def get(self, request, active_code):
        all_records = EmailVerifyRecord.objects.filter(code=active_code)
        if all_records:
            for record in all_records:
                email = record.email
                return render(request, 'password_reset.html', {'email': email})
        else:
            return render(request, 'active_failure.html')


class ModifyPwdView(View):
    def post(self, request):
        modify_pwd_form = ModifyPwdForm(request.POST)

        if modify_pwd_form.is_valid():
            pwd1 = request.POST.get('password1', '')
            pwd2 = request.POST.get('password2', '')
            email = request.POST.get('email', '')
            if pwd1 != pwd2:
                return render(request, 'password_reset.html',
                              {'email': email, 'msg': 'Passwords do not match'})
            user = UserProfile.objects.get(email=email)
            user.password = make_password(pwd1)
            user.save()
            return render(request, 'login.html', {'msg': 'Password reset complete'})
        else:
            email = request.POST.get('email')
            return render(request, 'password_reset.html',
                          {'email': email, 'modify_form': modify_pwd_form})


class UserInfoView(LoginRequiredMixin, View):
    """User Personal Center"""

    def get(self, request):
        return render(request, 'usercenter-info.html', {

        })

    # instance Indicate which instance, otherwise a new user will be created
    def post(self, request):
        user_info_form = UserInfoForm(request.POST, instance=request.user)
        if user_info_form.is_valid():
            user_info_form.save()
            return HttpResponse("{'status':'success'}",
                                content_type='application/json')
        else:
            return HttpResponse(json.dumps(user_info_form.errors),
                                content_type='application/json')


class UploadImageView(LoginRequiredMixin, View):
    """Upload Avatar"""

    # def post(self, request):
    #     image_form = UploadImageForm(request.POST, request.FILES)
    #     if image_form.is_valid():
    #         image = image_form.cleaned_data['image']
    #         request.user.image = image
    #         request.user.save()

    # Or use ModelForm features, use instance
    def post(self, request):
        image_form = UploadImageForm(request.POST, request.FILES,
                                     instance=request.user)
        if image_form.is_valid():
            image_form.save()
            return HttpResponse("{'status':'success'}",
                                content_type='application/json')
        else:
            return HttpResponse("{'status':'fail'}",
                                content_type='application/json')


class UpdatePwdView(View):
    """Change password in personal center"""

    def post(self, request):
        modify_pwd_form = ModifyPwdForm(request.POST)

        if modify_pwd_form.is_valid():
            pwd1 = request.POST.get('password1', '')
            pwd2 = request.POST.get('password2', '')
            if pwd1 != pwd2:
                return HttpResponse("{'status':'fail', 'msg':'Passwords do not match'}",
                                    content_type='application/json')
            user = request.user
            user.password = make_password(pwd1)
            user.save()
            return HttpResponse("{'status':'success'}",
                                content_type='application/json')
        else:
            return HttpResponse(json.dumps(modify_pwd_form.errors),
                                content_type='application/json')


class SendEmailCodeView(LoginRequiredMixin, View):
    """Send verification code for email"""

    def get(self, request):
        email = request.GET.get('email', '')
        if UserProfile.objects.filter(email=email):
            return HttpResponse("{'email':'Email already exists'}",
                                content_type='application/json')
        send_register_email(email, 'update_email')
        return HttpResponse("{'status':'success'}",
                            content_type='application/json')


class UpdateEmailView(LoginRequiredMixin, View):
    """Modify mailbox"""

    def post(self, request):
        email = request.POST.get('email', '')
        code = request.POST.get('code', '')

        existed_record = EmailVerifyRecord.objects.filter(email=email,
                                                          code=code,
                                                          send_type='update_email')
        if existed_record:
            user = request.user
            user.email = email
            user.save()
            return HttpResponse("{'status':'success'}",
                                content_type='application/json')
        else:
            return HttpResponse("{'email':'Verification code error'}",
                                content_type='application/json')


class MyCourseView(LoginRequiredMixin, View):
    """Individual course page"""

    def get(self, request):
        my_courses = UserCourse.objects.filter(user=request.user)
        return render(request, 'usercenter-mycourse.html', {
            'my_courses': my_courses,
        })


class MyFavOrgsView(LoginRequiredMixin, View):
    """Personal collections"""

    def get(self, request):
        favs = UserFavorite.objects.filter(user=request.user, fav_type=2)
        fav_org_list = []
        for fav in favs:
            org_id = fav.fav_id
            org = CourseOrg.objects.get(id=org_id)
            fav_org_list.append(org)

        return render(request, 'usercenter-fav-org.html', {
            'fav_org_list': fav_org_list,
        })


class MyFavTeachersView(LoginRequiredMixin, View):
    """Favorite Teacher"""

    def get(self, request):
        favs = UserFavorite.objects.filter(user=request.user, fav_type=3)
        fav_teacher_list = []
        for fav in favs:
            teacher_id = fav.fav_id
            teacher = Teacher.objects.get(id=teacher_id)
            fav_teacher_list.append(teacher)

        return render(request, 'usercenter-fav-teacher.html', {
            'fav_teacher_list': fav_teacher_list,
        })


class MyFavCoursesView(LoginRequiredMixin, View):
    """Favorite Teacher"""

    def get(self, request):
        favs = UserFavorite.objects.filter(user=request.user, fav_type=1)
        fav_course_list = []
        for fav in favs:
            course_id = fav.fav_id
            course = Course.objects.get(id=course_id)
            fav_course_list.append(course)

        return render(request, 'usercenter-fav-course.html', {
            'fav_course_list': fav_course_list,
        })


class MyMessageView(LoginRequiredMixin, View):
    """Favorite Teacher"""

    def get(self, request):
        all_messages = UserMessage.objects.filter(user=request.user.id)

        # When the user clicks the message horn, all unread messages are cleared
        all_unread_messages = UserMessage.objects.filter(user=request.user.id,
                                                         has_read=False)
        for message in all_unread_messages:
            message.has_read = True
            message.save()

        # Paginating messages
        # Try to get the page parameter passed by the foreground get request
        # If it is not a valid configuration parameter, the first page is returned by default.
        try:
            page = request.GET.get('page', 1)
        except PageNotAnInteger:
            page = 1
        # This refers to taking five from allorg and displaying five on each page.
        p = Paginator(all_messages, 2, request=request)
        messages = p.page(page)

        return render(request, 'usercenter-message.html', {
            'messages': messages
        })


class IndexView(View):
    def get(self, request):
        # print (5/0) #cause server error to view 500 pages
        # Upper part carousel
        all_banners = Banner.objects.all().order_by('index')
        courses = Course.objects.filter(is_banner=False)[:5]
        banner_courses = Course.objects.filter(is_banner=True)[:3]
        course_orgs = CourseOrg.objects.all()[:15]
        return render(request, 'index.html', {
            'all_banners': all_banners,
            'courses': courses,
            'banner_courses': banner_courses,
            'course_orgs': course_orgs,
        })
