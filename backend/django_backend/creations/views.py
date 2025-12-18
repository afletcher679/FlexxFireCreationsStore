from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Creation
from .serializers import CreationSerializer

class CreationListCreateAPIView(generics.ListCreateAPIView):
    queryset = Creation.objects.all()
    serializer_class = CreationSerializer