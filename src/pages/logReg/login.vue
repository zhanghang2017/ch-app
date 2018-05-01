<template>
   <div class="login_container">
    <div class="header">
        <mt-header title="登录">
            <mt-button icon="back" @click="back" slot="left"></mt-button>
        </mt-header>
     </div>
    <div class="login_box">
         <mt-field label="用户名" placeholder="请输入用户名" v-model="userName"></mt-field>
         <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
         <mt-button type="primary" @click="login">登录</mt-button>
    </div>
   </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    login () {
      if (this.userName.trim() === '') {
        Toast({
          message: '请填写用户名',
          position: 'middle',
          duration: 1000
        })
        return false
      }
      if (this.password.trim() === '') {
        Toast({
          message: '请填写密码',
          position: 'middle',
          duration: 1000
        })
        return false
      }
      //   const {userName, password} = this
      this.$store.dispatch('login', this)
    }
  }
}
</script>
<style scoped>
.login_container{
    font-size: 32px;
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
.login_container .login_box{
    flex: 1;
    text-align: center;
}
.mint-header{
    height: 55px;
}
</style>
