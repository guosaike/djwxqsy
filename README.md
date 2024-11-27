2024最新微信去水印小程序源码（前端微信小程序后端python的django框架）
抖音去水印、快手去水印、微视去水印、头条去水印、火山去水印、小红书去水印



如果有接口可以用自己接口，如果没有去水印接口，可以使用我的，如果用我的接口小程序有问题可以咨询我

python_kk或者qq:976870170，有问题可以询问，免费解答，后期抽时间教大家流量应该咋来，怎么获取流量



一、视频教程：

https://www.bilibili.com/video/BV18N24Y7E9s/?spm_id_from=333.999.0.0&vd_source=9cf5b61e7de8ce2e87bb20e65df646e2



二、图文教程

搭建流程：

1、准备一个备案域名，这里以（test.aketest.site为例），域名和服务器最好都在京东云或者阿里云买，不然你的服务器买了，域名就算其他备案了，京东还要备案



2、一个2核2G轻量云服务器即可

https://3.cn/25K8Z-qW

推荐直接入手3年这个，3年也就392

![image-20240929153001830](01.png)



3、把备案域名解析到云服务器



4、服务器安装宝塔（复制到命令行一键安装）

```bash
url=https://download.bt.cn/install/install_lts.sh;if [ -f /usr/bin/curl ];then curl -sSO $url;else wget -O install_lts.sh $url;fi;bash install_lts.sh ed8484bec
```



5、提前找到一个目录，把后端代码上传，看好目录层次，不要错了

![](02.png)



6、安装python版本3.7.9这个版本不要错了

![image-20240929154216084](03.png)

7、云服务器开启安全组，开一下端口，我这里用 8018 你们根据自己需要开放端口



8、添加后端项目，必须按照图片里的写好

![image-20240929154820880](04.png)



9、我们设置一下网站https访问

![image-20240929155040473](05.png)

![image-20240929155106306](06.png)

![image-20240929155145947](07.png)

如果证书验证失败，就使用dns验证

![image-20240929155231576](08.png)

设置django转发静态文件给nginx

![image-20240929161047081](13.png)



10、设置一下数据库

![](09.png)



11、更新django文件数据库，你们也可以在开始的时候就把数据库换了，再上传

![image-20240929174419618](10.png)



12、迁移数据库

python3 manage.py makemigrations

python3 manage.py migrate

![image-20240929160806821](11.png)

![image-20240929160833496](12.png)

设置超级管理员

![image-20240929161236478](14.png)



13、重启python项目，如果失败就多重启几次，再失败可能是有些依赖没有装上，看日志

![image-20240929161327116](15.png)

![image-20240929161400869](16.png)



14、访问后台https://test.aketest.site/admin

我自己小程序在用去水印接口平台

 https://api.ake999.com

主流平台都可以解析，非常稳定，大家自己选择

![image-20240929161508933](17.png)

这里你有几个小程序就设置几个，这里是可以批量给小程序设置去水印接口

![image-20240929161653735](18.png)

![image-20240929161755001](19.png)

备份去水印小程序1、2、3、4都是小程序id，这就是轮播图点击跳转

接口地址可以去我的接口地址申请

https://api.ake999.com

这里修改了一下逻辑，如果当前激励广告id是空的，就直接下载，如果不是空的，就需要看完激励广告下载

其他的插屏广告，视频广告我们直接使用腾讯一键智能广告即可，这里不再自己开发

![image-20240929162237100](20.png)

![image-20240929162259570](21.png)



下面开始微信小程序，微信小程序这里要操作的就很简单了

1、直接用微信开发者工具打开即可

![image-20240929162619254](22.png)



2、搜索全部 https://test.aketest.site 替换成 你的域名



3、https://test.aketest.site添加微信小程序后台request和download安全域名

这个文件下所有域名加download安全域名

![image-20240929163821241](23.png)

4、测试下载

![5](1.jpg)

![5](2.jpg)

![5](3.jpg)

![5](4.jpg)
