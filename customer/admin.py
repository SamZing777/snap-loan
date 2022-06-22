from django.contrib import admin

from .models import (
	Pay, 
	Customer,
	BankDetail
	)


class BankDetailAdmin(admin.ModelAdmin):
	list_display = ['user', 'bank', 'bank_type', 'account_number']


admin.site.register(Pay)
admin.site.register(Customer)
admin.site.register(BankDetail, BankDetailAdmin)
