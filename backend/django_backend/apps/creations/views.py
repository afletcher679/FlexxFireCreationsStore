from django.shortcuts import render

# Create your views here.
# Views are Python functions that take http requests and return http response
from rest_framework import generics, mixins
from .models import Creation
from .serializers import CreationSerializer

# Gets all the creations and returns them as a list
class CreationListCreateAPIView(generics.ListAPIView):
    queryset = Creation.objects.all()
    serializer_class = CreationSerializer

# Gets a single creation by primary key and returns it as a dictionary
class CreationDetailAPIView(mixins.RetrieveModelMixin, generics.GenericAPIView):
    queryset = Creation.objects.all()
    serializer_class = CreationSerializer
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)