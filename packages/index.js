import VAuthImage from './v-auth-image'

const install = function (Vue,opts = {}) {
  Vue.use(VAuthImage, opts)
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default VAuthImage