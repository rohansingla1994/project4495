from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
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


def heartinfo(request):
    return render(request, 'heartinfo.html')


def stroke(request):
    return render(request, 'stroke.html')


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


def disease(request):
    return render(request, 'selectDisease.html')


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


def getHeart(request):
    key = request.GET.get('userName', None)
    userAge = request.GET.get('userAge', None)
    userGender = request.GET.get('userGender', None)
    heartDisease = request.GET.get('heartDisease', None)
    hypertension = request.GET.get('hypertension', None)
    married = request.GET.get('married', None)
    employment = request.GET.get('employment', None)
    smoking = request.GET.get('smoking', None)
    gulucose = request.GET.get('gulucose', None)
    bodyMassIndex = request.GET.get('bodyMassIndex', None)

    myJson4 = {'userAge': userAge,
               'userGender': userGender,
               'heartDisease': heartDisease,
               'hypertension': hypertension,
               'married': married,
               'employment': employment,
               'smoking': smoking,
               'gulucose': gulucose,
               'bodyMassIndex': bodyMassIndex,
               'userName': key

               }

    data = {
        'is_taken': True
    }
    obj = fc.firebaseconfig()


    obj.set_data(key, "heartData", myJson4)

    return JsonResponse(data)


def getStroke(request):
    key=request.GET.get('userName',None)
    userAge = request.GET.get('userAge', None)
    anamemia = request.GET.get('anamemia', None)
    creatinine = request.GET.get('creatinine', None)
    ejection_fraction = request.GET.get('ejection_fraction', None)
    platelets = request.GET.get('platelets', None)
    serum_ceratnine = request.GET.get('serum_ceratnine', None)
    serum_sodium = request.GET.get('serum_sodium', None)
    time = request.GET.get('time', None)
    saturation = request.GET.get('saturation', None)

    myJson5 = {'userAge': userAge,
               'anamemia': anamemia,
               'creatinine': creatinine,
               'ejection_fraction': ejection_fraction,
               'platelets': platelets,
               'serum_ceratnine': serum_ceratnine,
               'serum_sodium': serum_sodium,
               'time': time,
               'saturation': saturation,
               'userName': key

               }

    data = {
        'is_taken': True
    }

    obj = fc.firebaseconfig()
    obj.set_data(key, "Strokedata", myJson5)
    abc=obj.getdata(key)
    print(abc.val())


    return JsonResponse(data)






