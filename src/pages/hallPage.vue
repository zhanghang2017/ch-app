<template>
   <div class="hall_container">
          {{msg}}
         <router-link tag="button" :to="{name:'theme'}">按主题</router-link>
         <router-link tag="button" :to="{name:'depart'}">按部门</router-link>
        <router-link  tag="button" :to="{name:'street'}">按街道</router-link>
   </div>
</template>
<script>
export default {
  created () {

  },
  data () {
    return {
      msg: '我是大厅主页'
    }
  }
}
</script>
<style scoped>
*{
  padding: 0;
  margin: 0;
}
.hall_container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch
}
</style>
