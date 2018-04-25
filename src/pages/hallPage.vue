<template>
   <div class="hall_container">
          {{msg}}
         <router-link :to="{name:'theme'}">进去在线办事</router-link>
   </div>
</template>
<script>
// import {Indicator} from 'mint-ui'
export default {
  // beforeRouteEnter (to, from, next) {
  //   Indicator.open({
  //     text: 'Loading...',
  //     spinnerType: 'fading-circle'
  //   })
  //   setTimeout(() => {
  //     Indicator.close()
  //     next()
  //   }, 1000)
  // },
  created () {
    console.log(this.$router)
  },
  data () {
    return {
      msg: '我是大厅主页'
    }
  }
}
</script>
<style scoped>
.hall_container{
    /* background: blue */
}
</style>
