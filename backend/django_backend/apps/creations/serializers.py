from apps.gallery_image.serializers import GalleryImageSerializer
from apps.color.serializers import ColorSerializer
from apps.color_combo.serializers import ColorComboSerializer
from rest_framework import serializers
from .models import Creation


class CreationSerializer(serializers.ModelSerializer):
    gallery_images = GalleryImageSerializer(many=True, read_only=True)
    colors = ColorSerializer(many=True, read_only=True)
    color_combos = ColorComboSerializer(many=True, read_only=True)
    
    class Meta:
        model = Creation
        fields = '__all__'  # includes all fields like id, name description, price, created_at