from rest_framework import serializers
from .models import Test, Question, Option, UserAnswer


class OptionSerializer(serializers.ModelSerializer):
    question = serializers.PrimaryKeyRelatedField(queryset=Question.objects.all())
    test = serializers.PrimaryKeyRelatedField(queryset=Test.objects.all())
    class Meta:
        model = Option
        fields = ['id', 'question','test' ,'text', 'is_correct']

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'text', 'type', 'options']

class TestSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = Test
        fields = ['id', 'title', 'description', 'created_at', 'updated_at', 'is_active', 'category', 'image', 'questions']

class UserAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAnswer
        fields = ['id', 'user', 'question', 'options', 'open_answer', 'answer_date']

    def validate(self, data):
        question = data['question']
        tipo = question.type

        # Validar tipo ABIERTA
        if tipo == 'ABIERTA':
            if not data.get('open_answer'):
                raise serializers.ValidationError("Se requiere una respuesta escrita para preguntas abiertas.")
            if data.get('options'):
                raise serializers.ValidationError("No debes enviar opciones para preguntas abiertas.")

        # Validar tipo UNICA
        elif tipo == 'UNICA':
            options = data.get('options')
            if not options or len(options) != 1:
                raise serializers.ValidationError("Debes seleccionar exactamente una opción.")

        # Validar tipo MULTIPLE
        elif tipo == 'MULTIPLE':
            if not data.get('options'):
                raise serializers.ValidationError("Debes seleccionar al menos una opción.")
        return data
