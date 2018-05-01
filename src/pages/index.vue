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
                        <mt-badge type="error" v-if="item.infoNum!==0" v-text="item.infoNum"></mt-badge>
                        <img slot="icon" src="../assets/logo.png">
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
        infoNum: 1
      }, {
        id: 'hall',
        name: '大厅',
        infoNum: 10
      }, {
        id: 'server',
        name: '服务',
        infoNum: 8
      }, {
        id: 'mine',
        name: '我的',
        infoNum: 0
      }],
      selected: ''
    }
  },
  methods: {
    load_top () {
      // 下拉加载
      // this.loadPageList()
      this.$refs.loadmore.onTopLoaded()// 固定方法，查询完要调用一次，用于重新定位
    },
    load_bottom () {
      // 上拉加载
      // this.more()// 上拉触发的分页查询
      this.allLoaded = true// 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded()// 固定方法，查询完要调用一次，用于重新定位
    }
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
      console.log(this.$store.getters.getUser)
      if (val === 'mine' && !this.$store.getters.getUser.loginStatus) {
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
  flex: 0 0 55px;
}
.center{
    width:100%;
    height: 100%;
    flex:1;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch
}
.mint-tab-item {
    padding:7px 0;
    position: relative;
}
.mint-badge{
    position:absolute;
    right:0;
    top: -10px
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
