# @Time    : 12-12-19
# @Author  : selim

from django import forms

from operation.models import UserAsk

import re


class UserAskForm(forms.ModelForm):
    # You can add custom fields here

    class Meta:
        # Model using UserAsk
        model = UserAsk
        #Specify which fields are needed through a list
        fields = ['name', 'mobile', 'course_name']

    # Verify phone number
    def clean_mobile(self):
        mobile = self.cleaned_data['mobile']
        regex_mobile = "^1[358]\d{9}$|^147\d{8}$|^176\d{8}$"
        p = re.compile(regex_mobile)
        if p.match(mobile):
            return mobile
        else:
            raise forms.ValidationError(u"illegalMobilePhoneNumber", code="mobile_invalid")
