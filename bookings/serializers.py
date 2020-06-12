from rest_framework import serializers
from django.apps import apps
from django.contrib.auth import get_user_model

from .models import Booking
from menu.serializers import ServiceSerializer

Service = apps.get_model('menu', 'Service')
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('first_name', 'last_name')

class BookingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Booking
        fields = '__all__'

# * don't think this was necessary
class PopulatedBookingSerializer(BookingSerializer):
    service = ServiceSerializer()
    owner = UserSerializer()