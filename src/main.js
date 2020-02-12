import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import axios from 'axios'

import './mock'

// 引入初始化样式
import './assets/reset.css'
// 字体样式
import './assets/iconfont.css'
// 解决移动端1px边框显示问题
import './assets/border.css'

// 轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// 全局挂载axios
Vue.prototype.$axios = axios

Vue.config.productionTip = false

// 解决移动端点击300ms延迟问题
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
