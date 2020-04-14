// pages/home/home.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: ['推荐', '手机', '智能', '电视', '笔记本', '家电', '生活周边', '机器人', '智能影像'],
    custom: 0,
    abc:0,
    arr: [],
    phone: []
  },
  onClick: function(a) {
    console.log(a);
    this.setData({
      custom: a.target.dataset.id,
      abc: a.target.dataset.id,
    })
  },
  onClick1: function (a) {
    console.log(a);
    this.setData({
      abc: a.target.dataset.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var t = this;
    wx.request({
      url: app.globalData.URL + '/get_home_box2',
      method: 'get',
      data: {
        n: t.data.page
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log(res.data);
        t.setData({
          arr: res.data,
        });

      }
    });
    wx.request({
      url: app.globalData.URL + '/get_phone',
      method: 'get',
      data: {
        n: t.data.page
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log(res.data);
        t.setData({
          phone: res.data,
        });

      }
    });
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: '小米商城',
      path: '/pages/home/home',
      imageUrl: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=109099697,1738114976&fm=58&s=A5D7CB36FF48CE1140F385FE0300D03B&bpow=121&bpoh=75'
    }
  }
})