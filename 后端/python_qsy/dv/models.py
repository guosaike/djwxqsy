from django.db import models

# Create your models here.


class DjVxymq(models.Model):
    
    appid1=models.CharField(verbose_name='备份去水印小程序1',max_length=255,blank=True,null=True)
    appid2=models.CharField(verbose_name='备份去水印小程序2',max_length=255,blank=True,null=True)
    appid3=models.CharField(verbose_name='备份去水印小程序3',max_length=255,blank=True,null=True)
    appid4=models.CharField(verbose_name='备份去水印小程序4',max_length=255,blank=True,null=True)

    slave_addr = models.CharField(verbose_name='备用接口地址', max_length=255, null=True)
    data_field = models.CharField(verbose_name='接口返回data_field字段名',max_length=255,null=True,blank=True)
    code_field = models.CharField(verbose_name='接口返回code_field字段名',max_length=255,null=True,blank=True)
    code_num = models.CharField(verbose_name='返回码数字',max_length=255,null=True,blank=True)
    # code_num_type = models.CharField(verbose_name='返回码数字类型',max_length=255,null=True,blank=True)

    # 视频标题封面下载链接
    title_video = models.CharField(verbose_name='视频标题name',max_length=255,null=True,blank=True)
    photo_video = models.CharField(verbose_name='视频封面name',max_length=255,null=True,blank=True)
    downurl_video = models.CharField(verbose_name='视频链接name',max_length=255,null=True,blank=True)

    # 图片标题封面下载链接
    title_photo = models.CharField(verbose_name='图片标题name',max_length=255,null=True,blank=True)
    photo_photo = models.CharField(verbose_name='图片封面name',max_length=255,null=True,blank=True)
    pics_photo = models.CharField(verbose_name='图集链接name',max_length=255,null=True,blank=True)

    # 激励视频广告
    adUnitId = models.CharField(verbose_name='激励视频广告id',max_length=255,null=True,blank=True)


class DjVxyq(models.Model):
    
    appid1=models.CharField(verbose_name='备份去水印小程序1',max_length=255,blank=True,null=True)
    appid2=models.CharField(verbose_name='备份去水印小程序2',max_length=255,blank=True,null=True)
    appid3=models.CharField(verbose_name='备份去水印小程序3',max_length=255,blank=True,null=True)
    appid4=models.CharField(verbose_name='备份去水印小程序4',max_length=255,blank=True,null=True)

    slave_addr = models.CharField(verbose_name='备用接口地址', max_length=255, null=True)
    data_field = models.CharField(verbose_name='接口返回data_field字段名',max_length=255,null=True,blank=True)
    code_field = models.CharField(verbose_name='接口返回code_field字段名',max_length=255,null=True,blank=True)
    code_num = models.CharField(verbose_name='返回码数字',max_length=255,null=True,blank=True)
    # code_num_type = models.CharField(verbose_name='返回码数字类型',max_length=255,null=True,blank=True)

    # 视频标题封面下载链接
    title_video = models.CharField(verbose_name='视频标题name',max_length=255,null=True,blank=True)
    photo_video = models.CharField(verbose_name='视频封面name',max_length=255,null=True,blank=True)
    downurl_video = models.CharField(verbose_name='视频链接name',max_length=255,null=True,blank=True)

    # 图片标题封面下载链接
    title_photo = models.CharField(verbose_name='图片标题name',max_length=255,null=True,blank=True)
    photo_photo = models.CharField(verbose_name='图片封面name',max_length=255,null=True,blank=True)
    pics_photo = models.CharField(verbose_name='图集链接name',max_length=255,null=True,blank=True)
    
    # 激励视频广告
    adUnitId = models.CharField(verbose_name='激励视频广告id',max_length=255,null=True,blank=True)