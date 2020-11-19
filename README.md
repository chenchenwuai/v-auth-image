# vue-auth-image
一个基于vue的显示带权限图片的组件

## 特点
  + 可自定义`header`字段，无限制数量
  + 简单易用，结构简单，只有一个`img`标签
  + 可根据业务快速修改，代码简单
  + 提供以 `npm` 的形式安装提供全局组件 `vauthimage`
## 安装
  ### git clone
  ```bash
    git clone git@github.com:chenchenwuai/vue-auth-image.git 
    cd vue-auth-image
    npm i
    npm run lib // 在dist文件夹生成可通过script标签引入的js文件
    npm run serve // 本地运行
    npm run build // 打包demo
  ```
  ### npm 安装
  ```bash
    npm i vauthimage -S
  ```
## 使用
  ### 在 `main.js` 文件中引入插件并注册
  ```js
    import vauthimage from 'vauthimage'
    Vue.use(vauthimage)
  ```
  ### 在项目中使用 vauthimage
  ```html
    <template>
      <authImage :src="imageUrl" :headers="headers" />
    </template>
    <script>
      export default {
        data () {
          return {
            imageUrl: 'http://xxx.xxx.png',
            headers: [
              {
                key:'Authorization',
                value:'bearer tokenxxxxxx'
              },
              {
                key:'x-token',
                value:'asdasasdad'
              }
            ]
          }
        }
      }
    </script>
  ```
## 事件
  `load`加载成功触发
  `error`加载失败触发
  ```html
    <authImage v-on:load="headleloaded" v-on:error="headleLoadError" >
  ```