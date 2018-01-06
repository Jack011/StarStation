// pages/art_list/art_list.js
Page({
  /**
   * 页面的初始数据
   */ 
  data: {
      artList:[
        "adb","bca","cde","ddd"
      ]
  },
  itemClick:function(e){
    console.log(e.currentTarget.id);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  


    wx.request({
      url: '接口地址',  
      data: {},
      method: 'GET',  
      // header: {}, // 设置请求的 header  
      success: function (res) {
        console.log(res.data.result)
        that.setData({
          artList: res.data.result
        })
      },
      fail: function () {
        // fail  
        console.log("failed")
      },
      complete: function () {
        // complete  
        console.log("complete")
      }
    });
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