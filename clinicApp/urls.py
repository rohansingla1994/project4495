from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, ),
    path('home/', views.home, name='home'),
    path('heart/', views.heart, name='heart'),
    path('brain/', views.brain, name='brain'),
    path('lifestyle/', views.lifestyle, name='lifestyle'),
    path('statistics/', views.statistics, name='statistics'),
    path('signup/', views.signup, name='signup'),
    path('signin/', views.signin, name='signin'),
    path(r'ajax/getjson/', views.getjson, name='getjson'),
    path(r'ajax/signin/', views.getsignin, name='getsignin'),
    path('dashboard/', views.dashboard, name='dashboard')

]
