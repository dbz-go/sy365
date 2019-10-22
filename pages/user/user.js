const app = getApp();
const userInfo = {
  avatar: '',
  nickname: '大包子',
  vip:false,
  uid: 1254,
  now_money:365,
  brokerage: 45,
  integral:45
}
const MyMenus = [
  {url:'', pic: '../../images/memberCenter.png', name:'会员中心'},
  {url:'', pic: '../../images/extension.png', name:'分销推广'},
  {url:'/pages/user_money/index', pic: '../../images/balance.png', name:'我的余额'},
  {url:'/pages/user_integral/index', pic: '../../images/bargain.png', name:'我的积分'},
  {url:'/pages/user_address_list/index', pic: '../../images/address.png', name:'地址信息'},
  {url:'', pic: '../../images/collection.png', name:'我的收藏'},
  // {url:'', pic: '../../images/coupon.png', name:'优惠券'},
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter: {
      'navbar': '1',
      'return': '0',
      'title': '个人中心',
      'color': true,
      'class': '0'
    },
    userInfo:userInfo,
    MyMenus: MyMenus
  },
  /**
   * 小程序设置
  */
  Setting:function(){
    wx.openSetting({
      success:function(res){
        console.log(res.authSetting)
      }
    });
  },
  /**
   * 跳转到用户资料
  */
  goUserInfo:function(){
    wx.navigateTo({
      url: '/pages/user_info/index',
    })
  },
  /**
   * 页面跳转
  */
  goPages:function(e){
    console.log();
    if (e.currentTarget.dataset.url == '/pages/user_spread_user/index' && this.data.userInfo.statu==1) {
      if (!this.data.userInfo.is_promoter) return app.Tips({ title: '您还没有推广权限！！' });
    }
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  onShow:function(){
  },

  /**
  * 生命周期函数--监听页面卸载
  */
  onUnload: function () {

  },
})