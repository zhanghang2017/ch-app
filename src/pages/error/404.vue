<template>
   <div class="error_404">
     <div class="header">
        <mt-header title="访问不存在">
            <mt-button icon="back" @click="back" slot="left">返回</mt-button>
        </mt-header>
     </div>
     <div class="error_content">
         <h2>404</h2>
         <h3>您访问的页面迷路了</h3>
     </div>
   </div>
</template>
<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.error_404{
    display:flex;
    width:100%;
    height:100%;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
}
.header{
    flex: 0 0 55px;
    background: red;
}
.error_404 .error_content{
    flex: 1;
    text-align: center;
}
.mint-header{
    height: 55px;
}
</style>
