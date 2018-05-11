import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'// fastclick引入方法
import VueLazyload from 'vue-lazyload'
import store from './store'

import 'common/stylus/index.styl'

/* fastclick使用方法，建议绑定在body上 */
fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
