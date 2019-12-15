from django.contrib import admin
from .models import UserProfile


# Register your models here.

#Write a manager: name, model + Admin
class UserProfileAdmin(admin.ModelAdmin):
    pass


# Register UserProfile to admin, and select the manager as UserProfileAdmin
admin.site.register(UserProfile, UserProfileAdmin)
