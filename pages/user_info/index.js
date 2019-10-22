var app = getApp();
var Util = require('../../utils/util.js')

const userInfo = {
  uid: '16564sd',
  avatar: '',
  truename:'',
  brithday:'',
  blood:'A型',
  city:''
}
const bloodArray = ["A型", "B型", "AB型", "O型", "其它"]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '1',
      'title': '个人资料',
      'color': true,
      'class': '0'
    },
    userInfo: userInfo,
    bloodArray: bloodArray
  },
  bindBloodChange: function (e) {
    let userInfo = this.data.userInfo
    userInfo.blood = this.data.bloodArray[e.detail.value]
    this.setData({
      userInfo: userInfo,
    })
  },
  bindDateChange: function (e) {
    let userInfo = this.data.userInfo
    userInfo.brithday = e.detail.value
    this.setData({
      userInfo: userInfo,
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    let userInfo = this.data.userInfo
    userInfo.city = e.detail.value
    this.setData({
      userInfo: userInfo,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
  * 上传文件
  * 
 */
  uploadpic: function () {
    var that = this;
    Util.uploadImageOne(app.U({ c: 'public_api', a: 'upload' }), function (res) {
      that.setData({ 'userInfo.avatar': app.globalData.url +res.data.url });
    });
  },

  /**
   * 提交修改
  */
  formSubmit:function(e){
    var that = this, value = e.detail.value, formId = e.detail.value.formId, userInfo = this.data.userInfo;
    if (!value.truename) return app.Tips({title:'用户姓名不能为空'});

    value.avatar = that.data.userInfo.avatar;
    userInfo.truename = value.truename
    this.setData({
      userInfo: userInfo
    })
    console.log(this.data.userInfo)
    //调用更改api
  },

  

})