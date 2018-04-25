<template>
  <div class="workOnlineIndex">
    <div class="header">
        <mt-header title="在线办事">
            <mt-button icon="back" @click="back" slot="left">返回</mt-button>
        </mt-header>
    </div>
    <div class="content">
       <transition>
         <router-view></router-view>
       </transition>
    </div>
    <div class="foot">
      <mt-tabbar :fixed="fixed" v-model="selected">
            <mt-tab-item  v-for="(item,index) in  tabItemArr " :key="index" :id="item.id" >
                <img slot="icon" src="@/assets/logo.png">
                {{item.name}}
            </mt-tab-item>
       </mt-tabbar>
    </div>
  </div>
</template>
<script>
// 网上办事搜索页面
export default {
  data () {
    return {
      selected: '',
      fixed: true,
      tabItemArr: [{
        id: 'theme',
        path: 'theme',
        name: '按主题'
      }, {
        id: 'depart',
        path: 'theme',
        name: '按部门'
      }, {
        id: 'street',
        path: 'street',
        name: '按街道'
      }]
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.workOnlineIndex{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column
}
.header{
    flex: 0 0 55px;
    background: red;
}
.mint-header{
    height: 55px;
}
.content{
    flex: 1;
    width:100%;
    text-align: center;
    overflow: auto;
     background: blue;
}
.foot{
  flex: 0 0 55px;
}
</style>
