import wxValidate from 'src/wxValidate/wxValidate.js';
App({
  globalData: {
    filterShow: false,
    windWidth:'',
    windHeight:'',
    ThetxtStyle:'',
    rightLeave: 75,//右侧剩余部分宽度
    isSearch:false,
    getResult:true,
    targetSearch:''
  },
  wxValidate: (rules, messages) => new wxValidate(rules, messages),
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {

  }, 
  onHide: function () {
    console.log('App Hide')
  },  
 
  
  
})    
 