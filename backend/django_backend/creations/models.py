from django.db import models

from color.models import Color

# Create your models here.
class Creation(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='creations/images/', blank=True, null=True)
    colors = models.ManyToManyField(Color, related_name='creations', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name