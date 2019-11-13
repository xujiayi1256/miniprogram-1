// pages/stories/stories.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stories: [],
    title:'Stories'
  },

  makeBadBoy() {
    this.setData({
      title:'Love stories'
    })
    // ,wx.setStorageSync('story-title', 'Love stories')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  getResult(res) {
    // console.log(res)
    this.setData({
      stories: res.data
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
    const request = {
      url: 'https://fml.shanghaiwogeng.com/api/v1/stories',
      method: 'GET',
      success: this.getResult
    }
    wx.request(request)
      // this.setData({
      //   title: wx.getStorageSync('story-title') || "Stories"
      // })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // console.log('onHide: hided');
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