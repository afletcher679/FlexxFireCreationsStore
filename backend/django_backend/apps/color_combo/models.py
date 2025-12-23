from django.db import models

# Create your models here.
from apps.color.models import Color
from django.core.exceptions import ValidationError

class ColorCombo(models.Model):
    colors = models.ManyToManyField(
        Color,
        through="ColorComboColor",
        related_name="color_combos",
    )

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.full_clean()

    def __str__(self):
        return " + ".join(c.name for c in self.colors.all())
    
class ColorComboColor(models.Model):
    color_combo = models.ForeignKey(ColorCombo, on_delete=models.CASCADE)
    color = models.ForeignKey(Color, on_delete=models.CASCADE)

    class Meta:
        unique_together = ("color_combo", "color")