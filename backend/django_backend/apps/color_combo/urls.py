from .views import ColorComboListView, ColorComboDetailView
from django.urls import path

urlpatterns = [
    path("", ColorComboListView.as_view(), name="color-combo-list"),
    path("<int:pk>/", ColorComboDetailView.as_view(), name="color-combo-detail"),
]