// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResouce from 'vue-resource'
import {router} from './router'
import store from './store'
import mintUi from 'mint-ui'
import { LoadingPlugin } from 'vux'
const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(mintUi)
Vue.use(VueResouce)
Vue.use(LoadingPlugin)
Vue.config.productionTip = false

Vue.http.interceptors.push((request, next) => {
  request.credentials = true
  request.emulateJSON = true
  next((response) => {
    if (response.status !== 200) { // 统一对异常处理
      let {status, statusText} = response
      router.push({'name': '404', 'params': {status, statusText}})
    } else {
      return response
    }
  })
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
