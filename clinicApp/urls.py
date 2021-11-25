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
    path('heartinfo', views.heartinfo, name='heartinfo'),
    path('stroke', views.stroke, name='stroke'),
    path('dashboard_client/', views.client_Dashboard, name='dashboard_client'),
    path('chart_client/', views.chart, name='chart'),
    path('drugstore/', views.drugstore, name='drugstore'),
    path('client_profile/', views.client_profile, name='client_profile'),
    path('disease/', views.disease, name='disease'),

    path('signin/', views.signin, name='signin'),
    path(r'ajax/getjson/', views.getjson, name='getjson'),
    path(r'ajax/getHeart/', views.getHeart, name='getHeart'),
    path(r'ajax/getStroke/', views.getStroke, name='getStroke'),
    path(r'ajax/signin/', views.getsignin, name='getsignin'),
    path('dashboard/', views.dashboard, name='dashboard')

]
