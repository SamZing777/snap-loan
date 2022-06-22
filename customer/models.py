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


class BankDetail(models.Model):

    BANK = (
        ('Access Bank', 'Access bank'),
        ('Access Bank (Diamond)', 'Access bank (Diamond)'),
        ('FCMB', 'FCMB'),
        ('Fidelity Bank', 'Fidelity bank'),
        ('First Bank', 'First bank'),
        ('GTB', 'GTB'),
        ('Heritage Bank', 'Heritage bank'),
        ('Keystone', 'Keystone'),
        ('Micro finance Bank', 'Micro finance bank'),
        ('Standard Chattered', 'Standard Chattered'),
        ('Union Bank', 'Union bank'),
        ('Zenith Bank', 'Zenith bank')
    )

    BANK_TYPE = (
        ('Current', 'Current'),
        ('Savings', 'Savings'),
        ('Fixed deposit', 'Fixed deposit')
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    bank = models.CharField(max_length=24, choices=BANK)
    bank_type = models.CharField(max_length=15, choices=BANK_TYPE)
    account_number = models.PositiveIntegerField()
    account_name = models.CharField(max_length=150)
    bvn = models.PositiveIntegerField()
    timeStamp = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateField(auto_now=True)

    def __str__(self):
        return str(self.user)


class TopUp(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name_on_card = models.CharField(max_length=150)
    card_number = models.PositiveIntegerField()
    cvv = models.PositiveIntegerField()
    expiry_date = models.DateField()
    timeStamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.user)
