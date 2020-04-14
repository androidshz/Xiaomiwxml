// pages/fenlei/fenlei.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: ['新品', '众筹', '手机','电视', '电脑', '小爱智能', '路由器', '生活电器', '厨房电器', '智能穿戴', '智能家居', '车载出行', '个护健康', '数码配件', '日用百货', '服务', '米粉卡', '零售店'],
    custom: 0,
    // isSelect:false
    height1: 0,
    arr:[],
  },
//页面滑动
  btnClick1: function (options) {
    console.log(options);
    this.setData({
      custom: options.target.dataset.id
    });
    var t = this;
    var query = wx.createSelectorQuery();
    var selectid = '#box-' + this.data.custom;
    query.select(selectid).boundingClientRect();
    query.exec(function (res) {
      console.log(res);
      t.setData({
        height1: res[0].top
      })
    });
    wx.pageScrollTo({
      scrollTop: t.data.height1,
      duration: 100
    })
  },
//跳转页面
  goodsClick:function(e){
    // var ID = e.data.id;
    console.log(e);
    var goodsId = e.currentTarget.dataset.goodsid;
    console.log('goodsId:' + goodsId);
    wx.navigateTo({ url: '/pages/page/page?goodsId=' + goodsId +'&imgURL='+this.data.arr[goodsId].img})
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    var t = this;
    wx.request({
      url: app.globalData.URL+ '/get_fenlei',
      method: 'get',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res);
        t.setData({
          arr: res.data
        })
      }
    });

    // console.log(this.data);
    
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        // console.log(res.windowHeight);
        // this.data.height = res.windowHeight + 'px';
        var windowHeight = (res.windowHeight * (750 / res.windowWidth)) + 'rpx';
        // console.log(t);
        t.setData({
          height: windowHeight
        });
      },
    })
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