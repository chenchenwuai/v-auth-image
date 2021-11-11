<template>
  <div id="app">
    <div class="page-header">
      <h1>v-auth-image</h1>
      <h2>显示有认证机制的图片的vue2指令</h2>
      <a href="https://github.com/chenchenwuai/vue-auth-image" class="btn" target="_blank">GitHub</a>
      <a href="https://www.npmjs.com/package/v-auth-image" class="btn" target="_blank">NPM</a>
    </div>
    <div class="page-content" v-hljs>
      <h2>Demo</h2>
      <p>打开控制台的network,筛选xhr，刷新页面后，查看logo.png请求，会看到request 里面有Authorization和x-token自定义字段 </p>
      <img 
        v-auth-image="img_url"
        v-auth-image:success="imageLoadSuccess"
        v-auth-image:error="imageLoadError"
      >
      <h2>npm 安装</h2>
      <pre>
        $ npm i v-auth-image
      </pre>
      <h2>使用</h2>
      <h3>注册指令</h3>
      <pre>
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
      </pre>
      <h3>使用指令 v-auth-image</h3>
      <pre>
        &lt;template&gt;
          &lt;img 
            v-auth-image="img_url"
            v-auth-image:success="imageLoadSuccess"
            v-auth-image:error="imageLoadError"
          &gt;
        &lt;/template&gt;
        &lt;script&gt;
          export default {
            data () {
              return {
                imageUrl: &#x27;http://xxx.xxx.png&#x27;
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
        &lt;/script&gt;
      </pre>
    </div>
    <div class="page-footer">v-auth-image 插件由<a href="https://github.com/chenchenwuai/" target="_blank">chenwuai</a>编写</div>
  </div>
</template>

<script>
import imgUrl from './assets/logo.png';
export default {
  data () {
    return {
      img_url:imgUrl
    }
  },
  methods: {
    imageLoadSuccess(e){
      console.log('load success',e);
    },
    imageLoadError(e){
      console.log('load error',e);
    }
  }
}
</script>
  