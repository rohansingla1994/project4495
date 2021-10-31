from django.http import JsonResponse
from django.shortcuts import render
from clinicApp.DataProcessing import firebaseclass as fc


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
    myjson3 = {'userEmail': userEmail,
               'userPassword': userPassword,
               }
    obj2=fc.firebaseconfig()
    obj2.signin(myjson3)
    print("User successfully sign in")