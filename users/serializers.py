from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    country = serializers.CharField()
    phone_number = serializers.CharField()
    address = serializers.CharField()

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['email'],
                                        validated_data['password'])
        return user
    
    class Meta:
        model = User
        fields = ['username', 'country', 'password', 'is_active', 'phone_number', 'address']
