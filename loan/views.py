from rest_framework import generics

from .models import (
    LoanPeriod,
    Loan
)
from .serializers import (
    LoanPeriodSerializer,
    LoanSerializer
)


class LoanPeriodAPIView(generics.ListAPIView):
    queryset = LoanPeriod.objects.all()
    serializer_class = LoanPeriodSerializer


class LoanAPIView(generics.ListCreateAPIView):
    queryset = Loan.objects.all()
    serializer_class = LoanSerializer
