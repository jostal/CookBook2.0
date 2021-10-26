from rest_framework import serializers
from .models import Recipe


class RecipeSerializer (serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id', 'category', 'name', 'description', 'ingredients', 'procedure', 'author', 'time_created')