module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./packages/v-auth-image.js
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
/* harmony default export */ var v_auth_image = (AuthImage);

// CONCATENATED MODULE: ./packages/index.js


const install = function (Vue,opts = {}) {
  Vue.use(v_auth_image, opts)
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = (v_auth_image);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=vauthimage.common.js.map