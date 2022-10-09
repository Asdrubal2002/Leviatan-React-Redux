from django.contrib import admin

# Register your models here.

from .models import SocialPost, SocialComment, Image

admin.site.register(SocialPost)
admin.site.register(SocialComment)
admin.site.register(Image)
