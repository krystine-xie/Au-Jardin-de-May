from django.urls import path
from base.views import user_views as views


urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', views.registerUser, name='register'),
    path('profile/', views.getUserProfile, name='user-profile'),
    path('profile/update/', views.updateUser, name='update-user-profile'),
    
    path('', views.getUsers, name='users'),
    path('<str:pk>/', views.getUserById, name='get-user-by-id'),
    path('update/<str:pk>/', views.updateUserAsAdmin, name="update-user-admin"),
    path('delete/<str:pk>/', views.deleteUser, name='delete-user')   
]