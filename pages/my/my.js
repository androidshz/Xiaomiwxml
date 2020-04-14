//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
     userimage:'/image/登录.png',
    goods: [
      {
        "img": "/image/team.png",
        "text": "小米精品推荐",
        "url": "/pages/home/home"
      }],
    result: [
      {
        "img": "/image/order.png",
        "text": "我的订单",
        "url": "/pages/list/list"
      },
      {
        "img": "/image/vip.png",
        "text": "会员中心",
        "url": "/pages/vip/vip"
      },
      {
        "img": "/image/coupon.png",
        "text": "我的优惠码",
        "url": "/pages/discount/discount"
      },
      {
        "img": "/image/fcode.png",
        "text": "我的F码",
        "url": "/pages/fma/fma"
      }, {
        "img": "/image/kefu.png",
        "text": "客服",
        "url": "/pages/people/people"
      }
      ],
    setUp: [
      {
        "img": "/image/setting.png",
        "text": "设置",
        "url": "/pages/design/design"
      }],
custom:0
  },
onClick:function(a){
console.log(a);
this.setData({
  custom:a.target.dataset.id
})
},
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
