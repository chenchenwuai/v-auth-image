<template>
  <div id="app">
    <div class="page-header">
      <h1>vAuthImage</h1>
      <h2>基于 Vue 的权限图片查看</h2>
      <a href="https://github.com/chenchenwuai/vue-auth-image" class="btn" target="_blank">View on GitHub</a>
    </div>
    <div class="page-content" v-hljs>
      <h1>vAuthImage</h1>
      <h2>Demo</h2>
      <p>打开控制台的network,筛选xhr，刷新页面后，查看logo.png请求，会看到request 里面有Authorization和x-token自定义字段 </p>
      <AuthImage :src="img_url" :auth-params="authParams" style="width:100px;height:100px;" @load="loaded" @error="loadError"></AuthImage>
      <h2>特点</h2>
      <ol>
        <li>可自定义header字段，无限制数量</li>
        <li>简单易用，结构简单，只有一个img标签</li>
        <li>可根据业务快速修改，代码简单</li>
        <li><del>提供以 npm 的形式安装提供全局组件</del></li>
      </ol>
      <h2>安装</h2>
      <h3>git clone</h3>
      <pre>
        $ git clone git@github.com:chenchenwuai/vue-auth-image.git 
        $ cd vue-auth-image
        $ npm i
        $ npm run lib // 在dist文件夹生成可通过script标签引入的js文件
        $ npm run serve // 本地运行
        $ npm run build // 打包demo</pre>
      <h3>npm 安装</h3>
      <pre>
        $ npm i vauthimage -S</pre>
      <h2>使用</h2>
      <h3>在 `main.js` 文件中引入插件并注册</h3>
      <pre>
        import vauthimage from 'vauthimage'
        Vue.use(vauthimage)</pre>
      <h3>在项目中使用 vauthimage</h3>
      <pre>
        &lt;template&gt;
          &lt;authImage :src=&quot;imageUrl&quot; /&gt; :auth-params=&quot;authParams&quot; /&gt;
        &lt;/template&gt;
        &lt;script&gt;
          export default {
            data () {
              return {
                imageUrl: &#x27;http://xxx.xxx.png&#x27;,
                authParams: {
                  Authorization: &#x27;this is a token&#x27;,
                  &#x27;x-token&#x27;: &#x27;this is a header param&#x27;
                }
              }
            }
          }
        &lt;/script&gt;</pre>
      <h2>事件</h2>
      <p><code>load</code>加载成功触发</p>
      <p><code>error</code>加载失败触发</p>
      <pre> &lt;authImage v-on:load=&quot;headleloaded&quot; v-on:error=&quot;headleLoadError&quot; &gt;</pre>
    </div>
    <div class="page-footer">vue-auth-image 插件由<a href="https://github.com/chenchenwuai/" target="_blank">chenwuai</a>编写</div>
  </div>
</template>

<script>
import imgUrl from './assets/logo.png';
export default {
  data () {
    return {
      img_url:imgUrl,
      authParams:{ // 一层对象
        Authorization:'this is a token',
        'x-token':'this is a header param'
      }
    }
  },
  methods: {
    loaded(){
      console.log('load success')
    },
    loadError(e){
      console.log(e)
    }
  }
}
</script>

<style lang="sass">
@import "assets/style.scss";
</style>
  