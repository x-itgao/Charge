// pages/user/book/book.js
Page({

  data: {
    more: '    >',
    items: [1,2,3,23,3],
  },
  bindAppend: function(e){
    wx.navigateTo({
      url: '../../index/group/alter-name/alter-name',
    })
  },
  bindGroup: function(e){
    wx.navigateTo({
      url: '../../index/group/group',
    })
  },
  onLoad: function (options) {
  
  },
  bindBack:function(e){
    wx.navigateBack({
      
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