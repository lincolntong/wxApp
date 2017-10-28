var app = getApp();
var common = require('../../common/common.js');
Page({
  data:{
    activeIndex:'1'
  },
  onHide: function () {
    app.globalData.filterShow = false;
    app.globalData.isSearch = false;
    app.globalData.getResult = false;
    app.globalData.ThetxtStyle = "transform: translateX(0);overflow-y:auto;";
    this.setData({
      filterShow:false,
      isSearch:false,
      getResult:false,
      ThetxtStyle : "transform: translateX(0);overflow-y:auto;"
    })
  },
  goSearch:function () {
    common.goSearch(this)
  },
  goTargetSearch:function () {
    common.goTargetSearch()
  },
  cancleSearch:function () {
    common.cancleSearch(this)
  },
  searchResult:function (e) {
    common.searchResult(this,e)
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
  },
  slotList:function (e) {
    this.setData({
      activeIndex:e.currentTarget.dataset.index
    })
    wx.request({
      url:'',
      method:'POST',
      data:{
        activeIndex:this.data.activeIndex,
      },
      success:function(res){

      }
    })
}
})