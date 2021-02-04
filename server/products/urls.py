from django.urls import path
from .api import ProductApi, ProductCreateApi, ProductUpdateApi, ProductDeleteApi

urlpatterns = [
    path('api', ProductApi.as_view()),
    path('api/create', ProductCreateApi.as_view()),
    path('api/update/<int:id>', ProductUpdateApi.as_view()),
    path('api/<int:pk>/delete', ProductDeleteApi.as_view()),
]