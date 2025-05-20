from django.contrib import admin
from django.urls import path

urlpatterns = [
    path("create-user/", admin.site.urls),
]
