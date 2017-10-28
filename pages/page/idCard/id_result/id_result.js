var app = getApp()
Page({
  data: {
  
  },
  onLoad: function () {
    this.WxValidate = app.wxValidate(
      {
        name: {
          required: true,
          maxlength: 15,
        },
        tel1: {
          required: true,
          tel: true,
        }
      },
      {
        name: {
          required: '请填写您的姓名',
          maxlength:'名称最多15个字符'
        },
        tel1: {
          required: '请填写您的手机号',
          tel: '11位手机号',
        }
      }
    )
  },
  //表单提交
  formSubmit: function (e) {
    //提交错误描述
    if (!this.WxValidate.checkForm(e)) {
      const error = this.WxValidate.errorList[0]
      // `${error.param} : ${error.msg} `
      wx.showToast({
        title: `${error.msg} `,
        duration: 2000
      })
      return false
    }
    this.setData({ submitHidden: false })
    var that = this
    //提交
    wx.request({
      url: '',
      data: {
        name: e.detail.value.name,
        company: e.detail.value.company,
        position: e.detail.value.position,
        company: e.detail.value.company,
        mail1: e.detail.value.mail1,
        tel1: e.detail.value.tel1,
        area: e.detail.value.area,
        addr: e.detail.value.addr,
        other: e.detail.value.other
      },
      method: 'POST',
      success: function (requestRes) {
        wx.navigateBack({
          delta: 1
        })
      },
      fail: function (err) {
        console.log(err)
      },
      complete: function () {
      }
    })
  }
})