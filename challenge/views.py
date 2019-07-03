from django.shortcuts import render

def index(request):
    return render(request, 'challenge/challenge.html')

def memoria(request):
    return render(request, 'challenge/game.html')

def questions(request):
    return render(request, 'challenge/questions.html')
