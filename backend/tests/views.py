from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Test, UserAnswer,Question, Option
from .serializers import TestSerializer, UserAnswerSerializer, QuestionSerializer, OptionSerializer

class TestViewSet(viewsets.ModelViewSet):
    queryset = Test.objects.prefetch_related('questions__options').all()
    serializer_class = TestSerializer

class UserAnswerViewSet(viewsets.ModelViewSet):
    queryset = UserAnswer.objects.all()
    serializer_class = UserAnswerSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        
class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class OptionViewSet(viewsets.ModelViewSet):
    queryset = Option.objects.all()
    serializer_class = OptionSerializer