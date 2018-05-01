import Vuex from 'vuex'
import Vue from 'vue'
import API from '@/api/index'
import { Indicator } from 'mint-ui'
Vue.use(Vuex)
// 用户状态管理
const userModel = {
  state () {
    return {
      userData: {
        loginStatus: false, // 用户登录状态
        userName: '', // 用户名
        userType: '', // 用户类型，自然人、法人
        token: ''// 服务器返回凭据--seesionid
      }
    }
  },
  getters: {
    getUser (state) {
      let user = state.userData
      if (!state.userData.loginStatus && state.userData.userName === '') {
        user = JSON.parse(localStorage.getItem('user') || '{}')
      }
      return user
    }
  },
  mutations: {
    login (state, user) {
      if (!state.userData.loginStatus) {
        state.userData.loginStatus = true
        state.userData.userName = user.userName
        state.userData.userType = user.userType
        state.userData.token = user.token
      }
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
    login (context, vm) {
      let {userName, password} = vm
      Indicator.open({
        text: '登录中...',
        spinnerType: 'fading-circle'
      })
      API.LOGIN(vm, {userName, password}).then((rep) => {
        console.log(rep)
        Indicator.close()
        if (rep.body.success) {
          let user = {
            loginStatus: true,
            userName: rep.body.result.userName,
            userType: '',
            token: ''

          }
          localStorage.setItem('user', JSON.stringify(user))
          context.commit('login', user)
          vm.$router.push({name: 'home'})
        }
      }, (rep) => {
        Indicator.close()
        console.log(rep)
      })
    },
    logout (context) {
      context.commit('logout')
    }
  }
}
// 页面路由记录 控制页面 左右滑动
const routeHistoryModel = {
  state () {
    return {
      routeHistory: [],
      transitionName: ''
    }
  },
  getters: {
    getTransitionName (state) {
      return state.transitionName
    },
    getRouteHistory (state) {
      return state.routeHistory
    }
  },
  mutations: {
    setTransitionName (state, {toName, fromName}) {
      if (state.routeHistory.indexOf(toName) < 0) {
        state.routeHistory.push(toName)
        state.transitionName = 'slide-right'
      } else if (state.routeHistory.indexOf(toName) > -1) {
        if (state.routeHistory.indexOf(toName) > state.routeHistory.indexOf(fromName)) {
          state.transitionName = 'slide-right'
        } else {
          state.transitionName = 'slide-left'
        }
      }
      if (!fromName) {
        state.transitionName = ''
      }
      return state.transitionName
    }
  }
}

const store = new Vuex.Store({
  modules: {
    userModel,
    routeHistoryModel
  }
})
export default store
