from django.urls import path
from .views import CreationListCreateAPIView

urlpatterns = [
    path('creations/', CreationListCreateAPIView.as_view(), name='creation-list'),
]