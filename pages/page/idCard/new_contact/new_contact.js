var app = getApp();
var common = require('../../../common/common.js');
Page({
  data: {
    isSearch:false,
    goEdit:false,
    stageIndex:2,
    dataImportant:false,
    region: ['广东省', '广州市', '海珠区'],
    array:['陌生人','普通客户','意向客户','成单客户'],
    newContactData:''
  },
  onHide: function () {

  },
  bindPickerChange:function (e) {
    this.setData({
      stageIndex: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  editContact:function () {
    common.closeSideMenu(this)
    this.setData({
      goEdit:true
    })

  },
  changeImp:function () {
    this.setData({
      dataImportant:!this.data.dataImportant
    })
  },
  saveEdit:function (e) {
    this.setData({
      newContactData:e.detail.value
    })

    this.data.newContactData.isIMp = this.data.dataImportant
    console.log(this.data.newContactData)
  }

})