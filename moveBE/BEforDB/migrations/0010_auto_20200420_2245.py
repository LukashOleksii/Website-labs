# Generated by Django 2.2.12 on 2020-04-20 19:45

from django.db import migrations, models
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    dependencies = [
        ('BEforDB', '0009_auto_20200420_2244'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='order_status',
            field=models.CharField(choices=[('DE', 'Delivered'), ('DY', 'Delivery'), ('P', 'Pacing'), ('NC', 'Not comfirmed')], max_length=2),
        ),
        migrations.AlterField(
            model_name='order',
            name='phone',
            field=phonenumber_field.modelfields.PhoneNumberField(max_length=14, region=None, unique=True),
        ),
    ]