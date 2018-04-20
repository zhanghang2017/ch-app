import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
// 用户状态管理
const userModel = {
  state () {
    return {
      userData: {
        loginStatus: '', // 用户登录状态
        userName: '', // 用户名
        userType: '', // 用户类型，自然人、法人
        token: ''// 服务器返回凭据--seesionid
      }
    }
  },
  getters: {
    getUser (state) {
      return state.userData
    }
  },
  mutations: {
    login (state) {
      let user = JSON.parse(localStorage.getItem('user'))
      state.userData.loginStatus = true
      state.userData.userName = user.userName
      state.userData.userType = user.userType
      state.userData.token = user.token
    },
    logout (state) {
      localStorage.setItem('user', '')
      state.userData.loginStatus = false
      state.userData.userName = ''
      state.userData.userType = ''
      state.userData.token = ''
    }
  },
  actions: {
    login (context, user) {
      localStorage.setItem('user', JSON.stringify(user))
      context.commit('login')
    },
    logout (context) {
      context.commit('logout')
    }
  }
}
// 页面 左右滑动 切换方向
const transitionNameModel = {
  state () {
    return {
      transitionName: 'slide-right'
    }
  }
}
const store = new Vuex.Store({
  modules: {
    userModel,
    transitionNameModel
  }
})
export default store
