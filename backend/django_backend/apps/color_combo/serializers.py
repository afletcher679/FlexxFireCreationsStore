from .models import ColorCombo
from apps.color.models import Color
from rest_framework import serializers

class ColorComboSerializer(serializers.ModelSerializer):
    colors = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Color.objects.all()
    )

    class Meta:
        model = ColorCombo
        fields = ["id", "name", "colors"]

    def validate_colors(self, value):
        if len(value) != 2:
            raise serializers.ValidationError(
                "A color combo must contain exactly 2 colors."
            )
        return value