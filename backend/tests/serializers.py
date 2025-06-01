from rest_framework import serializers
from .models import Test, Question, Option, UserAnswer


class OptionSerializer(serializers.ModelSerializer):
    question = serializers.PrimaryKeyRelatedField(queryset=Question.objects.all()) # Para relacionar las opciones a la pregunta
    test = serializers.PrimaryKeyRelatedField(queryset=Test.objects.all()) #Para relacionar las opciones al exmane
    text_question = serializers.CharField(source='question.text', read_only=True) # Para mostrar el texto de la pregunta
    class Meta:
        model = Option
        fields = ['id', 'question','test' ,'text', 'is_correct', 'why_is_correct', 'text_question']

class QuestionSerializer(serializers.ModelSerializer):
    test = serializers.PrimaryKeyRelatedField(queryset=Test.objects.all())
    options = OptionSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ['id', 'test', 'text', 'type', 'options']

class TestSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True) # Para que me agarre las preguntas de ese examen
    class Meta:
        model = Test
        fields = ['id', 'title', 'description', 'created_at', 'updated_at', 'is_active', 'category', 'image', 'questions']

class UserAnswerSerializer(serializers.ModelSerializer):
    test = serializers.PrimaryKeyRelatedField(queryset=Test.objects.all())
    options = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Option.objects.all(),
        required=False
    )
    text_question = serializers.CharField(source='question.text', read_only=True)
    text_options = serializers.SerializerMethodField()
    correct_answer = serializers.SerializerMethodField()
    class Meta:
        model = UserAnswer
        fields = ['id', 'user', 'question', 'options', 'open_answer', 'answer_date', 'test', 'text_question', 'text_options', 'correct_answer']

    def get_text_options(self, obj):
        return [option.text for option in obj.options.all()]

    def get_correct_answer(self, obj):
        return [option.is_correct for option in obj.options.all()]

    def validate(self, data):
        question = data['question']
        tipo = question.type

        if tipo == 'ABIERTA':
            if not data.get('open_answer'):
                raise serializers.ValidationError("Se requiere una respuesta escrita para preguntas abiertas.")
            if data.get('options'):
                raise serializers.ValidationError("No debes enviar opciones para preguntas abiertas.")

        elif tipo == 'UNICA':
            options = data.get('options')
            if not options or len(options) != 1:
                raise serializers.ValidationError("Debes seleccionar exactamente una opción.")

        elif tipo == 'MULTIPLE':
            if not data.get('options'):
                raise serializers.ValidationError("Debes seleccionar al menos una opción.")

        return data

