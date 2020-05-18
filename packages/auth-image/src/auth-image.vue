<template>
  <img
    ref="img"
    src=""
  >
</template>
<script>
export default {
  name:'AuthImage',
  props: {
    src: {
      type: String,
      default: ''
    },
    authParams:{
      type:Object,
      default:null
    }
  },
  data(){
    return {
      loading: true,
      error: false
    }
  },
  watch: {
    src() {
      this.$refs.img.src = ''
      this.loadImage()
    }
  },
  mounted() {
    this.loadImage()
  },
  methods: {
    loadImage(){
      // reset status
      this.loading = true;
      this.error = false;

      this.requestImage(this.src,this.$refs.img)
    },
    requestImage(src, element) {
      try{
        const request = new XMLHttpRequest()
        request.responseType = 'blob'
        request.open('get', src, true)
        if(this.authParams && Object.keys(this.authParams).length > 0){
          Object.keys(this.authParams).forEach(key=>{
            request.setRequestHeader(key, this.authParams[key])
          })
        }
        request.onreadystatechange = e => {
          if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
              element.src = URL.createObjectURL(request.response)
              element.onload = () => {
                URL.revokeObjectURL(element.src)
              }
              this.loading = false;
              this.error = false;
              this.$emit('load', e)
            } else {
              this.loading = false;
              this.error = true;
              this.$emit('error', e)
            }
          }
        }
        request.send(null)
      }catch(e){
        this.loading = false;
        this.error = true;
        this.$emit('error', e)
      }
    }
  }
}
</script>