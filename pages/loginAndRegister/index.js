// pages/loginAndRegister/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '0',
      'title': '书雅365益智',
      'color': true,
      'class': '0'
    },
    label: 0,
    sendVerifyCode: false,
    codeTitle: '发送验证码',
    countDownTime:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  phoneInput: function (e) {
    this.cansendVerifyCode = false
    this.phoneNum = ''
    let value = e.detail.value 
    if (!value) return app.Tips({ title: '手机号长度有误!' });
    if (!(/^1[3456789]\d{9}$/.test(value))) return app.Tips({ title: '手机号格式有误!' });
    this.cansendVerifyCode = true
    this.phoneNum = value
  },
  resend: function () {
    if (this.data.sendVerifyCode) return
    if (this.phoneNum) {
      //调用验证码api
      console.log("发送验证码")
      this.setData({
        countDownTime: 60,
        codeTitle: '重新发送',
        sendVerifyCode: true,
      })
      this.countDown()
    }else{
      return app.Tips({ title: '输入手机号!' })
    }
  },
  // 验证码倒计时
  countDown: function () {
    if (this.data.countDownTime > 0) {
      this.setData({
        countDownTime: this.data.countDownTime - 1,
      })
      setTimeout(this.countDown, 1000)
    }else{
      this.setData({
        countDownTime: 0,
        codeTitle: '发送验证码',
        sendVerifyCode: false,
      })
    }
  },
  // 激活卡注册
  cardRegisterAction: function(e) {
    let value = e.detail.value
    if (!value.card) return app.Tips({ title: '卡号长度有误!' });
    if (!value.cardPwd) return app.Tips({ title: '卡密长度有误!' });
    if (!value.phoneNum) return app.Tips({ title: '手机号长度有误!' });
    if (!(/^1[3456789]\d{9}$/.test(value.phoneNum))) return app.Tips({ title: '手机号格式有误!' });
    console.log(value)
  },

  // 注册
  registerAction: function (e) {
    let value = e.detail.value
    if (!value.phoneNum) return app.Tips({ title: '手机号长度有误!' });
    if (!value.verifyCode) return app.Tips({ title: '验证码长度有误!' });
    if (!value.password) return app.Tips({ title: '密码长度有误!' });
    if (!(/^1[3456789]\d{9}$/.test(value.phoneNum))) return app.Tips({ title: '手机号格式有误!' });
    if (!(/^\d{6}$/.test(value.verifyCode))) return app.Tips({ title: '验证码格式有误!' });
    console.log(value)
  },
  // 登录
  loginAction: function (e) {
    let value = e.detail.value
    if (!value.phoneNum) return app.Tips({ title: '手机号长度有误!' });
    if (!value.password) return app.Tips({ title: '密码长度有误!' });
    if (!(/^1[3456789]\d{9}$/.test(value.phoneNum))) return app.Tips({ title: '手机号格式有误!' });
    console.log(value)
  },
  // 忘记密码
  forgetAction: function (e) {
    let value = e.detail.value
    if (!value.phoneNum) return app.Tips({ title: '手机号长度有误!' });
    if (!value.verifyCode) return app.Tips({ title: '验证码长度有误!' });
    if (!value.password) return app.Tips({ title: '密码长度有误!' });
    if (!(/^1[3456789]\d{9}$/.test(value.phoneNum))) return app.Tips({ title: '手机号格式有误!' });
    if (!(/^\d{6}$/.test(value.verifyCode))) return app.Tips({ title: '验证码格式有误!' });
    console.log(value)
  },
  // 改变页面状态 0:注册 1：登录 2：忘记密码
  changeLabel:function (e) {
    this.setData({
      label: e.currentTarget.dataset.label
    })
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