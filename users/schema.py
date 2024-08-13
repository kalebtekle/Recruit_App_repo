# user/schema.py
import graphene
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from graphene_django import DjangoObjectType
from graphene_django.forms.mutation import DjangoModelFormMutation
from django.contrib.auth.forms import UserCreationForm
from graphene import ObjectType, String, Boolean
from .models import Profile
from .utils import decode_jwt_token
import graphql_jwt
from graphql_jwt.shortcuts import get_token
from graphql_jwt.decorators import login_required


class LoginResponseType(ObjectType):
    success = Boolean()
    message = String()
    token = String()

class ProfileType(DjangoObjectType):
    
    class Meta:
        model = Profile

class UserType(DjangoObjectType):
    profile = graphene.Field(ProfileType)
    class Meta:
        model = User

# Define the Query class
class Query(graphene.ObjectType):
    profile = graphene.Field(ProfileType, username=graphene.String(required=True))
    me = graphene.Field(UserType)

    def resolve_profile(self, info, username):
        # Fetch the profile based on the username
        try:
            return Profile.objects.get(user__username=username)  # Assuming Profile has a OneToOne relationship with User
        except Profile.DoesNotExist:
            return None  # Or handle it as appropriate

    def resolve_me(self, info):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('Not logged in!')
        return user

# Define the Mutation class for updating the profile
class UpdateProfile(graphene.Mutation):
    class Arguments:
        bio = graphene.String()
        location = graphene.String()
        avatar = graphene.String()

    profile = graphene.Field(ProfileType)

    def mutate(self, info, bio=None, location=None, avatar=None):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('Not logged in!')

        profile = user.profile

        if bio:
            profile.bio = bio
        if location:
            profile.location = location
        if avatar:
            profile.avatar = avatar

        profile.save()
        return UpdateProfile(profile=profile)
    
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
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()  
    verify_token = graphql_jwt.Verify.Field()   # For obtaining a new token
    refresh_token = graphql_jwt.Refresh.Field() # For refreshing the token
    update_profile = UpdateProfile.Field()

# Define the schema
schema = graphene.Schema(query=Query, mutation=Mutation)