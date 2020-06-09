from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class ServiceType(models.Model):
    name = models.CharField(max_length=50, unique=True)
    def __str__(self):
        return f'{self.name}'

class ServiceSubType(models.Model):
    name = models.CharField(max_length=50)
    service_type = models.ForeignKey(
        ServiceType,
        related_name='sub_services',
        on_delete=models.PROTECT
    )

    def __str__(self):
        return f'{self.name}'

class Service(models.Model):
    name = models.CharField(max_length=80)
    price = models.IntegerField()
    duration = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(240)])
    service_sub_type = models.ForeignKey(
        ServiceSubType,
        related_name='services',
        on_delete=models.PROTECT
    )

    def __str__(self):
        return f'{self.name} £{self.price} / {self.duration}mins'