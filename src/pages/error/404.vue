<template>
   <div class="error_404">
     <div class="header">
        <mt-header :title="errorCode">
            <mt-button icon="back" @click="back" slot="left">返回</mt-button>
        </mt-header>
     </div>
     <div class="error_content">
         <h2 v-text="errorText"></h2>
     </div>
   </div>
</template>
<script>
export default {
  created () {
    this.errorCode = this.$route.params.status + ''
    this.errorText = this.$route.params.statusText
  },
  data () {
    return {
      errorCode: '',
      errorText: ''
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
