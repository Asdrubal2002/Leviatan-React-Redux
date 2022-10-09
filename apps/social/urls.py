from django.urls import path

from .views import SocialPostView

app_name="social"

urlpatterns = [
     path('get-socialPost', SocialPostView.as_view()),
]