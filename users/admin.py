from django.contrib import admin
from .models import Profile, Experience, JobPost

# Register your models here.

admin.site.register(Profile)
admin.site.register(Experience)
admin.site.register(JobPost)