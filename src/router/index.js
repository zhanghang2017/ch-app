import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 按需加载
const routes = [{
  path: '/home',
  name: 'home',
  component: resolve => require(['@/pages/home'], resolve),
  children: [{
    path: '/',
    name: 'firstPage',
    component: resolve => require(['@/pages/firstPage'], resolve)
  }, {
    path: 'hall',
    name: 'hall',
    component: resolve => require(['@/pages/hallPage'], resolve)
  }, {
    path: 'server',
    name: 'server',
    component: resolve => require(['@/pages/firstPage'], resolve)
  }, {
    path: 'user',
    name: 'user',
    component: resolve => require(['@/pages/firstPage'], resolve)
  }]
}, {
  path: '/',
  redirect: '/home'
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

export default router
