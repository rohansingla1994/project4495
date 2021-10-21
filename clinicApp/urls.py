from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, ),
    path('home/', views.home, name='home'),
    path('heart/', views.heart, name='heart'),
    path('brain/', views.brain, name='brain'),
    path('lifestyle/', views.lifestyle, name='lifestyle'),
    path('statistics/', views.statistics, name='statistics')
]
