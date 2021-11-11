import Vue from 'vue'
import App from './App.vue'

import "./assets/style.css"

import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
Vue.directive('hljs', el => {
  let blocks = el.querySelectorAll('pre')
  Array.prototype.forEach.call(blocks, hljs.highlightBlock)
})

// 引入指令
import VAuthImage from './../packages/index'
// import VAuthImage from '../lib/vauthimage.common'

function getHeaders(){
  return {
    'x-token': "x-token this is a x-token",
    Authorization: "bearer this is a authorization2"
  }
}

Vue.use(VAuthImage,{
  // 默认图片，还未加载图片显示。[可选]
  defaultSRC:'default.logo',
  /**
   * 默认请求headers，[可选]，类似于 
   * { Authorization: "bearer xasdasdfasdfa", 'x-token': "x-token this is a x-token" } 的对象
   */
  defaultHeaders:{
    Authorization: "bearer this is a authorization"
  },
  // 动态获取到的headers，会与 defaultHeaders 覆盖合并。[可选]
  getHeaders: getHeaders 
})

new Vue({
  render: h => h(App)
}).$mount('#app')
