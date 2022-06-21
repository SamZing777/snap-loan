from django.contrib import admin

from .models import User


class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'country', 'gender', 'is_staff', 'occupation']


admin.site.register(User, UserAdmin)

"""
    Username:     Admin
    Password:     snaploan
"""
