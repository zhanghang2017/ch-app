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

</style>
