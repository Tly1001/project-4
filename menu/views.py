# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import status

from .models import ServiceType
from .serializers import PopulatedServiceTypeSerializer, ServiceTypeSerializer

class MenuView(APIView):

    # permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, _request):
        services_types = ServiceType.objects.all()
        serialized_services = PopulatedServiceTypeSerializer(services_types, many=True)
        return Response(serialized_services.data, status=status.HTTP_200_OK)

    # def post(self, request):
    #     # request.data['name'] = request.user.id
    #     new_service = ServiceSerializer(data=request.data)
    #     if new_service.is_valid():
    #         new_service.save()
    #         return Response(new_service.data, status=status.HTTP_201_CREATED)
    #     return Response(new_service.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
