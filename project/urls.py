from django.contrib import admin
from django.urls import path, include, re_path
from .views import index

urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('api/auth/', include('jwt_auth.urls')),
    path('api/menu/', include('menu.urls')),
    path('api/booking/', include('bookings.urls')),
    re_path(r'^.*$', index)
]
