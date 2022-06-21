from rest_framework import serializers

from .models import (
     LoanPeriod,
     Loan
 )



class LoanPeriodSerializer(serializers.ModelSerializer):

    class Meta:
        model = LoanPeriod
        fields = '__all__'


class LoanSerializer(serializers.ModelSerializer):

    class Meta:
        model = Loan
        fields = '__all__'
