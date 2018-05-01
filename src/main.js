// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResouce from 'vue-resource'
import {router} from './router'
import store from './store'
import mintUi from 'mint-ui'

Vue.use(mintUi)
Vue.use(VueResouce)
Vue.config.productionTip = false

Vue.http.interceptors.push((request, next) => {
  request.credentials = true
  request.emulateJSON = true
  next((response) => {
    if (response.body.code != null && response.body.code === '401') { // 判断session过期
      // 过期则清空用户信息 调用用户状态管理 退出登录操作 提示 你没登录 router---主页
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
