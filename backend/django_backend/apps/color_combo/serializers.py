from .models import ColorCombo
from apps.color.serializers import ColorSerializer
from rest_framework import serializers

class ColorComboSerializer(serializers.ModelSerializer):
    colors = ColorSerializer(many=True, read_only=True)

    class Meta:
        model = ColorCombo
        fields = '__all__'

    def validate_colors(self, value):
        if len(value) != 2:
            raise serializers.ValidationError(
                "A color combo must contain exactly 2 colors."
            )
        return value