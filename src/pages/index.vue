<template>
   <div class="container">
            <div class="center" >
                  <transition :name="transitionName" >
                     <router-view  class="child-view"></router-view>
                  </transition>
            </div>
            <div  class="foot">
                <mt-tabbar :fixed="fixed" v-model="selected">
                    <mt-tab-item  v-for="(item,index) in  tabItemArr " :key="index" :id="item.id" >
                        <!-- <img slot="icon" src="../assets/logo.png"> -->
                        <div slot="icon" class="icon_div"></div>
                        {{item.name}}
                    </mt-tab-item>
                </mt-tabbar>
            </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      scrollMode: 'auto', // 移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
      allLoaded: true,
      transitionName: '',
      fixed: true,
      tabItemArr: [{
        id: 'home',
        name: '首页'
      }, {
        id: 'hall',
        name: '大厅'
      }, {
        id: 'server',
        name: '服务'
      }, {
        id: 'mine',
        name: '我的'
      }],
      selected: ''
    }
  },
  methods: {

  },
  created () {
    this.selected = this.$route.name
  },
  watch: {
    $route (to, from) {
      this.selected = to.name
      this.transitionName = this.$store.getters.getTransitionName
    },
    selected (val) {
      if (val === 'mine' && !this.$store.getters.getUser.token) {
        this.$router.push({name: 'login'})
      } else {
        this.$router.push({name: val})
      }
    }
  }
}
</script>
<style scoped>
*{
  padding: 0;
  margin: 0
}

.container{
  display: flex;
  width:100%;
  height:100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  flex-direction:column
}
.foot{
  flex: 0 0 49px;
}
.icon_div{
  width:24px;
  height: 24px;
  background:url('../assets/logo.png') no-repeat;
  background-size: 24px 24px;
}
.center{
    width:100%;
    height: 100%;
    flex:1;
    position: relative;
    overflow: hidden;
    -webkit-overflow-scrolling: touch
}
.mint-tab-item {
    padding:7px 0;
    position: relative;
}
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
