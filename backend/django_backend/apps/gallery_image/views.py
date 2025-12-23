from django.shortcuts import render
from rest_framework import generics, mixins
from .models import GalleryImage
from .serializers import GalleryImageSerializer

# Create your views here.
class GalleryImagesAPIView(mixins.RetrieveModelMixin, generics.GenericAPIView):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)