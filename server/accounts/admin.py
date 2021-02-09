from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from accounts.models import User

# Register your models here.

class UserAdmin(UserAdmin):
    list_display = ('email', 'id', 'first_name', 'last_name', 'date_joined', 'last_login', 'is_admin', 'is_staff')
    ordering = ('email',)
    search_fields = ('first_name', 'last_name', 'email',)
    readonly_fields = ('id', 'date_joined', 'last_login')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()

admin.site.register(User, UserAdmin)
