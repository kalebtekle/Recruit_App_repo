# user/models.py
from django.contrib.auth.models import User
from django.db import models
from django.utils.timezone import now
from django.db.models.signals import post_save
from django.dispatch import receiver

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    bio = models.TextField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
    location = models.CharField(max_length=100, blank=True, null=True)
    birth_date = models.DateField(blank=True, null=True)
    website = models.URLField(blank=True, null=True)
    twitter = models.URLField(blank=True, null=True)
    github = models.URLField(blank=True, null=True)
    linkedin = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.username

    @property
    def age(self):
        if self.birth_date:
            return (now().date() - self.birth_date).days // 365
        return None
class Experience(models.Model):
    profile = models.ForeignKey(Profile, related_name='experience', on_delete=models.CASCADE)
    role = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    years = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.role} at {self.company}"

class Resume(models.Model):
    profile = models.ForeignKey(Profile, related_name='resumes', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField()

    def __str__(self):
        return self.title

class JobPost(models.Model):
    posted_by = models.ForeignKey(Profile, related_name='job_postings', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)

    def __str__(self):
        return self.title
    
# Signals to create or update Profile when User is created or updated
@receiver(post_save, sender=User)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
    instance.profile.save()

