# user/schema.py
import graphene
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from graphene_django import DjangoObjectType
from graphene_django.forms.mutation import DjangoModelFormMutation
from django.contrib.auth.forms import UserCreationForm
from graphene import ObjectType, String, Boolean
from .utils import generate_jwt_token, decode_jwt_token
from graphql_jwt.shortcuts import get_token

class LoginResponseType(ObjectType):
    success = Boolean()
    message = String()
    token = String()

class UserType(DjangoObjectType):
    class Meta:
        model = User

class LoginMutation(graphene.Mutation):
    class Arguments:
        username = String(required=True)
        password = String(required=True)

    # Define what this mutation will return
    success = Boolean()
    message = String()
    token = String()

    def mutate(self, info, username, password):
        user = authenticate(username=username, password=password)
        if user is not None:
            # Generate a token or use your authentication mechanism
            token = get_token(user)
            return LoginMutation(success=True, message="Login successful", token=token)
        else:
            return LoginMutation(success=False, message="Invalid credentials", token=None)

class RegisterMutation(DjangoModelFormMutation):
    user = graphene.Field(UserType)

    class Meta:
        form_class = UserCreationForm

    @classmethod
    def perform_mutate(cls, form, info):
        user = form.save()
        return cls(user=user)

class Mutation(graphene.ObjectType):
    login = LoginMutation.Field()
    register = RegisterMutation.Field()

class Query(graphene.ObjectType):
    me = graphene.Field(UserType)
    users = graphene.List(UserType)

    def resolve_me(self, info):
        auth = info.context.META.get('HTTP_AUTHORIZATION')
        if auth:
            try:
                token = auth.split(' ')[1]
                payload = decode_jwt_token(token)
                user = User.objects.get(id=payload['user_id'])
                return user
            except Exception as e:
                raise Exception(f'Authentication failed: {str(e)}')
        raise Exception('Not authenticated')
        return user

    def resolve_users(self, info):
        return User.objects.all()
