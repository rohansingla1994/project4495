import pyrebase
from django.http import JsonResponse, request , HttpResponseRedirect
from django.contrib.auth.models import User
import requests

from firebase_admin.auth import UserNotFoundError, ExpiredIdTokenError


class firebaseconfig:


    def __init__(self):
        firebaseConfig = {'apiKey': "AIzaSyBRAmbOE0Je6pYBet1poJrssEgVHIy79Wk",
                          'authDomain': "django-51dc3.firebaseapp.com",
                          'databaseURL': "https://django-51dc3-default-rtdb.firebaseio.com",
                          'projectId': "django-51dc3",
                          'storageBucket': "django-51dc3.appspot.com",
                          'messagingSenderId': "606023351895",
                          'appId': "1:606023351895:web:a984b45afde710d1996d12",
                          'measurementId': "G-17ZG54CB2H"}

        self.firebase = pyrebase.initialize_app(firebaseConfig)
        self.database = self.firebase.database()
        self.auth = self.firebase.auth()

    def returnKey(self, myjson3):
        email = myjson3.get("userEmail")
        key = self.emailfetching(email)
        return key


    def getjson(self, myjson3):
        email = myjson3.get("userEmail")
        key = self.emailfetching(email)
        password = myjson3.get("userPassword")
        user = self.auth.create_user_with_email_and_password(email, password)
        self.database.child(key).set(myjson3)


    def emailfetching(self, email):
        updatedemail = email.split("@")[0]

        return updatedemail

    def signin(self, myjson3):

        email = myjson3.get("userEmail")
        password = myjson3.get("userPassword")
        try:
            self.auth.sign_in_with_email_and_password(email, password)
           # return HttpResponseRedirect('https://www.google.com/')
            return "Loggeg in"

        except:
            return "invalid User details"

    def set_data(self, id, child, data):

        self.database.child(id).child(child).push(data)


    def getdata(self,id):
        users = self.database.child(id).get()
        return users





