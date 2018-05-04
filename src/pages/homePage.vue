<template>
   <div class="f_container" :style="{'-webkit-overflow-scrolling': scrollMode}">
      <div class="header">
        <div class="user" @click="handleClick"><img src="@/assets/icons/user_icon.png"/></div>
        <div class="search">服务搜索</div>
        <div class="scan_code"><img src="@/assets/icons/scan_icon.png"/></div>
      </div>
    <div class="f_center">

    <div class="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="@/assets/banner1.jpg"/></mt-swipe-item>
        <mt-swipe-item><img src="@/assets/banner2.jpg"/></mt-swipe-item>
        <mt-swipe-item><img src="@/assets/banner3.jpg"/></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="localInfo">
        <div class="local">成华</div>
        <div class="weather">天气</div>
        <div class="today">今日</div>
    </div>
    <div class="cells">
        <div class="cell-item" v-for=" (item,index) in navArr " :key="index">
            <img src="@/assets/logo.png"/>
           <div> {{item.name}}</div>
        </div>
    </div>
     <div class="cells">
        <div class="cell-item" v-for=" (item,index) in navArr " :key="index">
            <img src="@/assets/logo.png"/>
           <div> {{item.name}}</div>
        </div>
    </div>
     <div class="cells">
        <div class="cell-item" v-for=" (item,index) in navArr " :key="index">
            <img src="@/assets/logo.png"/>
           <div> {{item.name}}</div>
        </div>
    </div>
     <div class="cells">
        <div class="cell-item" v-for=" (item,index) in navArr " :key="index">
            <img src="@/assets/logo.png"/>
           <div> {{item.name}}</div>
        </div>
    </div>
    </div>
    <mt-popup class="popup_win"  v-model="popupVisible" popup-transition="popup-fade" >

    </mt-popup>
   </div>
</template>
<script>
import {Indicator} from 'mint-ui'
export default {
  beforeRouteEnter (to, from, next) {
    Indicator.open({
      text: 'Loading...',
      spinnerType: 'fading-circle'
    })
    setTimeout(() => {
      Indicator.close()
      next()
    }, 1000)
  },
  mounted () {

  },
  data () {
    return {
      popupVisible: false,
      scrollMode: 'touch', // 移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
      navArr: [{
        name: '进度查询'
      }, {
        name: '预约查询'
      }, {
        name: '诉求查询'
      }, {
        name: '办事指南'
      }, {
        name: '预约排号'
      }, {
        name: '车辆违章查询'
      }, {
        name: '社保查询'
      }, {
        name: '全部'
      }]
    }
  },
  methods: {
    handleClick: function () {
      this.popupVisible = true
    }
  }
}
</script>
<style scoped>

.f_container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch
}
.header{
   display: flex;
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 55px;
   z-index: 100;
   align-items: center;
   color: #FFF;
   text-align: center;

   background: rgba(0,0,0,0.2)
}
.header .user{
  flex: 1 0 10%;
}
.header .search{
  flex: 0 0 70%;
}
.header .scan_code{
  flex: 1 0 10%;
}
.f_center{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling:touch;
}

.localInfo{
  display: flex;
  background: #eeeeee;
  flex-direction:row
}
.weather,.local,.today{
  flex: 1;
  padding: 10px 0;
  text-align: center
}
.banner{
  width: 100%;
  height:200px;
  position: relative
}
.banner img{
  width: 100%;
  position: absolute;
  left: 0;
  left: 0;
  height: 100%;
}
.cells{
 display: flex;
 flex-direction:row;
 flex-wrap: wrap ;
  /* align-items:  center ; */
}
.cell-item{
 flex: 0 0 25%;
 padding:10px;
 box-sizing: border-box;
 text-align:center;
 font-size: 13px;
}
.cell-item img{
 width: 32px;
 height: 32px
}
.popup_win{
   width: 60%;
   left: 30%;
   height: 100%;
}
</style>
