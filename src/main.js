import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import './plugins/element.js'
import VueAxiosPlugin from 'vue-axios-plugin'

Vue.use(VueAxiosPlugin, {
  // 请求拦截处理
  reqHandleFunc: config => config,
  reqErrorFunc: error => Promise.reject(error),
  // 响应拦截处理
  resHandleFunc: response => response,
  resErrorFunc: error => Promise.reject(error)
});

Vue.config.productionTip = false

// 创建一个接口和地址,定义到Vue的原型上
// import axios from "axios"
// Vue.prototype.$http = axios.create({
//   baseURL: "http://localhost:3000/api"
// })

//import Vue from 'vue'
export const EventBus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


