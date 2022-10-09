from rest_framework import serializers
from .models import SocialPost

class PostSocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialPost
        fields = '__all__'