# @Time    : 12-12-19
# @Author  : selim

from django.urls import path, re_path
from courses.views import CourseListView, CourseDetailView, CourseInfoView, \
    CourseCommentsView, AddCommentsView, VideoPlayView

app_name = 'courses'

urlpatterns = [
    path('list/', CourseListView.as_view(), name='course_list'),
    re_path('detail/(?P<course_id>\d+.*)/', CourseDetailView.as_view(),
            name='course_detail'),
    re_path('info/(?P<course_id>\d+.*)/', CourseInfoView.as_view(),
            name='course_info'),
    re_path('comment/(?P<course_id>\d+.*)/', CourseCommentsView.as_view(),
            name='course_comment'),
    path('add_comment/', AddCommentsView.as_view(), name='add_comment'),
    re_path('video/(?P<video_id>\d+.*)/', VideoPlayView.as_view(),
            name="video_play"),
]
