from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

def home(request):
    return render(request, 'index.html')


def heart(request):
    return render(request, 'heartHealth.html')


def brain(request):
    return render(request, 'brainHealth.html')


def lifestyle(request):
    return render(request, 'lifeStyle.html')


def statistics(request):
    return render(request, 'statistics.html')


def signup(request):
    return render(request, 'signup.html')


def signin(request):
    return render(request, 'signin.html')
