from django.db import models
from datetime import datetime

from users.models import UserProfile
from courses.models import Course


# User i want to learn form
class UserAsk(models.Model):
    name = models.CharField(max_length=20, verbose_name=u'fullName')
    mobile = models.CharField(max_length=11, verbose_name=u'cellularPhone')
    course_name = models.CharField(max_length=50, verbose_name=u'courseName')
    add_time = models.DateTimeField(default=datetime.now, verbose_name=u'addTime')

    class Meta:
        verbose_name = u'userConsultation'
        verbose_name_plural = verbose_name


# User Course Evaluation
class CourseComments(models.Model):
    # Two foreign keys: user and course
    course = models.ForeignKey(Course, on_delete=models.CASCADE,
                               verbose_name=u'course')
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE,
                             verbose_name=u'user')
    comments = models.CharField(max_length=250, verbose_name=u'comment')
    add_time = models.DateTimeField(default=datetime.now, verbose_name=u'commentTime')

    class Meta:
        verbose_name = u'courseTitle'
        verbose_name_plural = verbose_name


# User's collection of courses, institutions, lecturers
class UserFavorite(models.Model):
    # Involves four foreign keys
    type_choices = (
        (1, u'course'),
        (2, u'courseOrganization'),
        (3, u'instructor')
    )

    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE,
                             verbose_name=u'user')
    # Save the id of the favorite information
    fav_id = models.IntegerField(default=0)
    # Favorite information types
    fav_type = models.IntegerField(
        choices=type_choices,
        default=1,
        verbose_name=u'Collection type'
    )
    add_time = models.DateTimeField(default=datetime.now, verbose_name=u'commentTime')

    class Meta:
        verbose_name = u'userFavorites'
        verbose_name_plural = verbose_name


# user message table
class UserMessage(models.Model):
    # There are two types of messages, one for individual users and one for all
    # Cannot use a foreign key to give a single user
    # Can be determined with the default value, default is 0, sent to all users
    user = models.IntegerField(default=0, verbose_name=u'receivingUser')
    message = models.CharField(max_length=500, verbose_name=u'messageContent')

    # Whether it has been read, True means read
    has_read = models.BooleanField(default=False, verbose_name=u'haveRead')
    add_time = models.DateTimeField(default=datetime.now, verbose_name=u'addTime')

    class Meta:
        verbose_name = u'userMessage'
        verbose_name_plural = verbose_name


# User Course Schedule
class UserCourse(models.Model):
    # Two foreign keys are involved: user and course
    course = models.ForeignKey(Course, on_delete=models.CASCADE,
                               verbose_name=u'course')
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE,
                             verbose_name=u'user')
    add_time = models.DateTimeField(default=datetime.now, verbose_name=u'addTime')

    class Meta:
        verbose_name = u'userCourse'
        verbose_name_plural = verbose_name
