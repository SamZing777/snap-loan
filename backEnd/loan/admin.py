from django.contrib import admin

from .models import (
    LoanPeriod,
    Loan
)


class LoanPeriodAdmin(admin.ModelAdmin):
    list_display = ['duration', 'interest']


class LoanAdmin(admin.ModelAdmin):
    list_display = ['user', 'amount', 'duration']


admin.site.register(LoanPeriod, LoanPeriodAdmin)
admin.site.register(Loan, LoanAdmin)
