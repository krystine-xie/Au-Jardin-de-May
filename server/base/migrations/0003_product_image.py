# Generated by Django 3.1.6 on 2021-04-16 22:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_auto_20210416_0404'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
