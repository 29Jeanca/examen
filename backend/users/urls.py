from django.urls import path
from .views import CreateUserView, ValidateUserView

urlpatterns = [
    path("create-user/", CreateUserView.as_view()),
    path("validate-user/", ValidateUserView.as_view())
]
