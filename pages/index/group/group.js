// pages/index/group/group.js
Page({

  data: {
    items: [1,2,4,5,4,1],
    avatarUrl: '../../../images/tabBar/user.png',
    nickName: 'xxg',
    more: '>',
    num: 11,
  },
  bindBack: function(){
    wx.navigateBack({
      
    })
  },
  alter_name: function(e){
    wx.navigateTo({
      url: './alter-name/alter-name',
    })
  },
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