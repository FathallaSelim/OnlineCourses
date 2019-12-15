from django.db import models
from datetime import datetime
from organizations.models import CourseOrg, Teacher


# Course Information Form
class Course(models.Model):
    degree_choices = (
        ('elementary', 'primary'),
        ('intermediate', 'intermediate'),
        ('advanced', 'advanced'),
    )
    # null=True, blank=True Because there is no value in this field
    course_org = models.ForeignKey(CourseOrg, on_delete=models.CASCADE,
                                   verbose_name=u'Course organization', null=True, blank=True)
    name = models.CharField(max_length=50, verbose_name=u'course name')
    desc = models.CharField(max_length=300, verbose_name=u'Course Description')
    detail = models.TextField(verbose_name=u'Course details')
    degree = models.CharField(choices=degree_choices, max_length=15,
                              verbose_name=u'grade')
    learning_time = models.IntegerField(default=0, verbose_name=u'Duration of study (minutes)')
    students = models.IntegerField(default=0, verbose_name=u'Number of learners')
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE,
                                verbose_name=u'teacher', null=True, blank=True)
    fav_nums = models.IntegerField(default=0, verbose_name=u'Number of collectors')
    category = models.CharField(default=u"Back-end development", max_length=20,
                                verbose_name=u'Course category')
    # Tags to recommend courses based on common tags
    tag = models.CharField(default="", verbose_name=u"Course tags", max_length=30)
    image = models.ImageField(
        upload_to='course/%Y/%m',
        verbose_name=u'cover picture',
        max_length=100,
        null=True,
        blank=True
    )
    click_nums = models.IntegerField(default=0, verbose_name=u'Clicks')
    # course notes
    before_diving_in = models.CharField(default='', max_length=400, verbose_name=u'Course notes')
    # teacher tells you
    teacher_advice = models.CharField(default='', max_length=400, verbose_name=u'teacher-tells-you')

    # whether it is a carousel
    is_banner = models.BooleanField(default=False,verbose_name=u'whether_to_rotate')

    add_time = models.DateTimeField(default=datetime.now, verbose_name=u'add_time')

    class Meta:
        verbose_name = u'curriculum'
        verbose_name_plural = verbose_name

    # Get the total number of chapters in this course
    def get_chapter_nums(self):
        return self.lesson_set.all().count()

    def get_learning_users(self):
        return self.usercourse_set.all()[:5]

    def get_course_lessons(self):
        """Get the number of chapters in a course"""
        return self.lesson_set.all().order_by("name")

    def __str__(self):
        return self.name


# Chapter Lesson represents a lesson (or chapter), each lesson has multiple videos Video
class Lesson(models.Model):
    # There are multiple chapters in a course. Set Course Course as Foreign Key here
    course = models.ForeignKey(Course, on_delete=models.CASCADE,
                               verbose_name=u'course')
    name = models.CharField(max_length=100, verbose_name=u'chapter_name')
    add_time = models.DateTimeField(default=datetime.now, verbose_name=u'add_time')

    class Meta:
        verbose_name = u'Chapter'
        verbose_name_plural = verbose_name

    def get_lesson_videos(self):
        return self.video_set.all().order_by("name")

    def __str__(self):
        return '{0} >> {1}'.format(self.course, self.name)


# Videos per chapter
class Video(models.Model):
    # Set chapter as foreign key
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE,
                               verbose_name=u'chapter')
    name = models.CharField(max_length=100, verbose_name=u'Video name')
    url = models.CharField(max_length=300, default="", verbose_name=u"video_link")
    learning_time = models.IntegerField(default=0, verbose_name=u'Duration of study (minutes)')
    add_time = models.DateTimeField(default=datetime.now, verbose_name=u'add_time')

    class Meta:
        verbose_name = u'Video'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


# Course Resources
class CourseResource(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE,
                               verbose_name=u'course')
    name = models.CharField(max_length=100, verbose_name=u'Name')
    download = models.FileField(
        upload_to='course/resource/%Y%m',
        verbose_name=u'Resource',
        max_length=100)
    add_time = models.DateTimeField(default=datetime.now,
                                    verbose_name=u'add_time'
                                    )

    class Meta:
        verbose_name = u'course_resources'
        verbose_name_plural = verbose_name
