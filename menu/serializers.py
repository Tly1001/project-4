from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Service, ServiceSubType, ServiceType

class ServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Service
        fields = '__all__'

class ServiceSubTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = ServiceSubType
        fields = '__all__'

class ServiceTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = ServiceType
        fields = '__all__'

# * Should give nested objects of sub-types, services
class PopulatedSubTypeSerializer(ServiceSubTypeSerializer):
    services = ServiceSerializer(many=True)
    
# * Should give nested objects of types, sub-types, services
class PopulatedServiceTypeSerializer(ServiceTypeSerializer):
    sub_services = PopulatedSubTypeSerializer(many=True)