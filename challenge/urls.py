from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='challenge'),
	path('game/',views.memoria, name='game'),
	path('questions/',views.questions, name='questions'),
]
