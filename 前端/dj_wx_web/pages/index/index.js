Page({
  data: {
    inputUrl: '',
    hasWatchedAd: false,
    showPopup: false,
    popupAnimation: {},
    interstitialAd: null  // 用于存储插屏广告实例
  },

  onLoad: function() {
    this.showPopup();
    const hasWatchedAd = wx.getStorageSync('hasWatchedAd');
    this.setData({
      hasWatchedAd: !!hasWatchedAd
    });

    // 请求后台获取配置
    wx.request({
      url: 'https://qsy.aketest.site/ymq/',
      method: 'GET',
      success: (res) => {
        this.setData({
          config: res.data.data
        });
      },
      fail: () => {
        wx.showToast({
          title: '获取配置失败',
          icon: 'none'
        });
      }
    });
  },


  showPopup() {
    this.setData({ showPopup: true });
    setTimeout(() => {
      this.setData({ showPopup: false });
    }, 16000); // 弹窗显示16秒后消失
  },

  closePopup() {
    this.setData({ showPopup: false });
  },

  // 处理文本框输入
  onInputUrl: function(e) {
    this.setData({
      inputUrl: e.detail.value
    });
  },

  // 清空内容
  onClear: function() {
    this.setData({
      inputUrl: ''
    });
  },

  onSwiperItemTap: function(event) {
    const index = event.currentTarget.dataset.index;

    const { appid1, appid2, appid3, appid4 } = this.data.config;

    // 从后台传过来的小程序 ID 对象中获取 appId
    const appIds = { 
      appid1: appid1, 
      appid2: appid2, 
      appid3: appid3, 
      appid4: appid4 // 如果有的话
    };

    // 根据 index 从 appIds 中获取对应的 appId
    let appId;
    switch (index) {
      case '0':
        appId = appIds.appid1;
        break;
      case '1':
        appId = appIds.appid2;
        break;
      case '2':
        appId = appIds.appid3;
        break;
      case '3':
        appId = appIds.appid4;
        break;
      default:
        console.error('无效的 swiper item index');
        return; // 结束函数
    }
    
    // 调用 wx.navigateToMiniProgram
    wx.navigateToMiniProgram({
      appId: appId,
      path: '', // 可选，目标页面路径
      envVersion: 'release', // 可选，目标版本
      success(res) {
          console.log('跳转成功', res);
      },
      fail(err) {
          console.error('跳转失败', err);
      }
    });
  },

  // 分享按钮点击事件
  onShare() {
    // 调用微信小程序的分享功能
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
  },

  // 粘贴并解析链接
  onPasteAndParse: function() {
    wx.getClipboardData({
      success: (res) => {
        const clipboardData = res.data;
        if (clipboardData) {
          this.setData({
            inputUrl: clipboardData
          });
          this.onParse();
        } else {
          wx.showToast({
            title: '剪贴板为空',
            icon: 'none'
          });
        }
      },
      fail: (err) => {
        wx.showToast({
          title: '无法获取剪贴板内容',
          icon: 'none'
        });
        console.error('获取剪贴板内容失败', err);
      }
    });
  },

  onParse: function() {
    const url = this.data.inputUrl;
    if (!url) {
      wx.showToast({
        title: '请输入链接',
        icon: 'none'
      });
      return;
    }
    
    wx.showLoading({
      title: '解析中...'
    });

    const { slave_addr, data_field, code_field, code_num, title_video, photo_video, downurl_video, title_photo, photo_photo, pics_photo } = this.data.config;

    console.log(slave_addr,data_field,code_num,title_video,photo_video,downurl_video)

    wx.request({
      url: `${slave_addr}${encodeURIComponent(url)}`,
      method: 'GET',
      success: (res) => {
        wx.hideLoading();
        const Data = res.data[data_field];
        const Code = res.data[code_field];
        const codeNumStr = String(code_num); // 将 code_num 转换为字符串
        console.log(Data, 'slkdfjksldfjksdlfjskdlfjksldjfjksd');
        if (Data && (String(Code) === codeNumStr)) {
          let resultData = {};
          if (Data[downurl_video]) {
            resultData = {
              title: Data[title_video],
              photo: Data[photo_video],
              downurl: Data[downurl_video],
            };
          } else if (Data[pics_photo]) {
            resultData = {
              title: Data[title_photo],
              photo: Data[photo_photo],
              pics: Data[pics_photo],
            };
          }

          wx.navigateTo({
            url: `/pages/video/video?data=${encodeURIComponent(JSON.stringify(resultData))}`
          });
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          });
        }
      },
      fail: (err) => {
        wx.hideLoading();
        // 发送失败邮件
        console.log("备用接口失败原因", err);
        wx.showToast({
          title: '备用接口请求失败，请稍后重试',
          icon: 'none'
        });
      }
    });

  },
});