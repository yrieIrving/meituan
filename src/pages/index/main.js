import Vue from 'vue'
import App from './index'
const app = new Vue(App)
app.$mount()

// 添加 config json
export default {
   config:{
    //在这个地方导入应用组件
    usingComponents: {
        "i-button": "../static/iview/button/index"
    }
   }
}