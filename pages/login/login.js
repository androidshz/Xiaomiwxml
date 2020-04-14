// pages/login/login.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: '',
    pwd: ''
  },
  onAccount: function (e) {
    // console.log(e.detail.value);
    this.setData({
      account: e.detail.value
    });
  },
  onPwd: function (e) {
    // console.log(e.detail.value);
    this.setData({
      pwd: e.detail.value
    });
  },
  onLogin: function () {
    wx.request({
      url: app.globalData.URL + '/login',
      method: 'post',
      data: {
        account: this.data.account,
        pwd: this.data.pwd
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        wx.navigateTo({
          url: '/pages/home/home',
        })
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})