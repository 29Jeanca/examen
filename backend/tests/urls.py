from rest_framework.routers import DefaultRouter
from .views import TestViewSet, UserAnswerViewSet, QuestionViewSet, OptionViewSet,OptionEditView,QuestionEditView
from django.urls import path
router = DefaultRouter()
router.register(r'tests', TestViewSet, basename='test')
router.register(r'answers', UserAnswerViewSet, basename='answer')
router.register(r'questions', QuestionViewSet, basename='question')
router.register(r'options', OptionViewSet, basename='option')
router.register(r'unique_test', TestViewSet, basename='unique_test')

urlpatterns = router.urls

urlpatterns = router.urls + [
    path('edit_question/<int:pk>/', QuestionEditView.as_view(), name='question-edit'),
    path('edit_option/<int:pk>/', OptionEditView.as_view(), name='option-edit'),
]