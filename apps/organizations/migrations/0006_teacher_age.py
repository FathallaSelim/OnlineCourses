# Generated by Django 2.0.2 on 2018-03-23 09:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('organizations', '0005_teacher_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='teacher',
            name='age',
            field=models.IntegerField(default=21, verbose_name='年龄'),
        ),
    ]