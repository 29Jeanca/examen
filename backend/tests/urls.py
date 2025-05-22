from rest_framework.routers import DefaultRouter
from .views import TestViewSet, UserAnswerViewSet, QuestionViewSet, OptionViewSet

router = DefaultRouter()
router.register(r'tests', TestViewSet, basename='test')
router.register(r'answers', UserAnswerViewSet, basename='answer')
router.register(r'questions', QuestionViewSet, basename='question')
router.register(r'options', OptionViewSet, basename='option')


urlpatterns = router.urls
