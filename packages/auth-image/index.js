// 导入组件
import authImage from './src/auth-image.vue'

// 为组件提供 install 安装方法，供按需引入
authImage.install = function (Vue) {
  Vue.component(authImage.name, authImage)
}

// 默认导出组件
export default authImage
