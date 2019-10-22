var app = getApp();
var Util= require('../../utils/util.js')
// 顶部banner
const imgUrls = [
  {id:1, pic: "../../images/local/banner1.jpg"},
  {id:2, pic: "../../images/local/banner2.jpg"},
  {id:3, pic: "../../images/local/banner3.jpg"},
]
// 咨询列表
const itemNew = [
  {id:2, url: "/pages/news_list/index", info:"书雅365上线了"},
  {id:3, url: "/pages/news_list/index", info:"书雅365线下活动"},
  {id:4, url: "/pages/news_list/index", info:"书雅365最新公告"}
]
// 快速选择
const fastList = [
  {id:1, pic: "../../images/local/26438867-1_l_5.jpg", cate_name: "教育", price: 123},
  {id:2, pic: "../../images/local/27856486-1_l_2.jpg", cate_name: "儿童", price: 49},
  {id:3, pic: "../../images/local/27864832-1_l_10.jpg", cate_name: "医学", price: 368},
  {id:4, pic: "../../images/local/27895075-1_l_2.jpg", cate_name: "技术", price: 368},
  {id:5, pic: "../../images/local/27903095-1_l_8.jpg", cate_name: "文学", price: 368},
]
// 热门榜单
const likeInfo = [
  {id:1, image: "../../images/local/20747699-1_l_3.jpg", store_name: "配色设计课程", price: 123},
  {id:2, image: "../../images/local/21027025-1_l_5.jpg", store_name: "摄影教材全两册", price: 49},
  {id:3, image: "../../images/local/23445578-1_l_11.jpg", store_name: "马小跳玩数学2年级", price: 368},
]
// 首发新品
const firstList = [
  {id:11, image: "../../images/local/26438867-1_l_5.jpg", store_name: "成为MICHELLE OBAMA", price: 123},
  {id:12, image: "../../images/local/27856486-1_l_2.jpg", store_name: "21世纪的定位", price: 49},
  {id:13, image: "../../images/local/27864832-1_l_10.jpg", store_name: "发现之旅博客之旅探险之旅套装", price: 368},
  {id:14, image: "../../images/local/27895075-1_l_2.jpg", store_name: "管理是个技术活", price: 368},
  {id:15, image: "../../images/local/27903095-1_l_8.jpg", store_name: "林格伦儿童文学奖", price: 368},
]
// 促销单品
const benefit = [
  {id:21, image: "../../images/local/27904241-1_l_3.jpg", store_name: "一生自在", price:123, ot_price: 56, stock:23, unit_name: "套"},
  {id:22, image: "../../images/local/27909945-1_l_5.jpg", store_name: "余生，请多指教", price:49, ot_price: 56, stock:23, unit_name: "件"},
  {id:23, image: "../../images/local/27913123-1_l_3.jpg", store_name: "簪中录", price:368, ot_price: 56, stock:23, unit_name: "件"},
  {id:24, image: "../../images/local/27915858-1_l_9.jpg", store_name: "你总说没事", price:368, ot_price: 56, stock:23, unit_name: "套"},
  {id:25, image: "../../images/local/27915938-1_l_12.jpg", store_name: "傲骨", price:368, ot_price: 56, stock:23, unit_name: "套"},
]

Page({
  /**
   * 页面的初始数据
   */
  data: {
    logoUrl: '../../images/logo.png',
    imgUrls: imgUrls,
    itemNew:itemNew,
    likeInfo: likeInfo,
    fastInfo: '教育、儿童、医学、技术一网打尽',
    fastList: fastList,
    firstInfo: '首发新品，书雅365带你一起尝鲜',
    firstList: firstList,
    salesInfo: '限时促销，优惠多多',
    benefit: benefit,
    indicatorDots: false,
    circular: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    parameter:{
      'navbar':'0',
      'return':'0'
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  catchTouchMove: function (res) {
    return false
  },
  onColse:function(){
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