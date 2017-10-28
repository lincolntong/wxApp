var app = getApp();
var common = require('../../common/common.js');
Page({
  data: {
    isSearch:false
  },
  onHide: function () {
    app.globalData.filterShow = false;
    app.globalData.ThetxtStyle = "transform: translateX(0);overflow-y:auto;";
    this.setData({
      filterShow:false,
      ThetxtStyle : "transform: translateX(0);overflow-y:auto;"
    })
  },
  gosearch:function () {
    this.setData({
      isSearch:true
    })
  },
  touchS: function(e) {
    common.getUserinfo()
    common.touchS(e,this)
  },
  touchM: function (e) {
    common.touchM(e,this);
  },
  touchE: function (e) {
    common.touchE(e,this);
  }

})