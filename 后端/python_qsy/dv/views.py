from django.shortcuts import render

# Create your views here.

from django.views import View
from rest_framework.response import Response
from rest_framework.views import APIView
from . import ser
from .models import DjVxymq,DjVxyq

from django.http import HttpResponse
import requests

class Ymq(APIView):
    def get(self,request):
        obj = DjVxymq.objects.get(id=1)
        ser1 = ser.YmqSerializer(obj)
        data = {
            "appid1":(ser1.data)['appid1'],
            "appid2":(ser1.data)['appid2'],
            "appid3":(ser1.data)['appid3'],
            "appid4":(ser1.data)['appid4'],
            "slave_addr":(ser1.data)['slave_addr'],
            "adUnitId":(ser1.data)['adUnitId'],
            "data_field":"data",
            "code_field":"code",
            "code_num":"200",
            "title_video":"title",
            "photo_video":"cover_url",
            "downurl_video":"video_url",
            "title_photo":"title",
            "photo_photo":"cover_url",
            "pics_photo":"images",
        }
        return Response({'data':data})

class Yq(APIView):
    def get(self,request):
        obj = DjVxyq.objects.get(id=1)
        ser1 = ser.YqSerializer(obj)
        return Response({'data':ser1.data})

def download_video(request):
    url = request.GET.get("url")
    if not url:
        return HttpResponse("wuxiao",status=400)
    try:
        response = requests.get(url,stream=True)
        response.raise_for_status()
        # 设置响应头
        response_headers = {
                            'Content-Type': 'video/mp4',
                            'Content-Length': response.headers.get('Content-Length', 0),
                             }
        http_response = HttpResponse(response.iter_content(chunk_size=8192), headers=response_headers)
        return http_response
    except requests.exceptions.RequestException as e:
        return HttpResponse(f"shibai:{str(e)}")

def download_image(request):
    url = request.GET.get("url")
    if not url:
        return HttpResponse("wuxiao",status=400)
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()  # 抛出HTTPError异常
        response_headers = {
            'Content-Type': 'image/jpeg',
            'Content-Length': response.headers.get('Content-Length', 0),
                        }
        http_response = HttpResponse(response.iter_content(chunk_size=8192), headers=response_headers)
        return http_response
    except requests.exceptions.RequestException as e:
        return HttpResponse(f"shibai:{str(e)}")
