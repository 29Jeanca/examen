# Generated by Django 5.2 on 2025-05-24 01:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('practices', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='contpractice',
            name='explanation',
            field=models.TextField(blank=True, null=True),
        ),
    ]
