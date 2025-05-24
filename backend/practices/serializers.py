from rest_framework.serializers import ModelSerializer
from .models import Practice,ContPractice

class PracticeSerializer(ModelSerializer):
    class Meta:
        model = Practice
        fields = '__all__'

class ContPracticeSerializer(ModelSerializer):
    class Meta:
        model = ContPractice
        fields = '__all__'        