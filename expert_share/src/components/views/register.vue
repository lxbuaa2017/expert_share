<template>
  <div id="main">
    <img src="../../assets/img/logo.png" style="width: 200px">
    <div class="login-wrap" v-show="showLogin">
      <h3>注册</h3>
      <p v-show="showTishi">{{tishi}}</p>
      <div id="tenantOptionRegister">
        <el-input type="text" placeholder="用户名" v-model="newUsername"></el-input>
        <el-input type="password" placeholder="密码" maxlength="16" v-model="newPassword"></el-input>
        <el-input type="password" placeholder="确认密码" maxlength="16" v-model="confirmPassword"></el-input>
        <el-input type="text" placeholder="手机号码" v-model="phone"></el-input>
        <div id="verification" style="margin: 5px 5px 2px;">
          <el-input type="text" placeholder="验证码" maxlength="6" autocomplete="off" v-model="authentication"
                    style="width: 50%; float: left; margin: 0"></el-input>
          <el-button id="sendBtn" style="width: 46%;float: right;margin: 0;font-size: 13px"
                     type="primary" plain v-on:click="sendCode" v-text="btnText" :disabled="isDisabled"/>
        </div>
        <el-input type="email" placeholder="电子邮箱" v-model="email"></el-input>
        <div id="optionbox" style="padding: 10px">
          <el-radio v-model="isMale" label="true">男</el-radio>
          <el-radio v-model="isMale" label="false">女</el-radio>
        </div>
        <el-input type="number" min="0" max="150" placeholder="年龄" v-model="age"></el-input>
        <el-button type="primary" v-on:click="register" style="margin: 5px;">注册</el-button>
        <el-link :underline="false" v-on:click="ToLogin">已有账号？马上登录</el-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #main {
    vertical-align: center;
    padding-top: 40px;
  }

  #verification {
    display: inline-block;
    width: 250px;
  }

  .login-wrap {
    width: 250px;
    text-align: center;
    margin: auto;
    display: inline-block;
    vertical-align: top;
    padding-left: 20px;
  }

  .register-wrap {
    width: 250px;
    text-align: center;
    margin: auto;
    display: inline-block;
    vertical-align: top;
    padding-left: 20px;
  }

  .el-input {
    width: 250px;
    height: 40px;
    line-height: 40px;
    margin: 5px;
  }

  p {
    color: red;
  }

  button {
    width: 250px;
    height: 40px;
    font-size: 15px;
    margin: 5px;
  }

  span {
    cursor: pointer;
  }
</style>

<script>
  import {setCookie, getCookie} from '../../assets/js/cookie.js'

  export default {
    data () {
      return {
        username: '',
        password: '',
        newUsername: '',
        newPassword: '',
        confirmPassword: '',
        phone: '',
        authentication: '',
        btnText: '获取验证码',
        isDisabled: false,
        wait: 60,
        email: '',
        isMale: 'true',
        age: '',
        tishi: '',
        showTishi: false,
        showLogin: true,
        showRegister: false
      }
    },
    mounted () {
      if (getCookie('username')) {
        this.$router.push('/home')
      }
    },
    methods: {
      login () {
        if (this.username === '') {
          this.tishi = '请输入用户名'
          this.showTishi = true
        } else if (this.password === '') {
          this.tishi = '请输入密码'
          this.showTishi = true
        } else {
          let data = {'username': this.username, 'password': this.password}
          this.$axios.post('/api/login/', data).then((res) => {
            console.log(res)
            if (res.data === 0) {
              this.tishi = '用户名或密码错误'
              this.showTishi = true
            } else {
              this.tishi = '登录成功'
              this.showTishi = true
              setCookie('username', this.username, 1000 * 60)
              setTimeout(function () {
                this.$router.push('/home')
              }.bind(this), 1000)
            }
          })
        }
      },
      ToRegister () {
        this.showTishi = false
        this.showRegister = true
        this.showLogin = false
      },
      ToLogin () {
        this.showTishi = false
        this.showRegister = false
        this.showLogin = true
      },
      sendCode () {
        var rePhone = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
        if (!rePhone.test(this.phone)) {
          this.tishi = '手机号无效'
          this.showTishi = true
        } else {
          this.showTishi = false
          let data = {'phone': this.phone}
          let json_str = JSON.stringify(data)
          this.$axios.post('/api/sendSms/', json_str, {        headers: {
                  'content-type': 'application/json'
              },withCredentials: true}).then((res) => {
            this.btnText = '正在发送...'
            this.isDisabled = true
            console.log(res)
            if (res.data === 0) {
              this.timer()
            } else {
              this.tishi = '获取验证码失败'
              this.showTishi = true
              this.btnText = '获取验证码'
              this.isDisabled = false
            }
          })
        }
      },
      timer () {
        if (this.wait === 0) {
          this.btnText = '获取验证码'
          this.isDisabled = false
          this.wait = 60
        } else {
          this.isDisabled = true
          this.btnText = this.wait + '秒后重发'
          this.wait--
          setTimeout(function () {
            this.timer()
          }.bind(this), 1000)
        }
      },
      register () {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        var rePhone = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
        if (this.newUsername === '') {
          this.tishi = '请输入用户名'
          this.showTishi = true
        } else if (this.newPassword === '') {
          this.tishi = '请输入密码'
          this.showTishi = true
        } else if (this.newPassword.length < 6) {
          this.tishi = '密码长度必须为6位或以上'
          this.showTishi = true
        } else if (this.newPassword !== this.confirmPassword) {
          this.tishi = '两次输入的密码不一致'
          this.showTishi = true
        } else if (!rePhone.test(this.phone)) {
          this.tishi = '手机号无效'
          this.showTishi = true
        } else if (!re.test(this.email)) {
          this.tishi = '邮箱无效'
          this.showTishi = true
        } else if (this.age < 0 || this.age > 150) {
          this.tishi = '年龄无效'
          this.showTishi = true
        } else {
          let verify = {'code': this.authentication}
          this.$axios.post('/api/verify/', verify, {withCredentials: true}).then((res) => {
            console.log(res)
            if (res.data !== 1000) {
              this.tishi = '验证码错误'
              this.showTishi = true
            } else {
              let data = {
                'username': this.newUsername,
                'password': this.newPassword,
                'phone': this.phone,
                'code': this.authentication,
                'email': this.email,
                'isMale': this.isMale,
                'age': this.age
              }
              this.$axios.post('/api/register/', data).then((res) => {
                console.log(res)
                if (res.data === 1000) {
                  this.tishi = '注册成功'
                  this.showTishi = true
                  this.username = ''
                  this.password = ''
                  setTimeout(function () {
                    this.showRegister = false
                    this.showLogin = true
                    this.showTishi = false
                  }.bind(this), 1000)
                } else if (res.data === 1028) {
                  this.tishi = '用户名已存在'
                  this.showTishi = true
                }
              })
            }
          })
        }
      }
    }
  }
</script>
