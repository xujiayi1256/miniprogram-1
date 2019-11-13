// pages/post/post.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  formSubmit(event) {
    console.log(event)
    let story = event.detail.value
    // app.globalData.stories.unshift(story)

    wx.request({
      url: 'https://fml.shanghaiwogeng.com/api/v1/stories',
      method:'POST',
      data:story,
      success: this.submitSuccess
    })
  },

  submitSuccess(res) {
    console.log(res)
    if(res.statusCode === 201) {
      wx.navigateBack()
      wx.showToast({
        title: 'Sucess',
        icon: 'sucess'
      })
    }
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