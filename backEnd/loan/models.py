from django.db import models
from django.contrib.auth import get_user_model
# from django.core.validators import (MinValueValidator, 
#                                     MaxValueValidator
#                                 )

User = get_user_model()


class LoanPeriod(models.Model):
    duration = models.CharField(max_length=20)
    interest = models.PositiveIntegerField()

    def __str__(self):
        return self.duration


class Loan(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.PositiveIntegerField()
    duration = models.ForeignKey(LoanPeriod, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.user)
