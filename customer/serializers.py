from rest_framework import serializers

from .models import (
    Pay,
    Customer,
    BankDetail,
    TopUp
)


class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer
        fields = '__all__'


class BankDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = BankDetail
        fields = '__all__'


class TopUpSerializer(serializers.ModelSerializer):

    class Meta:
        model = TopUp
        fields = '__all__'
