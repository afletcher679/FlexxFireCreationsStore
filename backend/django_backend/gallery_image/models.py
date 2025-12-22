from django.db import models
from creations.models import Creation

# Create your models here.
class GalleryImage(models.Model):
    creation = models.ForeignKey(Creation, related_name='gallery_images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='gallery/')

    def __str__(self):
        return f"{self.creation.name} image {self.id}"