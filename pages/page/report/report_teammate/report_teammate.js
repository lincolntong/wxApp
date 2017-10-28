var app = getApp();
var common = require('../../../common/common.js');
Page({
  data: {
    reportShowTeam:true,
    teammateReport:
      [
        {msg_desc: '邮件发送/送达/打开/点击',msg_dt:'204/193/25/9'},
        { msg_desc: '联系人联络数',msg_dt: '47'},
        { msg_desc: '联系人行为数', msg_dt: '134'},
        {msg_desc: '线索数',msg_dt:'4'},
        {msg_desc: '意向客户数',msg_dt:'30'},
        {msg_desc: '商机数',msg_dt:'10'},
        {msg_desc: '成单客户数',msg_dt:'10'}
      ]
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
  },
  changeReportShow:function () {
    this.setData({
      reportShowTeam:!this.data.reportShowTeam
    })
  }
})

