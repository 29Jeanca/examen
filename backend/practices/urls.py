from django.urls import path
from .views import ContPracticeListCreateView,PracticeListCreateView,PracticeView

urlpatterns = [
    path("practice-cont/", ContPracticeListCreateView.as_view()),
    path("practice/", PracticeListCreateView.as_view()),
    path("practice/<int:pk>/", PracticeView.as_view())
]
