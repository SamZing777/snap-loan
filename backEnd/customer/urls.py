from django.urls import path

from .views import CustomerAPIView

urlpatterns = [
     path('customer/', CustomerAPIView.as_view(), name='customer'),
 ]
