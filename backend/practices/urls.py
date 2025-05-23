from django.urls import path
from .views import ContPracticeListCreateView,PracticeListCreateView

urlpatterns = [
    path("practice-cont/", ContPracticeListCreateView.as_view()),
    path("practice/", PracticeListCreateView.as_view()),
]
