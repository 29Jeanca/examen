from .models import Practice, ContPractice
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView,ListAPIView,RetrieveAPIView
from .serializers import PracticeSerializer, ContPracticeSerializer


class PracticeListCreateView(ListCreateAPIView):
    queryset = Practice.objects.all()
    serializer_class = PracticeSerializer
    # permission_classes = [IsAuthenticated]  

class PracticeView(RetrieveAPIView):
    queryset = Practice.objects.all()
    serializer_class = PracticeSerializer
    # permission_classes = [IsAuthenticated]

class ContPracticeListCreateView(ListCreateAPIView):
    queryset = ContPractice.objects.all()
    serializer_class = ContPracticeSerializer
    # permission_classes = [IsAuthenticated]
