from django.urls import path
from base.views import order_views as views


urlpatterns = [
    path('add/', views.addOrderItems, name='add-orders'),
    path('<str:pk>/', views.getOrderById, name='user-order'),
    path('<str:pk>/paid/', views.updateOrderToPaid, name='order-to-paid'),
]