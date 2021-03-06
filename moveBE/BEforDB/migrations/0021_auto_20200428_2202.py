# Generated by Django 2.2.12 on 2020-04-28 19:02

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BEforDB', '0020_auto_20200428_2137'),
    ]

    operations = [
        migrations.AlterField(
            model_name='color',
            name='image',
            field=models.ImageField(upload_to='item'),
        ),
        migrations.AlterField(
            model_name='favorite',
            name='date',
            field=models.DateField(default=datetime.datetime(2020, 4, 28, 22, 2, 31, 872869)),
        ),
        migrations.AlterField(
            model_name='order',
            name='date',
            field=models.DateField(default=datetime.datetime(2020, 4, 28, 22, 2, 31, 870875)),
        ),
        migrations.AlterField(
            model_name='order',
            name='order_status',
            field=models.CharField(choices=[('Not_Confirmed', 'Not confirmed'), ('Delivery', 'Delivery'), ('Delivered', 'Delivered'), ('Pacing', 'Pacing')], max_length=20),
        ),
    ]
