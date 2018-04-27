<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view  class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    '$route' (to, from, next) {
      this.$store.commit('setTransitionName', {toName: to.name, fromName: from.name})
      this.transitionName = this.$store.getters.getTransitionName
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
