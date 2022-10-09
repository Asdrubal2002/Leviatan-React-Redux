from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status

from apps.social.models import SocialPost

from apps.social.serializers import PostSocialSerializer


from django.db.models import Q

# Create your views here.

class SocialPostView(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        if SocialPost.objects.all().exists():
            posts = SocialPost.objects.order_by('-created_on').all()
            posts = PostSocialSerializer(posts, many=True)

            return Response(
                {'posts': posts.data},
                status=status.HTTP_200_OK
            )
        else:
            return Response(
                {'error': 'No shipping options available'},
                status=status.HTTP_404_NOT_FOUND
            )

