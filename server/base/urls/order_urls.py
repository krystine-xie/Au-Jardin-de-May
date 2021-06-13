from django.urls import path
from base.views import order_views as views


urlpatterns = [
    path('', views.getAllOrders, name='get-all-orders'),
    path('add/', views.addOrderItems, name='add-orders'),
    path('my_orders/', views.getMyOrders, name='my-orders'),
    path('<str:pk>/', views.getOrderById, name='user-order'),
    path('<str:pk>/paid/', views.updateOrderToPaid, name='order-to-paid'),
    path('<str:pk>/delivered/', views.updateOrderToDelivered, name='order-to-delivered')
]