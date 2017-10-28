// pages/page/msg/mail_detail/mail_detail.js
Page({

  data: {
    replyMail:false,
    animationData:{},
  },
  onShow: function () {
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'ease',
      transformOrigin:'0 100% 0'
    })
    this.animation = animation

  },
  goReply:function(){
    this.animation.opacity(1).scale(1, 1).step()
    this.setData({
      replyMail:true,
      animationData:this.animation.export()
    })
  },
  reply:function () {
    this.animation.opacity(0).scale(1, 0).step()
    this.setData({
      replyMail:false,
      animationData:this.animation.export()
    })
  },
  cancelReply:function () {
    this.animation.opacity(0).scale(1, 0).step()
    this.setData({
      replyMail:false,
      animationData:this.animation.export()
    })
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