# Generated by Django 3.2.23 on 2024-09-29 08:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DjVxymq',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('appid1', models.CharField(blank=True, max_length=255, null=True, verbose_name='备份去水印小程序1')),
                ('appid2', models.CharField(blank=True, max_length=255, null=True, verbose_name='备份去水印小程序2')),
                ('appid3', models.CharField(blank=True, max_length=255, null=True, verbose_name='备份去水印小程序3')),
                ('appid4', models.CharField(blank=True, max_length=255, null=True, verbose_name='备份去水印小程序4')),
                ('slave_addr', models.CharField(max_length=255, null=True, verbose_name='备用接口地址')),
                ('data_field', models.CharField(blank=True, max_length=255, null=True, verbose_name='接口返回data_field字段名')),
                ('code_field', models.CharField(blank=True, max_length=255, null=True, verbose_name='接口返回code_field字段名')),
                ('code_num', models.CharField(blank=True, max_length=255, null=True, verbose_name='返回码数字')),
                ('title_video', models.CharField(blank=True, max_length=255, null=True, verbose_name='视频标题name')),
                ('photo_video', models.CharField(blank=True, max_length=255, null=True, verbose_name='视频封面name')),
                ('downurl_video', models.CharField(blank=True, max_length=255, null=True, verbose_name='视频链接name')),
                ('title_photo', models.CharField(blank=True, max_length=255, null=True, verbose_name='图片标题name')),
                ('photo_photo', models.CharField(blank=True, max_length=255, null=True, verbose_name='图片封面name')),
                ('pics_photo', models.CharField(blank=True, max_length=255, null=True, verbose_name='图集链接name')),
                ('adUnitId', models.CharField(blank=True, max_length=255, null=True, verbose_name='激励视频广告id')),
            ],
        ),
        migrations.CreateModel(
            name='DjVxyq',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('appid1', models.CharField(blank=True, max_length=255, null=True, verbose_name='备份去水印小程序1')),
                ('appid2', models.CharField(blank=True, max_length=255, null=True, verbose_name='备份去水印小程序2')),
                ('appid3', models.CharField(blank=True, max_length=255, null=True, verbose_name='备份去水印小程序3')),
                ('appid4', models.CharField(blank=True, max_length=255, null=True, verbose_name='备份去水印小程序4')),
                ('slave_addr', models.CharField(max_length=255, null=True, verbose_name='备用接口地址')),
                ('data_field', models.CharField(blank=True, max_length=255, null=True, verbose_name='接口返回data_field字段名')),
                ('code_field', models.CharField(blank=True, max_length=255, null=True, verbose_name='接口返回code_field字段名')),
                ('code_num', models.CharField(blank=True, max_length=255, null=True, verbose_name='返回码数字')),
                ('title_video', models.CharField(blank=True, max_length=255, null=True, verbose_name='视频标题name')),
                ('photo_video', models.CharField(blank=True, max_length=255, null=True, verbose_name='视频封面name')),
                ('downurl_video', models.CharField(blank=True, max_length=255, null=True, verbose_name='视频链接name')),
                ('title_photo', models.CharField(blank=True, max_length=255, null=True, verbose_name='图片标题name')),
                ('photo_photo', models.CharField(blank=True, max_length=255, null=True, verbose_name='图片封面name')),
                ('pics_photo', models.CharField(blank=True, max_length=255, null=True, verbose_name='图集链接name')),
                ('adUnitId', models.CharField(blank=True, max_length=255, null=True, verbose_name='激励视频广告id')),
            ],
        ),
    ]
