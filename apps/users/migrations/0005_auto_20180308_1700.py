# Generated by Django 2.0.2 on 2018-03-08 17:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_auto_20180307_1959'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='image',
            field=models.ImageField(default='image/default.png', max_length=135, upload_to='image/%Y/%m'),
        ),
    ]
