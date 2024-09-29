from django.urls import path

from dv import views

urlpatterns = [
    path('ymq/', views.Ymq.as_view(), name='ymq'),
    path('yq/', views.Yq.as_view(), name='yq'),
    
    path('api/download/video/', views.download_video, name='download_video'),
    path('api/download/image/', views.download_image, name='download_image'),

]
