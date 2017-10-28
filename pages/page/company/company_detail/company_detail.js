var app = getApp();
var common = require('../../../common/common.js');
Page({
  data: {
    isSearch:false,
    goEdit:false,
    dataImportant:false,
    region: ['广东省', '广州市', '海珠区'],
    stageIndex:2,
    contact_detail:
      [
        {msg_desc: '最近联系人',msg_dt:'厦门笨鸟电子商务有限公司'},
        { msg_desc: '最近行为',msg_dt: '5天前，访问了www.socialbird.cn'},
        {msg_desc: '最近联系',msg_dt:'5'},
        {msg_desc: '相关商机',msg_dt:'30天前，询盘'},
        { msg_desc: '国家地区', msg_dt: '中国，福建，厦门',msg_time:'2017.10.15'},
        {msg_desc: '地址',msg_dt:'观音山12号3456'},
        {msg_desc: '行业',msg_dt:''},
        {msg_desc: '营业额',msg_dt:''},
        {msg_desc: '雇员数',msg_dt:''},
        {msg_desc: '网址',msg_dt:''},
        {msg_desc: '雇员数',msg_dt:''},
        {msg_desc: '来源',msg_dt:'表单',msg_time:'2017.10.15'},
        {msg_desc: '负责人',msg_dt:''},
        {msg_desc: '标签',msg_dt:''},
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
  eidtCompany:function () {
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
  changeImp:function () {
    this.setData({
      dataImportant: !this.data.dataImportant
    })
  }
})