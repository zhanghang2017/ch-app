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
                        <div :id="item.icon_id" slot="icon" class="icon_div"></div>
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
        name: '首页',
        icon_id: 'icon-home'
      }, {
        id: 'hall',
        name: '大厅',
        icon_id: 'icon-sala'
      }, {
        id: 'server',
        name: '服务',
        icon_id: 'icon-server'
      }, {
        id: 'mine',
        name: '我的',
        icon_id: 'icon-account'
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
  flex: 0 0 51px;
  background: #FFF;
}
.mint-tabbar{
 background:#eaeaea;
  opacity: 0.95;
}
.icon_div{
  width:24px;
  height: 24px;

}
#icon-home{
 background:url('../assets/homePage/icon-home@2x.png') no-repeat;
 background-size: 100% auto;
 background-position-y: -47px;
}
#icon-sala{
 background:url('../assets/homePage/icon-sala@2x.png') no-repeat;
 background-size: 100% auto;
 background-position-y: -47px;
}
#icon-server{
 background:url('../assets/homePage/icon-server@2x.png') no-repeat;
 background-size: 100% auto;
 background-position-y: -47px;
}
#icon-account{
 background:url('../assets/homePage/icon-account@2x.png') no-repeat;
 background-size: 100% auto;
 background-position-y: -47px;
}
.mint-tabbar > .mint-tab-item.is-selected {
  /* background: #FFF; */
}
.mint-tabbar > .mint-tab-item.is-selected .icon_div{
   background-position-y: 0px!important;

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
/* iphone5 */
@media (device-height:568px) and (-webkit-min-device-pixel-ratio:2){

}
/* iphone6 */
@media(min-device-width:375px)and(max-device-width:667px)and(-webkit-min-device-pixel-ratio:2){

}
/*iphone6plus*/
@media(min-device-width:414px)and(max-device-width:736px)and(-webkit-min-device-pixel-ratio:3){

}
</style>
