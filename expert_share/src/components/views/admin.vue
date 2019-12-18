<template>
  <div>
    <div class="login" v-show="showLogin" style="text-align: center;display: inline-block;width: 200px">
      <h3 style="padding: 5px">登录管理后台</h3>
      <p v-show="showMessage" style="color: red; padding: 5px">{{message}}</p>
      <el-input type="text" placeholder="用户名" v-model="username" style="padding: 5px"/>
      <el-input type="password" placeholder="密码" v-model="password" style="padding: 5px"/>
      <el-button type="primary" v-on:click="login" style="margin: 5px">登录</el-button>
    </div>
    <div class="main" v-show="showMain" style="text-align: center;padding-left: 20px;padding-right: 20px">
      <el-header style="text-align: left;padding-top: 10px"><h1>后台管理</h1></el-header>
      <ul style="list-style: none">
        <li v-for="(item, index) in data" v-bind:key="item.id">
          <el-card shadow="hover" style="height: 160px;margin: 5px">
            <div style="display: inline-block;padding-right: 15px;float: left">
              <img :src=item.image1 style="height: 120px;width: 120px;padding-right: 5px">
              <img :src=item.image2 style="height: 120px;width: 120px">
            </div>
            <div>
              <div style="padding: 5px">
                <p style="font-size: 16px;text-align: left">申请人：{{item.applicant}}</p>
                <p style="text-align: left">申请理由：{{item.description}}</p>
              </div>
              <div style="display: inline-block">
                <el-button type="success" style="margin: 5px" @click="approve(item.id, item.index)">通过</el-button>
                <el-button type="danger" style="margin: 5px" @click="fail(item.id, item.index)">拒绝</el-button>
              </div>
            </div>
          </el-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "admin",
    data() {
      return {
        showLogin: true,
        showMessage: false,
        message: '',
        username: '',
        password: '',
        showMain: false,
        data: []
      }
    },
    methods: {
      login() {
        if (this.username === '') {
          this.message = '请输入用户名'
          this.showMessage = true
        } else if (this.password === '') {
          this.message = '请输入密码'
          this.showMessage = true
        } else {
          let data = {'username': this.username, 'password': this.password}
          this.$axios.post('/api/admin/login', data).then((res) => {
            if (res.data === -1) {
              this.message = '用户名或密码错误'
              this.showMessage = true
            } else {
              this.message = '登录成功'
              this.showMessage = true
              setTimeout(function () {
                this.showLogin = false
                this.showMain = true
                this.$axios.get('/api/admin/getData').then((res) => {
                  this.data = res.data
                })
              }.bind(this), 1000)
            }
          })
        }
      },
      approve(id, index) {
        this.$confirm('确认通过申请？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info'
        }).then(() => {
          this.$axios.post('/api/admin/approve', {'id': id}).then((res) => {
            if (res.data === 0) {
              this.$message.success('操作成功')
              this.data.splice(index, 1)
            } else {
              this.$message.error('操作失败')
            }
          })
        })
      },
      fail(id, index) {
        this.$prompt('输入拒绝理由', '提示', {
          confirmButtonText: '提交',
          cancelButtonText: '取消'
        }).then(({value}) => {
          this.$axios.post('/api/admin/reject', {'id': id, 'info': value}).then((res) => {
            if (res.data === 0) {
              this.$message.success('操作成功')
              this.data.splice(index, 1)
            } else {
              this.$message.error('操作失败')
            }
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>
