var app = getApp()
Page({
  data: {
    accountPlaceholder:'请输入账号',
    passwordPlaceholder:'请输入密码',
    accountError:false,
    passwordError:false,
    accountFocus:false,
    passwordFocus:false,
    errorTip:'账号或密码错误',


  },
  onLoad: function () { 
    this.setData({
      hasLogin: app.globalData.hasLogin
    })
  }, 
  formSubmit:function (e) {
      if(!e.detail.value.account){
          this.setData({
              accountPlaceholder:'账号不能为空',
              accountError:true,
              accountFocus:true
          })
          return
      }
      if(!e.detail.value.password){
          this.setData({
              passwordPlaceholder:'密码不能为空',
              passwordError:true,
              passwordFocus:true,
          })
          return  
      }
      this.setData({
          accountPlaceholder:'请输入账号',
          passwordPlaceholder:'请输入密码',
          accountError:false,
          passwordError:false,
          accountFocus:false,
          passwordFocus:false
      })
      wx.switchTab({
        url:'../msg/msg'
      })
      wx.request({
        url: '',
        data: e.detail.value,
        success:function(res){
          console.log(res)
          // if(res.status){
          //
          // }else{
          //
          // }

        },
        fail:function(error){
          console.log(error);
        }

      })

  }
  
})
