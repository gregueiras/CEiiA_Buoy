"""buoy2 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from oscar.app import application
from machina.app import board

urlpatterns = [
    path('admin/', admin.site.urls),
    path('shop/', application.urls),
    path('i18n/', include('django.conf.urls.i18n')),
    path('forum/', include(board.urls)),
    path('', include('indexapp.urls')),
    path('mapa/', include('mapa.urls')),
    path('contact/', include('contact.urls')),
    path('faq/', include('faq.urls')),
    path('challenge/', include('challenge.urls')),
]

if settings.DEBUG:
    from django.conf.urls.static import static
    from django.contrib.staticfiles.urls import staticfiles_urlpatterns
    # Serve static and media files from development server
    urlpatterns += staticfiles_urlpatterns()
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
