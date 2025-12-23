from django.urls import path
from .views import GalleryImagesAPIView

urlpatterns = [
    path('gallery/<int:creation_id>/', GalleryImagesAPIView.as_view(), name='creation-images'),
]