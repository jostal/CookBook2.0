from django.db import models

# Create your models here.

class Recipe(models.Model):
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=200)
    description = models.TextField()
    ingredients = models.TextField(default="None")
    procedure = models.TextField(default="None")
    author = models.CharField(max_length=50)
    time_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '%s by %s' % (self.name, self.author)