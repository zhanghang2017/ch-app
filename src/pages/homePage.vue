<template>
   <div class="f_container" :style="{'-webkit-overflow-scrolling': scrollMode}">
      <div class="header">
        <div class="search"><button  @click="popupVisible=true"><span class="search_icon"></span><span>请输入你要办理的事项</span></button></div>
        <div class="scan_code"><img src="@/assets/icons/scan_icon.png"/></div>
      </div>
    <div class="f_center">

    <div class="banner">
      <swiper height="210px" :loop="loop" :auto="auto">
        <swiper-item class="swiper-demo-img" ><img src="@/assets/banner1.jpg"></swiper-item>
        <swiper-item class="swiper-demo-img" ><img src="@/assets/banner1.jpg"></swiper-item>
        <swiper-item class="swiper-demo-img" ><img src="@/assets/banner1.jpg"></swiper-item>
      </swiper>
    </div>
    <div class="localInfo">
        <div class="local">成华区<span class="local_arrow"></span></div>
        <div class="weather"><img src="@/assets/homePage/weather-cloudy@2x.png"/> 17℃~20℃</div>
        <div class="today">今日限行：<span>2</span><span>7</span></div>
    </div>
    <div class="cells">
        <div class="cell-item" :id="item.id" v-for=" (item,index) in navArr " :key="index">
            <div class="cell-item-img"></div>
            <div>{{item.name}}</div>
        </div>
    </div>
    <div class="information">
      <div class="information_title"><span>精选消息</span><span><span></span>换一换</span></div>
    </div>
    <div class="img_info">
       <div class="img_info_item">
         <img src="@/assets/banner1.jpg">
         <div>省公安厅指挥中心（办公室）副主任张伟一莅临视察工作…</div>
       </div>
    </div>
    </div>
     <popup v-model="popupVisible" width="100%" height="100%" position="bottom" >
        <div>
          <button  @click="popupVisible=false">取消</button>
        </div>
      </popup>
   </div>
</template>
<script>

import { Swiper, SwiperItem, Popup } from 'vux'

export default {
  components: {Swiper, SwiperItem, Popup},
  beforeRouteEnter (to, from, next) {
    next()
  },
  mounted () {

  },
  data () {
    return {
      loop: true,
      auto: true,
      popupVisible: false,
      scrollMode: 'touch', // 移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
      navArr: [{
        name: '进度查询',
        id: 'progress'
      }, {
        name: '预约查询',
        id: 'orderSearch'
      }, {
        name: '诉求查询',
        id: 'appealSearch'
      }, {
        name: '办事指南',
        id: 'guide'
      }, {
        name: '预约排号',
        id: 'order'
      }, {
        name: '车辆违章查询',
        id: 'car'
      }, {
        name: '社保查询',
        id: 'socialSecurity'
      }, {
        name: '全部',
        id: 'all'
      }]
    }
  },
  methods: {

  }
}
</script>
<style scoped>
*{
  padding: 0;
  margin: 0
}
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
   height: 44px;
   z-index: 100;
   align-items: center;
   color: #FFF;
   margin-top: 10px;
   text-align: center;
   background: rgba(0,0,0,0.5)

}
.header .search{
  flex: 1;
}
.header .search button{
  width: 90%;
  background: rgba(255,255,255,0.20);
  border-radius: 100px;
  text-align: left;
  height: 36px;
  font-size: 15px;
  margin-left: 5%;
  color: #FFF;
  border: none;
  align-items: center;
  display: flex;
  line-height: 21px;
}
.search_icon{
  display: inline-block;
  width: 21px;
  height: 21px;
  flex: 0 0 21px;
  background: url('../assets/homePage/icon-search@2x.png') no-repeat;
  background-size:21px 21px;
  margin: 5px 10px;
}
.header .scan_code{
  flex: 0 0 24px;
  margin-right: 3.7%;
}
.header .scan_code img{
  width: 24px;
  height: 24px;
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
  height: 52px;
  box-sizing: border-box;
  flex-direction:row;
   align-items: center;
}
.local{
  flex: 1;
  text-align: left;
  font-size: 15px;
  padding-left: 4.8%;
}
.local_arrow{
  display: inline-block;
  width: 10px;
  height: 5px;
  margin-left: 3px;
  background: url('../assets/homePage/icon-arrowDown@2x.png') no-repeat;
  background-size:10px 5px;
  background-position-y: -1px;
}

.weather{
  flex: -1 0 38%;
  text-align: left;
  font-size: 15px;
  color: #999999;
  text-align: center
}
.weather img{
  width: 22.6px;
  height: 18.6px;
  margin-top: -5px;
  vertical-align: middle;
}
.today{
  text-align: center;
  flex: 0 0 45%;
  text-align: left;
  font-size: 15px;
  color: #999999;
  text-align: center
}
.today span{
  width: 21px;
  height: 26px;
  margin-right: 2.5px;
  display: inline-block;
  color: #FFF;
  line-height: 26px;
  background: url(../assets/homePage/plate@2x.png) no-repeat;
  background-size: 21px 26px;
}
.banner{
  width: 100%;
  height:210px;
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
}
.cell-item{
 flex: 0 0 25%;
 padding:18px 0;
 box-sizing: border-box;
 text-align:center;
 font-size: 14px;
}
.cell-item .cell-item-img{
 width: 32px;
 height: 32px;
 margin:0 auto 5px auto;

}
#progress .cell-item-img{
  background: url("../assets/homePage/icon-progress@2x.png") no-repeat;
  background-size: 32px 32px;
}
#orderSearch .cell-item-img{
  background: url("../assets/homePage/icon-orderSearch@2x.png") no-repeat;
  background-size: 32px 32px;
}
#appealSearch .cell-item-img{
  background: url("../assets/homePage/icon-appealSearch@2x.png") no-repeat;
  background-size: 32px 32px;
}
#guide .cell-item-img{
  background: url("../assets/homePage/icon-guide@2x.png") no-repeat;
  background-size: 32px 32px;
}
#order .cell-item-img{
  background: url("../assets/homePage/icon-order@2x.png") no-repeat;
  background-size: 32px 32px;
}
#car .cell-item-img{
  background: url("../assets/homePage/icon-car@2x.png") no-repeat;
  background-size: 32px 32px;
}
#socialSecurity .cell-item-img{
  background: url("../assets/homePage/icon-socialSecurity@2x.png") no-repeat;
  background-size: 32px 32px;
}
#all .cell-item-img{
  background: url("../assets/homePage/icon-all@2x.png") no-repeat;
  background-size: 32px 32px;
}
.information_title{
  display: flex;
  margin-top: 27px;
  margin-bottom: 9px;
  flex-direction: row;
  justify-content: space-between;
}
.information_title span{
  font-size: 15px;
  padding: 0 10px;
}
.information_title>span:first-of-type{
  color: #999999
}
.information_title>span:last-of-type{
  color:#0088EB
}
.information_title>span:last-of-type span{
  width: 15px;
  height: 15px;
  padding-top: 5px;
  background: url('../assets/homePage/icon-shape@2x.png') no-repeat;
  background-size: 15px;
  background-position-y: 6px;
  margin-right: 4.1px
}
.img_info{
  padding: 0 10px;
  font-size: 18px;
  font-family: PingFangSC-Regular;
  font-size: 18px;
  color: #222222;
  letter-spacing: 0.22px;
  text-align: justify;
  margin-bottom: 20px
}
.img_info_item img{
  width: 100%;
  height: 158px;
}

.popup_win{
   width: 60%;
   left: 30%;
   height: 100%;
}
/* iphone5 */
@media (device-height:568px) and (-webkit-min-device-pixel-ratio:2){
.local{
  flex: 1;
  text-align: left;
  font-size: 15px;
  padding-left: 4.0%;
}
.today{
  text-align: center;
  flex: 0 0 40%;
  text-align: left;
  font-size: 15px;
  color: #999999;
  text-align: center
}
}
/* iphone6 */
@media(min-device-width:375px)and(max-device-width:667px)and(-webkit-min-device-pixel-ratio:2){

}
/*iphone6plus*/
@media(min-device-width:414px)and(max-device-width:736px)and(-webkit-min-device-pixel-ratio:3){

}
</style>
