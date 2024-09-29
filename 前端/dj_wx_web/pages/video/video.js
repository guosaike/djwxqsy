Page({
  data: {
    resultData: null,
    hasWatchedAd: false,
    adWatchedTimestamp: null,
    currentAction: null,
    adUnitId: '', // 添加广告单元 ID
    downloadList: [
      'https://49-79-134-222.volcsiriusbd.com',
      'https://ali-ky.video.yximgs.com',
      'https://alimov2.a.kwimgs.com',
      'https://alimov2.a.yximgs.com',
      'https://apd-4af61a075495b237b2cebd02a8b452de.v.smtcdns.com',
      'https://apd-dab9ae12dbdc8420779f283f9f3d368b.v.smtcdns.com',
      'https://baikevideo.cdn.bcebos.com',
      'https://bd-video.izuiyou.com',
      'https://bdmov.a.yximgs.com',
      'https://bizsec-auth.alicdn.com',
      'https://ci.xiaohongshu.com',
      'https://cloud.video.taobao.com',
      'https://cn-ahwh-ct-01-02.bilivideo.com',
      'https://cn-sccd-ct-01-20.bilivideo.com',
      'https://cn-sccd-ct-01-22.bilivideo.com',
      'https://cn-scya-ct-01-04.bilivideo.com',
      'https://daren-auth.alicdn.com',
      'https://f.us.sinaimg.cn',
      'https://f.video.weibocdn.com',
      'https://fb.video.weibocdn.com',
      'https://fvdcdn.cp63.ott.cibntv.net',
      'https://guangguang.cloudvideocdn.taobao.com',
      'https://hwvideo.izuiyou.com',
      'https://img.alicdn.com',
      'https://jsmov2.a.yximgs.com',
      'https://jsmov3.a.yximgs.com',
      'https://jsy.izuiyou.com',
      'https://jvod.300hu.com',
      'https://live-segment.cloudvideocdn.taobao.com',
      'https://live.video.weibocdn.com',
      'https://love.srvv.cn',
      'https://m.video.weibocdn.com',
      'https://mpvideo.qpic.cn',
      'https://music.163.com',
      'https://o1.a.88cdn.com',
      'https://o3.a.88cdn.com',
      'https://p1.a.yximgs.com',
      'https://p2.a.yximgs.com',
      'https://p26-sign.douyinpic.com',
      'https://p3-sign.douyinpic.com',
      'https://p3.a.yximgs.com',
      'https://p4.a.yximgs.com',
      'https://p5.a.yximgs.com',
      'https://p9-sign.douyinpic.com',
      'https://p97-sign.douyinpic.com',
      'https://q.weishi.qq.com',
      'https://qq.yyymvp.com',
      'https://qsy.ludeqi.com',
      'https://shortv.cdp.qq.com',
      'https://sns-img-qc.xhscdn.com',
      'https://sns-video-hw.xhscdn.com',
      'https://store.xiaohongshu.com',
      'https://tb-video.bdstatic.com',
      'https://tbm-auth.alicdn.com',
      'https://tbvideo.ixiaochuan.cn',
      'https://tx-safety-video.acfun.cn',
      'https://tx.stream.kg.qq.com',
      'https://tx2.a.kwimgs.com',
      'https://txmov2.a.kwimgs.com',
      'https://txmov2.a.yximgs.com',
      'https://txzuiyou.izuiyou.com',
      'https://upmov.a.kwimgs.com',
      'https://upos-sz-mirror08c.bilivideo.com',
      'https://upos-sz-mirrorali.bilivideo.com',
      'https://upos-sz-mirrorcos.bilivideo.com',
      'https://upos-sz-mirrorhw.bilivideo.com',
      'https://uu.yyymvp.com',
      'https://v.weishi.qq.com',
      'https://v.xiaohongshu.com',
      'https://v1-cold.douyinvod.com',
      'https://v1.douyinvod.com',
      'https://v11-cold.douyinvod.com',
      'https://v11-x.douyinvod.com',
      'https://v11.douyinvod.com',
      'https://v13-b.douyinvod.com',
      'https://v26-cdn-tos.ppxvod.com',
      'https://v26-cold.douyinvod.com',
      'https://v26-default.365yg.com',
      'https://v26-default.ixigua.com',
      'https://v26-jianying.vlabvod.com',
      'https://v26-web.douyinvod.com',
      'https://v26.douyinvod.com',
      'https://v26.huoshanvod.com',
      'https://v27-cold.douyinvod.com',
      'https://v27.douyinvod.com',
      'https://v3-a.huoshanvod.com',
      'https://v3-b.douyinvod.com',
      'https://v3-c.douyinvod.com',
      'https://v3-d.douyinvod.com',
      'https://v3-default.ixigua.com',
      'https://v3-jianying.vlabvod.com',
      'https://v3-web.douyinvod.com',
      'https://v3-xg-web-pc.ixigua.com',
      'https://v3.douyinvod.com',
      'https://v5-cold.douyinvod.com',
      'https://v5-colda.douyinvod.com',
      'https://v5-colde.douyinvod.com',
      'https://v5-coldf.douyinvod.com',
      'https://v5-coldg.douyinvod.com',
      'https://v5-coldh.douyinvod.com',
      'https://v5-coldj.douyinvod.com',
      'https://v5-coldp.douyinvod.com',
      'https://v5-coldy.douyinvod.com',
      'https://v5-j.douyinvod.com',
      'https://v5-re-un803.douyinvod.com',
      'https://v5.douyinvod.com',
      'https://v6-cold-nxyd.douyinvod.com',
      'https://v6-default.ixigua.com',
      'https://v6-jianying.vlabvod.com',
      'https://v6-x.douyinvod.com',
      'https://v6.douyinvod.com',
      'https://v83-017.douyinvod.com',
      'https://v9-cold.douyinvod.com',
      'https://v9-cold1.douyinvod.com',
      'https://v9-default.ixigua.com',
      'https://v9-jianying.vlabvod.com',
      'https://v9-z.douyinvod.com',
      'https://v9.douyinvod.com',
      'https://v9.huoshanvod.com',
      'https://v95.douyinvod.com',
      'https://v99.douyinvod.com',
      'https://vali-ugc.cp31.ott.cibntv.net',
      'https://vali01.cp31.ott.cibntv.net',
      'https://vd2.bdstatic.com',
      'https://vd3.bdstatic.com',
      'https://vd4.bdstatic.com',
      'https://vdse.bdstatic.com',
      'https://video-extract.qingdou.vip',
      'https://video.dispatch.tc.qq.com',
      'https://video.izuiyou.com',
      'https://video4.pddpic.com',
      'https://videocdn.poizon.com',
      'https://xianyu-video.alicdn.com',
      'https://xx1.video.xiuxiustatic.com',
      'https://yy.yyymvp.com',
      'https://v93.douyinvod.com',
      'https://v5-che.douyinvod.com',
      'https://v6-qos-hourly.douyinvod.com',
      'https://v26-che.douyinvod.com',
      'https://v6-cold.douyinvod.com',
      'https://v83-x.douyinvod.com',
      'https://v5-coldb.douyinvod.com',
      'https://v3-z.douyinvod.com',
      'https://v1-x.douyinvod.com',
      'https://v6-ab-e1.douyinvod.com',
      'https://v5-abtest.douyinvod.com',
      'https://v9-che.douyinvod.com',
      'https://v83-y.douyinvod.com',
      'https://v5-litea.douyinvod.com',
      'https://v3-che.douyinvod.com',
      'https://v29-cold.douyinvod.com',
      'https://v5-lite.douyinvod.com',
      'https://v29-qos-control.douyinvod.com',
      'https://v5-gdgz.douyinvod.com',
      'https://v5-ttcp-a.douyinvod.com',
      'https://v3-b.douyinvod.com',
      'https://v9-z-qos-control.douyinvod.com',
      'https://v9-x-qos-hourly.douyinvod.com',
      'https://v9-chc.douyinvod.com',
      'https://v9-qos-hourly.douyinvod.com',
      'https://v5-ttcp-b.douyinvod.com',
      'https://v6-z-qos-control.douyinvod.com',
      'https://v5-dlyd.douyinvod.com',
      'https://v5-coldy.douyinvod.com',
      'https://v3-c.douyinvod.com',
      'https://v5-jbwl.douyinvod.com',
      'https://v26-0015c002.douyinvod.com',
      'https://v5-gdwy.douyinvod.com',
      'https://v3-d.douyinvod.com',
      'https://v3-p.douyinvod.com',
      'https://v5-gdhy.douyinvod.com',
      'https://v26-cold.douyinvod.com',
      'https://v5-lite-a.douyinvod.com',
      'https://v5-i.douyinvod.com',
      'https://v5-g.douyinvod.com',
      'https://v26-qos-daily.douyinvod.com',
    ], // 你的小程序合法 download 列表
  },

  onLoad: function (options) {
    const hasWatchedAd = wx.getStorageSync('hasWatchedAd');
    const adWatchedTimestamp = wx.getStorageSync('adWatchedTimestamp');

    this.setData({
      hasWatchedAd: !!hasWatchedAd,
      adWatchedTimestamp: adWatchedTimestamp || null
    });

    // 请求后台获取配置
    wx.request({
      url: 'https://test.aketest.site/ymq/',
      method: 'GET',
      success: (res) => {
        const config = res.data.data;
        this.setData({
          adUnitId: config.adUnitId, // 存储广告单元 ID
        });

        if (options.data) {
          const resultData = JSON.parse(decodeURIComponent(options.data));
          this.setData({
            resultData: resultData
          });
        }
      },
      fail: () => {
        wx.showToast({
          title: '获取配置失败',
          icon: 'none'
        });
      }
    });
  },

  confirmAdWatch: function (e) {
    const action = e.currentTarget.dataset.action;
    wx.showModal({
      title: '提示',
      content: '需观看一段广告，即可获取资源',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            currentAction: action
          });
          this.watchAd(() => {
            this.handleAction();
          });
        }
      }
    });
  },

  handleAction: function () {
    switch (this.data.currentAction) {
      case 'copyTitle':
        this.onCopyTitle();
        break;
      case 'copyLink':
        this.onCopyLink();
        break;
      case 'downloadVideo':
        this.onDownloadVideo();
        break;
      case 'downloadAllPics':
        this.onDownloadAllPics();
        break;
      default:
        break;
    }
  },

  watchAd: function (callback) {
    const currentTime = new Date().getTime();
    const twelveHours = 12 * 60 * 60 * 1000;
    const lastWatchedTime = this.data.adWatchedTimestamp;

    if (this.data.hasWatchedAd && lastWatchedTime && (currentTime - lastWatchedTime) < twelveHours) {
      callback();
      return;
    }

    wx.showLoading({
      title: '加载广告中...'
    });

    const videoAd = wx.createRewardedVideoAd({
      adUnitId: this.data.adUnitId // 使用从 Django 请求得到的广告单元 ID
    });

    videoAd.load()
      .then(() => {
        wx.hideLoading();
        return videoAd.show();
      })
      .catch(err => {
        wx.hideLoading();
        wx.showToast({
          title: '广告加载失败，请稍后重试',
          icon: 'none'
        });
      });

    videoAd.offClose();
    videoAd.onClose((status) => {
      if (status && status.isEnded) {
        wx.setStorageSync('hasWatchedAd', true);
        wx.setStorageSync('adWatchedTimestamp', currentTime);
        this.setData({
          hasWatchedAd: true,
          adWatchedTimestamp: currentTime
        });
        callback();
      } else {
        wx.showToast({
          title: '观看完整广告才能继续操作',
          icon: 'none'
        });
      }
    });

    videoAd.offError();
    videoAd.onError((err) => {
      wx.hideLoading();
      wx.showToast({
        title: '广告拉取失败，请稍后重试',
        icon: 'none'
      });
    });
  },

  onCopyLink: function () {
    wx.setClipboardData({
      data: this.data.resultData.downurl,
      success: () => {
        wx.showToast({
          title: '链接已复制',
          icon: 'success'
        });
      }
    });
  },

  onCopyTitle: function () {
    wx.setClipboardData({
      data: this.data.resultData.title,
      success: () => {
        wx.showToast({
          title: '标题已复制',
          icon: 'success'
        });
      }
    });
  },

  isUrlInDownloadList(url) {
    return this.data.downloadList.some(validUrl => url.includes(validUrl));
  },

  onDownloadVideo: function () {
    let url = this.data.resultData.downurl;

    const isInDownloadList = this.isUrlInDownloadList(url);

    if (!isInDownloadList) {
      url = `https://test.aketest.site/api/download/video/?url=${encodeURIComponent(this.data.resultData.downurl)}`;
    }

    if (!url) {
      wx.showToast({
        title: '无效的视频链接',
        icon: 'none'
      });
      return;
    }

    wx.showLoading({
      title: '准备下载...',
    });

    const downloadTask = wx.downloadFile({
      url: url,
      success: (res) => {
        wx.hideLoading(); // 确保成功时隐藏加载动画

        if (res.statusCode === 200) {
          if (!isInDownloadList) {
            wx.getFileInfo({
              filePath: res.tempFilePath,
              success: (fileRes) => {
                if (fileRes.size > 20 * 1024 * 1024) {
                  wx.setClipboardData({
                    data: url,
                    success: () => {
                      wx.showToast({
                        title: '视频超过20MB，请使用浏览器下载',
                        icon: 'none'
                      });
                    }
                  });
                } else {
                  saveVideo(res.tempFilePath);
                }
              },
              fail: () => {
                wx.showToast({
                  title: '获取文件信息失败',
                  icon: 'none'
                });
              }
            });
          } else {
            saveVideo(res.tempFilePath);
          }
        } else {
          wx.showToast({
            title: '视频下载失败',
            icon: 'none'
          });
        }
      },
      fail: (err) => {
        wx.hideLoading(); // 在失败时也确保隐藏加载动画
        wx.showToast({
          title: '下载失败，请点击左侧复制链接打开浏览器下载',
          icon: 'none'
        });
        console.error("下载失败的 URL: ", url);
        console.error("错误信息: ", err);
      }
    });

    downloadTask.onProgressUpdate((res) => {
      if (res.progress === 100) {
        wx.hideLoading(); // 下载完成时关闭加载提示
      } else {
        wx.showLoading({
          title: `下载进度: ${res.progress}%`,
        });
      }
    });

    function saveVideo(filePath) {
      wx.saveVideoToPhotosAlbum({
        filePath: filePath,
        success: () => {
          wx.showToast({
            title: '视频保存成功',
            icon: 'success'
          });
        },
        fail: () => {
          wx.showToast({
            title: '保存到相册失败',
            icon: 'none'
          });
        }
      });
    }
  },

  onDownloadAllPics: function() {
    const pics = this.data.resultData.pics;
    if (!pics || pics.length === 0) {
      wx.showToast({
        title: '没有图片可下载',
        icon: 'none'
      });
      return;
    }

    wx.showLoading({
      title: '准备下载...',
    });

    const totalPics = pics.length;
    let downloadedPics = 0;

    const downloadPic = (index) => {
      if (index >= totalPics) {
        wx.hideLoading(); // 所有下载完成后隐藏加载动画
        wx.showToast({
          title: '所有图片下载完成',
          icon: 'success'
        });
        return;
      }

      const url = `https://test.aketest.site/api/download/image/?url=${encodeURIComponent(pics[index])}`;
      wx.downloadFile({
        url: url,
        success: (res) => {
          if (res.statusCode === 200) {
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: () => {
                downloadedPics++;
                wx.showLoading({
                  title: `下载进度: ${Math.round((downloadedPics / totalPics) * 100)}%`,
                });
                downloadPic(index + 1);
              },
              fail: () => {
                wx.showToast({
                  title: `图片 ${index + 1} 保存失败`,
                  icon: 'none'
                });
                downloadPic(index + 1);
              }
            });
          } else {
            wx.showToast({
              title: `图片 ${index + 1} 下载失败`,
              icon: 'none'
            });
            downloadPic(index + 1);
          }
        },
        fail: (err) => {
          wx.showToast({
            title: `图片 ${index + 1} 下载失败`,
            icon: 'none'
          });
          downloadPic(index + 1);
        }
      });
    };

    downloadPic(0);
  }
});