const AuthImage = {
  // install方法
  install(Vue, options = {}) {
    const defaultSRC = options.defaultSRC || ''
    const defaultHeaders = options.defaultHeaders || null
    const isFunction = options.getHeaders && Object.prototype.toString.call(options.getHeaders) === '[object Function]'
    const getHeaders = isFunction ? options.getHeaders : null
    Vue.directive('auth-image', {
      bind(el, binding) {
        AuthImage.init(el, binding, {
          defaultSRC,
          defaultHeaders,
          getHeaders
        })
      },
      inserted(el) {
        AuthImage.load(el)
      },
      update(el, binding) {
        if (binding.value !== binding.oldValue) {
          el.setAttribute('data-src', binding.value)
          AuthImage.load(el)
        }
      },
      unbind(el, binding) {
        if (binding.arg === 'success') {
          delete el._v_auth_image_success
        } else if (binding.arg === 'error') {
          delete el._v_auth_image_error
        } else {
          delete el._v_auth_image_defaults
          el.removeAttribute('data-src')
        }
      }
    })
  },
  // 初始化
  init(el, binding, defaults) {
    if (binding.arg === 'success') {
      el._v_auth_image_success = binding.value
    } else if (binding.arg === 'error') {
      el._v_auth_image_error = binding.value
    } else {
      el._v_auth_image_defaults = defaults
      el.setAttribute('data-src', binding.value)
      el.setAttribute('src', defaults.defaultSRC)
    }
  },
  // 图片加载前的处理
  load(el) {
    const realSrc = el.dataset.src
    const defaults = el._v_auth_image_defaults
    let headers = {}
    if (defaults.defaultHeaders) {
      Object.assign(headers, defaults.defaultHeaders)
    }
    if (defaults.getHeaders) {
      const headers2 = defaults.getHeaders()
      Object.assign(headers, headers2)
    }
    if (realSrc) {
      AuthImage.requestImage(realSrc, el, headers)
      el.removeAttribute('data-src')
    }
  },
  // 获取真实图片数据
  requestImage(url, el, headers) {
    const request = new XMLHttpRequest()
    request.responseType = 'blob'
    request.open('get', url, true)
    Object.keys(headers).forEach(key=>{
        request.setRequestHeader(key, headers[key])
    })
    request.onreadystatechange = e => {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          el.src = URL.createObjectURL(request.response)
          const isBuffer = request.response.type.indexOf('application/json') === -1
          if (isBuffer) {
            el.onload = () => {
              URL.revokeObjectURL(el.src)
              const callback = el._v_auth_image_success
              callback && callback(e) // eslint-disable-line
            }
            el.onerror = (e) => {
              el.alt = '加载图片失败'
              const callback = el._v_auth_image_error
              callback && callback(e) // eslint-disable-line
            }
          } else {
            el.alt = '加载图片失败'
            const callback = el._v_auth_image_error
            callback && callback(e) // eslint-disable-line
          }
        } else {
          el.alt = '加载图片失败'
          const callback = el._v_auth_image_error
          callback && callback(e) // eslint-disable-line
        }
      }
    }
    request.send(null)
  }
}
export default AuthImage
