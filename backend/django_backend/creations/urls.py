from django.urls import path
from .views import CreationListCreateAPIView, CreationDetailAPIView

urlpatterns = [
    path('creations/', CreationListCreateAPIView.as_view(), name='creation-list'),
    path('creations/<int:pk>/', CreationDetailAPIView.as_view(), name='creation-detail'),
]