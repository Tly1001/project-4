from django.contrib import admin
from .models import Service, ServiceSubType, ServiceType

admin.site.register(Service)
admin.site.register(ServiceSubType)
admin.site.register(ServiceType)