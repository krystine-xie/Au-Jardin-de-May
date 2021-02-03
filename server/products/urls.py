from django.urls import path
from .api import ProductApi, ProductCreateApi, ProductUpdateApi

urlpatterns = [
    path('api', ProductApi.as_view()),
    path('api/create', ProductCreateApi.as_view()),
    path('api/update/<int:id>', ProductUpdateApi.as_view())

]