from rest_framework import serializers
from . import models

class YmqSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.DjVxymq
        fields = '__all__'


class YqSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.DjVxyq
        fields = '__all__'