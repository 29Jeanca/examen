from .models import Practice, ContPractice
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .serializers import PracticeSerializer, ContPracticeSerializer


class PracticeListCreateView(ListCreateAPIView):
    queryset = Practice.objects.all()
    serializer_class = PracticeSerializer
    # permission_classes = [IsAuthenticated]  

class ContPracticeListCreateView(ListCreateAPIView):
    queryset = ContPractice.objects.all()
    serializer_class = ContPracticeSerializer
    # permission_classes = [IsAuthenticated]