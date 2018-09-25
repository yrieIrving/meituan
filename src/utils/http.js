import wx from 'wx'
import Fly from 'flyio'

const request = new Fly()  // flyio实例化

// 设置请求基地址
// request.config.baseURL = "http://127.0.0.1:8360/"
// 添加请求拦截器
request.interceptors.request.use((request) => {
  // 给所有请求添加自定义header，带上token信息让服务器验证用户登陆
  request.headers = {
    'X-Tag' : "wx.getStorageSync('token')",
    'Accept' : 'application/json',
    'content-type':'application/json'
};
//request.headers['X-Xbyjshop-Token'] = wx.getStorageSync('token');
  // console.log('flyio发请求,request为', request);
  wx.showNavigationBarLoading() //在当前页面显示导航条加载动画
  return request
})
// 添加响应拦截器
request.interceptors.response.use(
  (response, promise) => {
    wx.hideNavigationBarLoading() //在当前页面隐藏导航条加载动画
    return promise.resolve(response.data)
  },
  (err, promise) => {
    wx.hideNavigationBarLoading()
    wx.showToast({
      title: err.message,
      icon: 'none'
    })
    return promise.resolve()
  }
)

export default request;