# users/management/commands/create_profiles.py

from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from users.models import Profile

class Command(BaseCommand):
    help = 'Create profiles for all existing users without profiles'

    def handle(self, *args, **kwargs):
        users_without_profiles = User.objects.filter(profile__isnull=True)

        if not users_without_profiles.exists():
            self.stdout.write(self.style.SUCCESS('All users already have profiles.'))
            return

        for user in users_without_profiles:
            Profile.objects.get_or_create(user=user)
            self.stdout.write(self.style.SUCCESS(f'Profile created for user: {user.username}'))

        self.stdout.write(self.style.SUCCESS('All missing profiles have been created.'))
