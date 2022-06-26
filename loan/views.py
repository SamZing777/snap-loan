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


class LoanCreateAPIView(generics.CreateAPIView):
    queryset = Loan.objects.all()
    serializer_class = LoanSerializer

    def peform_create(self, serializer):
        user = self.request.user
        serializer.save(user)
