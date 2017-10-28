Page({
  data: {
  },
  upIDCard:function () {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'],
      sourceType: ['album'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        wx.showLoading({
          title:'等待名片识别',
          mask:false
        })
        setTimeout(function(){
          wx.hideLoading()
          wx.navigateTo({
            url: 'id_result/id_result'
          })
        },2000)
      }
    })

  },
  photoIDCard:function () {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'],
      sourceType: ['camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        wx.showLoading({
          title:'等待名片识别',
          mask:false
        })
        setTimeout(function(){
          wx.hideLoading()
          wx.navigateTo({
            url: 'id_result/id_result'
          })
        },2000)
      }
    })

  },


})