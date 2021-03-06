# Generated by Django 2.2.12 on 2020-04-22 12:02

import datetime
from django.db import migrations, models
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    dependencies = [
        ('BEforDB', '0015_auto_20200422_1402'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='date',
            field=models.DateField(default=datetime.datetime(2020, 4, 22, 15, 2, 58, 67105)),
        ),
        migrations.AlterField(
            model_name='order',
            name='order_status',
            field=models.CharField(choices=[('DY', 'Delivery'), ('NotConfirmed', 'Not confirmed'), ('DE', 'Delivered'), ('P', 'Pacing')], max_length=20),
        ),
        migrations.AlterField(
            model_name='order',
            name='phone',
            field=phonenumber_field.modelfields.PhoneNumberField(max_length=14, region=None),
        ),
    ]
