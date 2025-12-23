from django.db import models

from apps.color.models import Color
from apps.color_combo.models import ColorCombo

# Create your models here.
class Creation(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    colors = models.ManyToManyField(Color, related_name='creations', blank=True)
    color_combos = models.ManyToManyField(ColorCombo, related_name='creations', blank=True)   
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name