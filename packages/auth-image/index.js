// 导入组件
import AuthImage from './src/auth-image'

// 为组件提供 install 安装方法，供按需引入
AuthImage.install = function (Vue) {
  Vue.component(AuthImage.name, AuthImage)
}
// 默认导出组件
export default AuthImage
