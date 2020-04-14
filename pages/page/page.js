// pages/page/page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [{
      imgurl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png',
      word: 'CPU',
      word1: ' MTK Helio G90T'},
      {
        imgurl: 'https://i8.mifile.cn/b2c-mimall-media/7692726e7a1dd34a3b1b4ede8aca020d.png',
        word: '四摄像头',
        word1: ' 6400万+800万+200万+200万像素'
      },
      {
        imgurl: 'https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png"',
        word: '超大屏',
        word1: ' 6.53英寸'
      },
      {
        imgurl: 'https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png"',
        word: '屏幕分辨率',
        word1: '2340x1080'
      },
      {
        imgurl: 'https://i8.mifile.cn/b2c-mimall-media/86a3bd46cf4f7f19daa2c3250cf30604.png"',
        word: '超大屏',
        word1: ' 6.53英寸'
      },
      {
        imgurl: 'https://i8.mifile.cn/b2c-mimall-media/a5ab24dcb527e49f970f13b11e000ab1.png"',
        word: '屏幕分辨率',
        word1: '2340x1080'
      }
      ],
    related: [{
      imgurl: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab941a93fbbf042a1a531295f443ef98.jpg',
      word: 'RedmiBook 14 增强版',
      word1: '4499'
    }, {
        imgurl: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/20228f33450904674475086b5dc35f3c.jpg',
        word: '米家智能门锁 霸王锁体 磨砂金',
        word1: '1599'
      }, {
        imgurl: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5db05b5a65f224cf41ca68a3afda29ad.jpg',
        word: '高透贴膜',
        word1: '19'
      }, {
        imgurl: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8a60f4d10dbcb83f0b0e357309baa36b.jpg',
        word: '多功能耳机',
        word1: '199'
      }],

  id:0,
  bigimgurl:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var Id = options.goodsId-1;
    // console.log(Id);
    // var t=this;
    console.log(options);
    this.setData({
      bigimgurl:options.imgURL
    });
    // wx.navigateTo({
    //   url: '/pages/page/page?id='+Id,
    //   success(res) {
    //     console.log(res)
    //     t.setData({
    //       imgURL: res.data[Id].img
    //     });
    //   }
    // })
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