var app = getApp()

// 侧边栏
function getUserinfo() {
  wx.getSystemInfo({
    success:function (res) {
      app.globalData.windWidth=res.windowWidth;
      app.globalData.windHeight=res.windowHeight;
    }
  })

}
function touchS(e,that) {
  //判断是否只有一个触摸点
  if (e.touches.length == 1) {
    that.setData({
      //记录触摸起始位置的X坐标
      startX: e.touches[0].clientX
    });

  }
}
function touchM(e,that) {
  if (e.touches.length == 1) {
    //记录触摸点位置的X坐标
    var moveX = e.touches[0].clientX;
    //计算手指起始点的X坐标与当前触摸点的X坐标的差值
    var disX = that.data.startX - moveX;
    //rightLeave 为右侧按钮区域的宽度
    var toLeftWidth = app.globalData.windWidth - app.globalData.rightLeave;
    var txtStyle = "";
      if (disX < 0) {//移动距离大于0，文本层left值等于手指移动距离
      txtStyle = "transform: translateX(" + (-disX) + "px)";
        if (-disX >= toLeftWidth) {
          //控制手指移动距离最大值
          txtStyle = "transform: translateX(" + toLeftWidth + "px)";
        }
    }else if(disX >= 0 && app.globalData.filterShow){
        if((toLeftWidth - disX) > 0)
        txtStyle = "transform: translateX(" + (toLeftWidth - disX) + "px)"
        else{
          txtStyle = "transform: translateX(0)"
        }
    }
    //获取手指触摸的是哪一个item
    var index = e.currentTarget.dataset.index;
    var list = that.data.addressList;
    //将拼接好的样式设置到当前item中
    that.setData({
      ThetxtStyle:txtStyle
    });
    //更新列表的状态
    that.setData({
      addressList: list
    });
  }
}

function touchE(e,that) {
  if (e.changedTouches.length == 1) {
    //手指移动结束后触摸点位置的X坐标
    var endX = e.changedTouches[0].clientX;
    //触摸开始与结束，手指移动的距离
    var disX = that.data.startX - endX;
    var rightLeave = app.globalData.rightLeave;
    var toLeftWidth = app.globalData.windWidth - rightLeave;
    // var txtStyle = -disX > rightLeave ? "transform: translateX(" + toLeftWidth + "px)" : "transform: translateX(0)";
    var txtStyle;
    if(-disX > rightLeave){
      txtStyle = "transform: translateX(" + toLeftWidth + "px);overflow-y:hidden;"
    }else{
      txtStyle = "transform: translateX(0);";
    }
    if(app.globalData.filterShow){
      txtStyle = "transform: translateX(0);overflow-y:auto;";
      app.globalData.filterShow=false;
      that.setData({
        filterShow:false
      })
    }
    //获取手指触摸的是哪一项
    var index = e.currentTarget.dataset.index;
    var list = that.data.addressList;
    that.setData({
      ThetxtStyle:txtStyle
    });
    if(-disX > rightLeave){
      app.globalData.filterShow=true
      that.setData({
        addressList: list,
        filterShow:true
      })
    }

  }
}

// 搜索
function goSearch(that) {
  app.globalData.isSearch = true
  that.setData({
    isSearch:true
  })
}
function goTargetSearch() {
  wx.navigateTo({
    url: '../search/search'
  })
}
function cancleSearch(that) {
  app.globalData.isSearch = false
  app.globalData.getResult = false
  that.setData({
    getResult:false,
    isSearch:false
  })
}
function searchResult(that,e) {
  if(e.detail.cursor){
    app.globalData.getResult = true
    app.globalData.targetSearch = e.detail.value
    that.setData({
      getResult:true,
      targetSearch:e.detail.value
    })
  }else{
    app.globalData.getResult = false
    that.setData({
      getResult:false
    })
  }
}

//关闭左侧栏
function closeSideMenu(that) {
  app.globalData.filterShow = false;
  app.globalData.ThetxtStyle = "transform: translateX(0);overflow-y:auto;";
  that.setData({
    filterShow:false,
    ThetxtStyle: "transform: translateX(0);overflow-y:auto;"
  })
}
module.exports = {
  touchS: touchS,
  touchM: touchM,
  touchE: touchE,
  getUserinfo:getUserinfo,
  goSearch:goSearch,
  cancleSearch:cancleSearch,
  goTargetSearch:goTargetSearch,
  searchResult:searchResult,
  closeSideMenu:closeSideMenu
}