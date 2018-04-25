<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view  class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
import {routes} from '@/router'
export default {
  name: 'App',
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    '$route' (to, from, next) {
      let routesArr = routes.map((item) => item.name)
      const toName = to.name // 即将进入的路由名字
      const fromName = from.name // 即将离开的路由名字
      const toIndex = routesArr.indexOf(toName) // 进入下标
      const fromIndex = routesArr.indexOf(fromName) // 离开下标
      if (toIndex > -1 && fromIndex > -1) { // 如果下标都存在
        if (toIndex < fromIndex) { // 如果进入的下标小于离开的下标，那么是从左滑入
          this.transitionName = 'slide-left'
        } else {
          this.transitionName = 'slide-right' // 如果进入的下标大于离开的下标，那么从右滑入
        }
      } else {
        this.transitionName = 'slide-right' // 如果进入的下标大于离开的下标，那么从右滑入
      }
    }
  }
}
</script>

<style scoped>
.child-view {
  position: absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
  transition: all .4s cubic-bezier(.55,0,.1,1);
}
.slide-right-leave-active, .slide-left-enter {
  opacity: 0;
  -webkit-transform: translate(-100px, 0);
  transform: translate(-100px, 0);
}
.slide-right-enter, .slide-left-leave-active {
  opacity: 0;
  -webkit-transform: translate(100px, 0);
  transform: translate(100px, 0);
}
</style>
