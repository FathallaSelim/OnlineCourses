from django.db import models
from datetime import datetime


class CityDict(models.Model):
    name = models.CharField(max_length=20, verbose_name=u'city')
    desc = models.CharField(max_length=200, verbose_name=u'description')
    add_time = models.DateTimeField(default=datetime.now, verbose_name=u'addTime')

    class Meta:
        verbose_name = u'city'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class CourseOrg(models.Model):
    name = models.CharField(max_length=50, verbose_name=u'institutionName')
    # Institution description
    desc = models.TextField(verbose_name=u'institutionDescription')
    category = models.TextField(verbose_name=u'institutionsCategory', default='individual',
                                max_length=20,
                                choices=(
                                    ('individual', '个人'), ('college', 'college'),
                                    ('training_agency', 'trainingInstitution'))
                                )
    #Add a label to display on the homepage
    tag = models.CharField(default=u'ITI', max_length=10, verbose_name=u'agencyLabels')

    click_nums = models.IntegerField(default=0, verbose_name=u'clicks')
    fav_nums = models.IntegerField(default=0, verbose_name=u'favorites')
    image = models.ImageField(
        upload_to='org/%Y/%m',
        verbose_name=u'logo',
        max_length=100,
    )
    address = models.CharField(max_length=150, verbose_name=u'institutionAddress')
    city = models.ForeignKey(CityDict, on_delete=models.CASCADE,
                             verbose_name=u'city')
    add_time = models.DateTimeField(default=datetime.now, verbose_name=u'addTime')
    # Add the following two fields to implement the sort function of org-list pages
    # Add learners
    students = models.IntegerField(default=0, verbose_name=u'numberOfStudents')
    # course_nums
    course_nums = models.IntegerField(default=0, verbose_name=u'courses')

    class Meta:
        verbose_name = u'courseOrganization'
        verbose_name_plural = verbose_name

    def get_teacher_nums(self):
        return self.teacher_set.all().count()

    def __str__(self):
        return self.name


class Teacher(models.Model):
    org = models.ForeignKey(CourseOrg, on_delete=models.CASCADE,
                            verbose_name=u'affiliation')
    name = models.CharField(max_length=50, verbose_name=u'teacherName')
    work_years = models.IntegerField(default=0, verbose_name=u"workingYears")
    work_company = models.CharField(max_length=50, verbose_name=u"currentCompany")
    work_position = models.CharField(max_length=50, verbose_name=u"positionInCompany")
    points = models.CharField(max_length=50, verbose_name=u"teachingCharacteristics")
    age = models.IntegerField(default=21, verbose_name=u"age")
    click_nums = models.IntegerField(default=0, verbose_name=u"clicks")
    fav_nums = models.IntegerField(default=0, verbose_name=u"favorites")
    image = models.ImageField(
        upload_to='teachers/%Y/%m',
        verbose_name=u'headPortrait',
        max_length=100,
        default='',
    )
    add_time = models.DateTimeField(default=datetime.now, verbose_name=u"addTime")

    class Meta:
        verbose_name = u'teacher'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name

    def get_course_total_num(self):
        return self.course_set.count()