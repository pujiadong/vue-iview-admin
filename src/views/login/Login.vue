<template>
  <div class="login">
    <div class="login-box">
      <div class="title">系统登陆</div>
      <Input v-model="username" prefix="ios-contact" clearable class="input-box" />
      <Input v-model="password" prefix="md-lock" clearable class="input-box" type="password"/>
      <Button type="primary" long @click.native="login">登陆</Button>
    </div>
  </div>
</template>

<script>
import { getUserToken } from '../../api/login/login'
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (this.username === "admin" && this.password == "123123") {
        sessionStorage.setItem('token','admin');
        let info = { username:'admin',password:'123123'}
        getUserToken(info).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
        this.$router.push({
          path: "/statistics"
        });
        this.$Message.success("登陆成功");
      } else {
        this.$Message.error("账号或密码错误");
      }
    }
  },
  mounted(){
    
  }
};
</script>

<style lang="less" scoped>
.login {
  background: #143942;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  .login-box {
    min-width: 300px;
    max-width: 15%;
    margin: 30vh auto;
    text-align: center;
    color: #fff;
    .title{
      color: #fff;
      font-size: 30px;
      margin-bottom: 20px;
    }
    .input-box{
      width: 100%;
      margin-bottom: 20px;
    }
  }
}
</style>