var app = getApp();
var common = require('../../../common/common.js');
Page({
  data: {
    isSearch:false,
    goEdit:false,
    stageIndex:2,
    dataImportant:false,
    region: ['广东省', '广州市', '海珠区'],
    contact_detail:
      [
        {msg_desc: '阶段',msg_dt:'意向客户'},
        { msg_desc: '职位',msg_dt: '经理'},
        { msg_desc: '邮箱', msg_dt: 'social@social.com'},
        {msg_desc: '沟通次数',msg_dt:'4'},
        {msg_desc: '最近联系',msg_dt:'5天前，邮件'},
        {msg_desc: '最近行为',msg_dt:'6天前，访问了【web触点名】'},
        {msg_desc: '相关商机',msg_dt:'30天前，询盘'},
        {msg_desc: '国家地区',msg_dt:'中国，福建，厦门'},
        {msg_desc: '类型',msg_dt:'重要客户'},
        {msg_desc: '来源',msg_dt:'表单',msg_time:'2017.10.15'},
        {msg_desc: '负责人',msg_dt:''}
      ],
    array:['陌生人','普通客户','意向客户','成单客户'],
    idCardImageSrc:'../../../../images/goods02.png',
    showAccess:false
  },
  onHide: function () {
    common.closeSideMenu(this)
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
  cancelEdit:function (e) {
    this.setData({
      goEdit:false
    })
  },
  saveEdit:function (e) {
    this.setData({
      goEdit:false
    })
  },
  showAccessModal:function () {
    common.closeSideMenu(this)
    this.setData({
      showAccess:true
    })
  },
  hideAccessModal:function () {
    this.setData({
      showAccess:false
    })
  },
  changeImp:function () {
    this.setData({
      dataImportant:!this.data.dataImportant
    })
  }

})