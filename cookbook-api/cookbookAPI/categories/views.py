from django.shortcuts import render
from .models import Category
from .serializers import CategorySerializer
from rest_framework import generics

# Create your views here.

class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer