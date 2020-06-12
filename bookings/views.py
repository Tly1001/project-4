# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .models import Booking
from .serializers import BookingSerializer, PopulatedBookingSerializer

class BookingListView(APIView):

    permission_classes = (IsAuthenticated, )

    def get(self, _request):
        bookings = Booking.objects.all()
        serialized_bookings = PopulatedBookingSerializer(bookings, many=True)
        return Response(serialized_bookings.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data['owner'] = request.user.id
        created_booking = BookingSerializer(data=request.data)
        if created_booking.is_valid():
            created_booking.save()
            return Response(created_booking.data, status=status.HTTP_201_CREATED)
        return Response(created_booking.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

