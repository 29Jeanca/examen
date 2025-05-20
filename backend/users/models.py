from django.db import models
from django.contrib.auth.models import User

class User(models.Model):
    user = models.OneToOneField('auth.User', on_delete=models.CASCADE)
    profile_picture = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.user.username
    