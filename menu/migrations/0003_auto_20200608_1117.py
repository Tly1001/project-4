# Generated by Django 3.0.7 on 2020-06-08 11:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0002_service_service_sub_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='service',
            name='service_type',
        ),
        migrations.AddField(
            model_name='servicesubtype',
            name='service_type',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.PROTECT, related_name='sub_services', to='menu.ServiceType'),
            preserve_default=False,
        ),
    ]
