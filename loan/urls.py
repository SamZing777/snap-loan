from django.urls import path

from .views import (
    LoanPeriodAPIView,
    LoanCreateAPIView
)


urlpatterns = [
    path('', LoanPeriodAPIView.as_view(), name='loan_period'),
    path('loan/', LoanCreateAPIView.as_view(), name='loan')
]
