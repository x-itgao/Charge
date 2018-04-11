// pages/index/append/append.js
var util = require('../../../utils/util.js')
var current_date = util.formatTime(new Date())
Page({

  data: {
    expenses: true,
    earning: false,
    items: [1,2,4,5,5,5],
    catId: 0,
    accountId: 0,
    date: current_date,
    end_date: current_date,
  },
  bindBack: function(events){
    wx.navigateBack({
      
    })
  },
  bindExpenses: function(events){
    this.setData({
      expenses: true,
      earning: false
    })
  },
  bindEarning: function(events){
    this.setData({
      expenses: false,
      earning: true
    })
  },
  bindCat: function(events){
    this.setData({
      catId:events.target.dataset.id
    })
  },
  bindAccount: function(events){
    this.setData({
      accountId: events.target.dataset.id
    })
  },
  bindChangeDate: function(events){
    this.setData({
      date: events.detail.value
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