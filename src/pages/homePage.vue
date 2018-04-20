<template>
   <div class="f_container">
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
  data () {
    return {
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
  }
}
</script>
<style scoped>
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
}
.banner img{
  width: 100%;
  height: 200px;
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
</style>
