// pages/user/account/account.js
const titles = ['','我的账户(银行卡)','我的收入条目','我的支出条目']
const append_items = ['','添加账户','添加收入条目','添加支出条目']
Page({
  data: {
    items: [1,2,4,4,4,3],
    title: '',
    append_item: '',
  },
  bindBack: function (e) {
    wx.navigateBack({
    })
  },
  bindAppend: function(e){
    wx.navigateTo({
      url: '../../index/group/alter-name/alter-name',
    })
  },
  onLoad: function (options) {
    var t = options.type;
    this.setData({
      title: titles[t],
      append_item: append_items[t]
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