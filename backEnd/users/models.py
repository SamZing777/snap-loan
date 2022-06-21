from django.db import models
from django.contrib.auth.models import AbstractUser
from django_countries.fields import CountryField
from phonenumber_field.modelfields import PhoneNumberField


class User(AbstractUser):
    GENDER = (
        ('Male', 'Male'),
        ('Female', 'Female')
    )

    OCCUPATION = (
        ('Business Person', 'Business Person'),
        ('Self Employed', 'Self Employed'),
        ('Student', 'Student'),
        ('Civil Servant', 'Civil Servant'),
        ('Public Servant', 'Public Servant'),
        ('Other', 'Other')
    )

    country = CountryField(blank_label='(Select Your Country')
    phone_number = PhoneNumberField()
    gender = models.CharField(max_length=6, choices=GENDER)
    address = models.TextField()
    occupation = models.CharField(max_length=50, choices=OCCUPATION,
                                null=True, blank=True
                                )
    other_occupation = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return self.username
