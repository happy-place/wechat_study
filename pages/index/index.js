// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   * 小程序中所有数据都应该从 data 中获取，.wxml 页面通过{{key}} 获取
   */
  data: {
    "msg":"修改前小程序"
  },

  parentTapHandler: function(){
    console.log('parent');
  },

  childTapHandler: function(){
    console.log('child');
  },

  /**
   * 生命周期函数--监听页面加载
   * 小程序实现了 Model -> view 单向数据流
   * 没有实现双向数据绑定
   * 使用this.setData({k:v})修改Data中设置的值，且在钩子函数中的异步代码块里面也是同步执行是
   */
  onLoad: function (options) {
    console.log(this); // 当前小程序对象
    console.log(this.data.msg); // 点方式获取属性
    setTimeout(()=>{
      this.setData({
        "msg":"修改后小程序"
      });
      console.log(`over~${this.data.msg}`);
    },1000);
    console.log(this.data.msg); 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})