from django.urls import path

from .views import (
     PayAPIView,
     CustomerAPIView,
     CreateBankDetailAPIView,
     BankDetailAPIView,
     CreateTopUpAPIView
     )

urlpatterns = [
     path('pay/', PayAPIView.as_view(), name='pay'),
     path('customer/', CustomerAPIView.as_view(), name='customer'),
     path('create-bank/', CreateBankDetailAPIView.as_view(), name='create-bank'),
     path('bank-detail/', BankDetailAPIView.as_view(), name='bank'),
     path('top-up/', CreateTopUpAPIView.as_view(), name='topup')
 ]
