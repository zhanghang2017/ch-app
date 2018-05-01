import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 按需加载
const routes = [{
  path: '/index',
  component: resolve => require(['@/pages/index'], resolve),
  children: [{
    path: '/',
    name: 'home',
    component: resolve => require(['@/pages/homePage'], resolve)
  }, {
    path: 'hall',
    name: 'hall',
    component: resolve => require(['@/pages/hallPage'], resolve)
  }, {
    path: 'server',
    name: 'server',
    component: resolve => require(['@/pages/homePage'], resolve)
  }, {
    path: 'mine',
    name: 'mine',
    component: resolve => require(['@/pages/minePage'], resolve)
  }]
}, {
  path: '/workOnline',
  component: resolve => require(['@/pages/workOnline/index'], resolve),
  children: [{
    path: 'theme',
    name: 'theme',
    component: resolve => require(['@/pages/workOnline/theme'], resolve)
  }, {
    path: 'depart',
    name: 'depart',
    component: resolve => require(['@/pages/minePage'], resolve)
  }, {
    path: 'street',
    name: 'street',
    component: resolve => require(['@/pages/minePage'], resolve)
  }]
}, {
  path: '/login',
  name: 'login',
  component: resolve => require(['@/pages/logReg/login'], resolve)
}, {
  path: '/',
  redirect: '/index'
}, {
  path: '/404',
  name: '404',
  component: resolve => require(['@/pages/error/404'], resolve)
}]

const router = new Router({
  routes
})
router.beforeEach((to, from, next) => {
  // Indicator.open({
  //   text: 'Loading...',
  //   spinnerType: 'fading-circle'
  // })
  if (to.matched.length === 0) { // 如果未匹配到路由
    next({
      name: '404'
    }) // 跳转公共404页面
  } else {
    // API.get().then(()=>{}) // 这里需要验证session 是否过期 过期则需调用用户状态管理的退出登录操作
    // 用meta判断是否需要登录--可以在Vue文件中判断

    next() // 如果匹配到正确跳转
  }
})

export {
  router,
  routes
}
