// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import MyHttpServer from '@/plugins/http.js'

// import axios from 'axios'
// Vue.prototype.axios = axios
import router from './router'

import '@/assets/css/index.css'

// 使用vue的插件
Vue.use(ElementUI)
Vue.use(MyHttpServer)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
