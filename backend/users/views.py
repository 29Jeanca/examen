from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import UserModel
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
import re

email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'


class CreateUserView(APIView):
    def post(self, request):
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        profile_picture = request.data.get('profile_picture')

        if not username or not email or not password:
            return Response({"error": "Se requieren nombre de usuario, correo electrónico y contraseña."}, status=400)
        
        if re.match(email_regex, email) is None:
            return Response({"error": "Formato de correo electrónico inválido."}, status=400)

        if User.objects.filter(username=username).exists():
            return Response({"error": "El nombre de usuario ya existe."}, status=400)
        
        if User.objects.filter(email=email).exists():
            return Response({"error": "El correo electrónico ya está registrado."}, status=400)
        
        user = User.objects.create_user(username=username, email=email, password=password)

        UserModel.objects.create(user=user, profile_picture=profile_picture)
    
        return Response({"message": "Usuario creado exitosamente."}, status=201)


class ValidateUserView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response({"error": "Se requieren nombre de usuario y contraseña."}, status=400)

        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return Response({"error": "Nombre de usuario o contraseña inválidos."}, status=400)

        if not user.check_password(password):
            return Response({"error": "Nombre de usuario o contraseña inválidos."}, status=400)

        refresh = RefreshToken.for_user(user)
        AccessToken = str(refresh.access_token)
        return Response({"message": "Usuario validado correctamente.", 'token': AccessToken}, status=200)


class EditUserInfoView(APIView):
    permission_classes = [IsAuthenticated]

    def patch(self, request, id):
        username = request.data.get('username')
        email = request.data.get('email')
        profile_picture = request.data.get('profile_picture')
        password = request.data.get('password')

        if not id:
            return Response({"error": "Se requiere el ID del usuario."}, status=400)
        
        try:
            user = User.objects.get(id=id)
        except User.DoesNotExist:
            return Response({"error": "Usuario no encontrado."}, status=404)
        
        if username:
            user.username = username
        if email:
            user.email = email
        if password:
            user.set_password(password)
        if profile_picture:
            user.usermodel.profile_picture = profile_picture

        user.save()

        return Response({"message": "Información del usuario actualizada correctamente."}, status=200)
