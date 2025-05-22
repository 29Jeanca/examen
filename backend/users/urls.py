from django.urls import path
from .views import CreateUserView, ValidateUserView, EditUserInfoView

urlpatterns = [
    path("create-user/", CreateUserView.as_view()),
    path("validate-user/", ValidateUserView.as_view()),
    path("edit-user/<int:id>/", EditUserInfoView.as_view())
]
