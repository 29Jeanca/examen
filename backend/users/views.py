from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import UserModel
from rest_framework_simplejwt.tokens import AccessToken, RefreshToken

class CreateUserView(APIView):
    def post(self,request):
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        profile_picture = request.data.get('profile_picture')

        if not username or not email or not password:
            return Response({"error": "Username, email, and password are required."}, status=400)
        
        if User.objects.filter(username=username).exists():
            return Response({"error": "Username already exists."}, status=400)
        
        if User.objects.filter(email=email).exists():
            return Response({"error": "Email already exists."}, status=400)
        
        user = User.objects.create_user(username=username, email=email, password=password)

        UserModel.objects.create(user=user, profile_picture=profile_picture)

        return Response({"message": "User created successfully."}, status=201)
    
class ValidateUserView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response({"error": "Username and password are required."}, status=400)

        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return Response({"error": "Invalid username or password."}, status=400)

        if not user.check_password(password):
            return Response({"error": "Invalid username or password."}, status=400)

        refresh = RefreshToken.for_user(user)
        AccessToken = str(refresh.access_token)
        return Response({"message": "User validated successfully.",'token':AccessToken}, status=200)
    
class EditUserInfoView(APIView):
    def path(self,request):
        pass