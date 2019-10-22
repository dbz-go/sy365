//app.js
const URL =' ';

const util = require('utils/util.js');
App({
  onLaunch: function (option) {
    if (option.query.hasOwnProperty('scene') && option.scene == 1047) this.globalData.code = option.query.scene;
    if (option.query.hasOwnProperty('scene') && option.scene == 1001) this.globalData.spid = option.query.scene;

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    
    // 获取导航高度；
    wx.getSystemInfo({
      success: res => {
        //导航高度
        this.globalData.navHeight = res.statusBarHeight * (750 / res.windowWidth) + 97;
      }, fail(err) {
        console.log(err);
      }
    })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log("res.userInfo:", res.userInfo)

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    navHeight: 0,
    routineStyle: '#ffffff',
    openPages: '',
    spid: 0,
    code:0,
    urlImages: '',
    url: URL,
    token: '',
    isLog:false,
    MyMenus:[],
    header: {
      'content-type': 'application/json',
      'token': '' 
    },
  },
  /*
  * POST 访问快捷方法
  * @param string | object url 访问地址
  * @param callable successCallback 成功执行函数
  * @param callable errorCallback 失败执行函数
  * @param object header 访问header头
  */
  basePost: function (url, data, successCallback, errorCallback, header) {
    if (header == undefined) header = this.globalData.header;
    if (!header['token']) header['token'] = this.globalData.token
    util.basePost(url, data, successCallback, errorCallback,header);
  },  
  /*
  * GET 访问快捷方法
  * @param string | object url 访问地址
  * @param callable successCallback 成功执行函数
  * @param callable errorCallback 失败执行函数
  * @param isMsg 错误信息提醒 默认提醒
  * @param object header 访问header头
  */
  baseGet: function (url, successCallback, errorCallback, isMsg, header) {
    if (header == undefined) header = this.globalData.header;
    if (!header['token']) header['token'] = this.globalData.token
    util.baseGet(url, successCallback, errorCallback, isMsg,header);
  },  
  /*
  * 信息提示 + 跳转
  * @param object opt {title:'提示语',icon:''} | url
  * @param object to_url 跳转url 有5种跳转方式 {tab:1-5,url:跳转地址}
  */
  Tips: function (opt, to_url) {
    return util.Tips(opt, to_url);
  },
  /*
  * 访问Url拼接
  * @param object opt {c:'控制器',a:'方法',q:{get参数},p:{parma参数}}
  * @param url 接口访问地址
  * @return string
  */
  U: function (opt, url) {
    return util.U(opt, url);
  },
})