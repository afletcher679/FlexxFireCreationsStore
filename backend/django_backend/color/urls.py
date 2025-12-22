from django.urls import path
from .views import ColorListCreateAPIView


urlpatterns = [
    path('colors/', ColorListCreateAPIView.as_view(), name='color-list'),
]