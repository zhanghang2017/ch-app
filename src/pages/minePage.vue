<template>
   <div class="mine_container">
    <div class="uers_info">
        <img src="@/assets/user_avator.jpg"/>
        <p>赵丽颖</p>
    </div>
    <div class="deal_info_list">
        <div class="deal_info_item">
             <div class="deal_info_item_icon"><img src="@/assets/icons/mine_yy.png"/></div>
             <div class="deal_info_item_con">我的预约排号</div>
             <div class="deal_info_item_link"><img src="@/assets/icons/right_arrow.png"/></div>
        </div>
        <div class="deal_info_item">
             <div class="deal_info_item_icon"><img src="@/assets/icons/mine_yy.png"/></div>
             <div class="deal_info_item_con">我的邮件寄取</div>
             <div class="deal_info_item_link"><img src="@/assets/icons/right_arrow.png"/></div>
        </div>
        <div class="deal_info_item">
             <div class="deal_info_item_icon"><img src="@/assets/icons/mine_yy.png"/></div>
             <div class="deal_info_item_con">我的证照代办号</div>
             <div class="deal_info_item_link"><img src="@/assets/icons/right_arrow.png"/></div>
        </div>
        <mt-button type="primary" @click="loginout">退出登录</mt-button>
    </div>
   </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    loginout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
<style scoped>
.mine_container{
    background: #F4F4F4
}
.uers_info{
    display: flex;
    width: 100%;
    height: 200px;
    align-items:center;
    color:#FFF;
    letter-spacing: 1PX;
    flex-direction: column;
    background:#CF4842;

}
.uers_info img{
    width: 100px;
    flex: 0  0 100px;
    height: 100px;
    margin-top:20px;
    border-radius: 50px
}
.deal_info_list{
    margin-top: 10px;
}
.deal_info_item{
    display: flex;
    width: 100%;
    background: #FFF;
    height: 50px;
    align-items: center;
    border-bottom: 1px solid #E8E8E8;
}

.deal_info_item .deal_info_item_icon{
    flex: 1 0 10%;
    text-align: center;
}
.deal_info_item .deal_info_item_icon img{
  vertical-align: middle;
}
.deal_info_item .deal_info_item_con{
    flex: 0 0 70%;
    padding-left: 20px;
}
.deal_info_item .deal_info_item_link{
    flex: 1 0 10%;
}
.deal_info_item .deal_info_item_link img{
    vertical-align: middle;
}
</style>
