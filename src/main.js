import Vue from 'vue'
import App from './App'
import fly from './utils/http'

Vue.config.productionTip = false
App.mpType = 'app'


Vue.protoype.http = fly // 将 flyio 实例挂在vue原型上
const app = new Vue(App)
app.$mount()
