from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ChatCompletionViewSet

router = DefaultRouter()
router.register(r'chat', ChatCompletionViewSet, basename='chat')

urlpatterns = [
    path('', include(router.urls)),
]
