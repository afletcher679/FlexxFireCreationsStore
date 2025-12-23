from django.shortcuts import render
from .models import ColorCombo
from .serializers import ColorComboSerializer
from rest_framework import generics

# Create your views here.

class ColorComboListView(generics.ListAPIView):
    queryset = ColorCombo.objects.prefetch_related("colors")
    serializer_class = ColorComboSerializer

class ColorComboDetailView(generics.RetrieveAPIView):
    queryset = ColorCombo.objects.prefetch_related("colors")
    serializer_class = ColorComboSerializer