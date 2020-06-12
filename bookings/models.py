from django.db import models
from django.utils.timezone import now

class Booking(models.Model):
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    service = models.ForeignKey('menu.Service', related_name='bookings', on_delete=models.PROTECT)
    owner = models.ForeignKey('jwt_auth.User', related_name='bookings', on_delete=models.PROTECT)

    # * for admin reference or comparison of booking
    timestamp = models.DateTimeField(default=now)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['date', 'start_time', 'end_time'], name='time slot taken')
        ]

    def __str__(self): 
        return f'Booking: {self.service} Time: {self.start_time} - {self.end_time} Client: {self.owner}'

