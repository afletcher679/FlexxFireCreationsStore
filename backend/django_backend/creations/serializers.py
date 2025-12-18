from rest_framework import serializers
from .models import Creation

class CreationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Creation
        fields = '__all__'  # includes all fields like id, name description, price, created_at