from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from .models import Test, UserAnswer,Question, Option
from .serializers import TestSerializer, UserAnswerSerializer, QuestionSerializer, OptionSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
class TestViewSet(viewsets.ModelViewSet):
    queryset = Test.objects.prefetch_related('questions__options').all()
    serializer_class = TestSerializer

class UserAnswerViewSet(viewsets.ModelViewSet):
    queryset = UserAnswer.objects.all()
    serializer_class = UserAnswerSerializer
    # permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        #solo para pruebas, se puede cambiar por el usuario que hace la peticion
        user = User.objects.first()
        serializer.save(user=user)

        # el que si funca
        # serializer.save(user=self.request.user)
        
class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class OptionViewSet(viewsets.ModelViewSet):
    queryset = Option.objects.all()
    serializer_class = OptionSerializer



class TestViewSet(viewsets.ModelViewSet):
    queryset = Test.objects.prefetch_related('questions__options').all()
    serializer_class = TestSerializer

    @action(detail=True, methods=['get'], url_path='questions')
    def get_questions(self, request, pk=None):
        test = self.get_object()
        questions = test.questions.all()
        serializer = QuestionSerializer(questions, many=True)
        return Response(serializer.data)

