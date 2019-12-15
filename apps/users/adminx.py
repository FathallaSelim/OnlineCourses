import xadmin

from .models import EmailVerifyRecord, Banner
from xadmin import views


# Create X admin global manager and bind with view
class BaseSetting(object):
    enable_themes = True
    use_bootswatch = True


# xadmin global configuration
class GlobalSettings(object):
    site_title = "Vic's Backstage management"
    site_footer = "Vic"
    # Collapse left menu
    menu_style = "accordion"


# Create admin management class, inherit object
class EmailVerifyRecordAdmin(object):
    # The columns that need to be displayed by default, click the email verification code to display
    list_display = ['code', 'email', 'send_type', 'send_time']
    # Search field
    search_fields = ['code', 'email', 'send_type']
    # pass
    # Configure filter fields
    list_filter = ['code', 'email', 'send_type', 'send_time']


class BannerAdmin(object):
    list_display = ['title', 'image', 'url', 'index', 'add_time']
    search_fields = ['title', 'image', 'url', 'index']
    list_filter = ['title', 'image', 'url', 'index', 'add_time']


xadmin.site.register(EmailVerifyRecord, EmailVerifyRecordAdmin)
xadmin.site.register(Banner, BannerAdmin)
xadmin.site.register(views.BaseAdminView, BaseSetting)
xadmin.site.register(views.CommAdminView, GlobalSettings)
