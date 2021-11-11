# v-auth-image
一个显示有认证机制的图片的vue2指令

## 特点
  + 可自定义`header`字段，无限制数量
  + 简单易用，结构简单，只有一个`v-auth-image`指令
## 安装
```bash
  npm i v-auth-image
```
## 使用
  ### 注册指令
  ```js
    import vAuthImage from 'v-auth-image'

    Vue.use(vAuthImage,{
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
    function getHeaders(){
      return {
        'x-token': "x-token this is a x-token",
        Authorization: "bearer this is a authorization2"
      }
    }
  ```
  ### 使用指令 v-auth-image
  ```html
    <template>
      <img 
        v-auth-image="img_url"
        v-auth-image:success="imageLoadSuccess"
        v-auth-image:error="imageLoadError"
      >
    </template>
    <script>
      export default {
        data () {
          return {
            imageUrl: 'http://xxx.xxx.png'
          }
        },
        methods:{
          imageLoadSuccess(e){
            console.log('load success',e);
          },
          imageLoadError(e){
            console.log('load error',e);
          }
        }
      }
    </script>
  ```