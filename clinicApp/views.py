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

def client_Dashboard(request):
    return render(request, 'client_Dashboard.html')

def chart(request):
    return render(request, 'chart.html')

def drugstore(request):
    return render(request, 'checkout.html')

def client_profile(request):
    return render(request, 'patientProfile.html')





def dashboard(request):
    return render(request, 'dashboard.html')


def getjson(request):
    userEmail = request.GET.get('userEmail', None)
    userName = request.GET.get('userName', None)
    userPassword = request.GET.get('userPassword', None)
    userPhone = request.GET.get('userPhone', None)
    userDoB = request.GET.get('userDoB', None)
    userPerson = request.GET.get('userPerson', None)
    userAdLine1 = request.GET.get('userAdLine1', None)
    userAdLine2 = request.GET.get('userAdLine2', None)
    userGender = request.GET.get('userGender', None)
    userType = request.GET.get('userType', None)

    myjson3 = {'userEmail': userEmail,
               'userName': userName,
               'userPassword': userPassword,
               'userPhone': userPhone,
               'userDoB': userDoB,
               'userPerson': userPerson,
               'userAdLine1': userAdLine1,
               'userAdLine2': userAdLine2,
               'userGender': userGender,
               'userType': userType

               }

    data = {
        'is_taken': True
    }
    obj = fc.firebaseconfig()
    obj.getjson(myjson3)

    return JsonResponse(data)


def getsignin(request):
    userEmail = request.GET.get('userEmail', None)
    userPassword = request.GET.get('userPassword', None)
    print(userPassword)
    myjson3 = {'userEmail': userEmail,
               'userPassword': userPassword,
               }
    obj2 = fc.firebaseconfig()
    return_msg = obj2.signin(myjson3)
    data = {
        'is_taken': True,
        'return_msg': return_msg
    }
    return JsonResponse(data)
