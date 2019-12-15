from django.db import models
from datetime import datetime

from django.contrib.auth.models import AbstractUser


class UserProfile(AbstractUser):
    GENDER_CHOICES = (
        ('male', u'male'),
        ('female', u'female'),
    )
    nick_name = models.CharField(max_length=50, verbose_name=u'nickname', default='')
    birthday = models.DateField(verbose_name=u'birthday', null=True, blank=True)
    gender = models.CharField(
        max_length=6,
        verbose_name=u'gender',
        choices=GENDER_CHOICES,
        default='male'
    )
    address = models.CharField(max_length=100, verbose_name=u'address', default='')
    mobile = models.CharField(max_length=11, null=True, blank=True)
    image = models.ImageField(
        upload_to='image/%Y/%m',
        default=u'image/default.png',
        max_length=135
    )

    class Meta:
        verbose_name = 'userInfo'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.username

    def unread_nums(self):
        """Get the number of unread messages"""
        # Note that you must import here, not on it
        from operation.models import UserMessage
        return UserMessage.objects.filter(user=self.id, has_read=False).count()


class EmailVerifyRecord(models.Model):
    """E-mail verification code"""
    SEND_CHOICES = (
        ('register', u'register'),
        ('forget', u'Retrieve password'),
        ('update_email', u'Modify mailbox')
    )
    code = models.CharField(max_length=20, verbose_name=u'verificationCode')
    email = models.EmailField(max_length=50, verbose_name=u'mailbox')
    send_type = models.CharField(choices=SEND_CHOICES, max_length=20,
                                 verbose_name=u'sendType')
    send_time = models.DateTimeField(default=datetime.now,
                                     verbose_name=u'sendTime')  # now but not now()

    class Meta:
        verbose_name = u'EMailVerificationCode'
        verbose_name_plural = verbose_name

    #Overloaded so that Verification Code + Email is displayed instead of EmailVerifyRecord object (1)
    def __str__(self):
        return '{0}{1}'.format(self.code, self.email)


class Banner(models.Model):
    """carousel"""
    title = models.CharField(max_length=100, verbose_name=u'title')
    image = models.ImageField(
        upload_to='banner/%Y/%m',
        verbose_name=u'carousel',
        max_length=300,
    )
    url = models.URLField(max_length=200, verbose_name=u'address')
    index = models.IntegerField(default=100, verbose_name=u'order')
    add_time = models.DateTimeField(default=datetime.now, verbose_name=u'addTime')

    class Meta:
        verbose_name = u'carousel'
        verbose_name_plural = verbose_name
