from django.contrib import admin
from .models import DjVxymq, DjVxyq

admin.site.site_title = "欢迎访问管理后台"
admin.site.site_header = "开发者微信: python_kk 去水印接口地址https://api.ake999.com"
admin.site.index_title = "欢迎使用管理后台！如需帮助请联系: python_kk 去水印接口地址https://api.ake999.com"

class BaseAdmin(admin.ModelAdmin):
    # 在每个页面上添加提示
    def get_form(self, request, obj=None, change=False, **kwargs):
        form = super().get_form(request, obj, change, **kwargs)
        for field in form.base_fields.values():
            field.help_text = "开发者微信: python_kk 去水印接口地址https://api.ake999.com"
        return form

@admin.register(DjVxymq, DjVxyq)
class BookAdmin(BaseAdmin):
    list_display = ('appid1', 'appid2', 'appid3', 'appid4', 'slave_addr', 'code_num',
                    'title_video', 'photo_video', 'downurl_video', 'title_photo',
                    'photo_photo', 'pics_photo')
    search_fields = ('slave_addr',)  # 注意：添加逗号