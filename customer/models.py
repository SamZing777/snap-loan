from django.db import models
from django.contrib.auth import get_user_model

from loan.models import Loan

User = get_user_model()


class Pay(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.PositiveIntegerField(null=True, blank=True)
    comment = models.CharField(max_length=150, null=True, blank=True)
    timeStamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.user)


class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    loan = models.ForeignKey(Loan, on_delete=models.CASCADE)
    payment = models.ForeignKey(Pay, on_delete=models.CASCADE)
    balance = models.IntegerField()

    def __str__(self):
        return str(self.user)
