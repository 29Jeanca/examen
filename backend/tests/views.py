from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from .models import Test, UserAnswer,Question, Option
from .serializers import TestSerializer, UserAnswerSerializer, QuestionSerializer, OptionSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.generics import RetrieveUpdateDestroyAPIView


class TestViewSet(viewsets.ModelViewSet):
    queryset = Test.objects.prefetch_related('questions__options').all()
    serializer_class = TestSerializer

class UserAnswerViewSet(viewsets.ModelViewSet):
    queryset = UserAnswer.objects.all()
    serializer_class = UserAnswerSerializer
    # permission_classes = [IsAuthenticated]  # Descomenta si usas autenticación

    def perform_create(self, serializer):
        user = User.objects.first()  # Para pruebas
        serializer.save(user=user)

    @action(detail=False, methods=['get'], url_path='by-user-test')
    def get_user_answers_by_test(self, request):
        user_id = request.query_params.get('user_id')
        test_id = request.query_params.get('test_id')

        if not user_id or not test_id:
            return Response({"error": "Se requieren parámetros 'user_id' y 'test_id'"}, status=400)

        answers = UserAnswer.objects.filter(user_id=user_id, test_id=test_id).select_related('question').prefetch_related('options')
        serializer = self.get_serializer(answers, many=True)
        return Response(serializer.data)
        
class QuestionViewSet(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer

    def get_queryset(self):
        queryset = Question.objects.all()
        test_id = self.request.query_params.get('test_id')

        if test_id:
            queryset = queryset.filter(options__test_id=test_id, options__is_correct=True).distinct()

        return queryset


    




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


class QuestionEditView(RetrieveUpdateDestroyAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    # permission_classes = [IsAuthenticated]

class OptionEditView(RetrieveUpdateDestroyAPIView):
    queryset = Option.objects.all()
    serializer_class = OptionSerializer
    # permission_classes = [IsAuthenticated]