from django.urls import path

from .views import (
    LoanPeriodAPIView,
    LoanAPIView
)


urlpatterns = [
    path('', LoanPeriodAPIView.as_view(), name='loan_period'),
    path('loan/', LoanAPIView.as_view(), name='loan')
]
