from django.shortcuts import render
from rest_framework import generics
from .models import Color
from .serializers import ColorSerializer

# Create your views here.

# Gets all the colors and returns them as a list
class ColorListCreateAPIView(generics.ListAPIView):
    queryset = Color.objects.all()
    serializer_class = ColorSerializer