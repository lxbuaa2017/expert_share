<template>
  <Layout>
    <Header :style="{background: '#f5f7f9',paddingTop:'0px'}">

      <el-row style="text-align: left">
        <el-col :span=5><h3>科技专家资源共享平台</h3></el-col>
        <el-col :span=4>&nbsp;</el-col>
        <el-col :span=12>
          <el-row style="text-align: center">
            <el-col :span="6"><a>
              <router-link :to="{path:'/'}">首页</router-link>
            </a></el-col>
            <el-col :span="6"><a>
              <router-link :to="{path:'searchPaperResult'}">搜索文章</router-link>
            </a></el-col>
          </el-row>
        </el-col>
        <el-col :span="3">
          <div style="text-align: right">
            <Dropdown style="text-align: center">
              <Button type="primary">
                {{username}}
                <Icon type="ios-arrow-down"></Icon>
              </Button>
              <DropdownMenu v-if="login_flag" slot="list">
                <DropdownItem>
                  <router-link :to="{path: '/userMainpage'}">个人信息</router-link>
                </DropdownItem>
                <DropdownItem>
                  <router-link :to="{path: '/userFavorites'}">收藏</router-link>
                </DropdownItem>
                <DropdownItem>
                  <router-link :to="{path: '/userFollows'}">关注</router-link>
                </DropdownItem>
                <DropdownItem>
                  <router-link :to="{path: '/userMessageBox'}">消息</router-link>
                </DropdownItem>
                <DropdownItem>
                  <el-link :underline="false" v-on:click="logout">退出账户</el-link>
                </DropdownItem>
              </DropdownMenu>
              <DropdownMenu v-else slot="list">
                <DropdownItem>
                  <router-link :to="{path: '/login'}">登录/注册</router-link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </el-col>
      </el-row>
    </Header>
  </Layout>
</template>

<script>
  import {delCookie, getCookie, setCookie} from "../../assets/js/cookie";
  export default {
    name: "pageHeader",
    data() {
      return {
        login_flag: false,
        username: '游客',
        userType: 'user'
      }
    },
    created() {
      if (getCookie('username') !== '') {
        this.login_flag = true;
        this.username = getCookie('username');
      }
    },
    methods: {
      logout() {
        delCookie('username');
        location.reload();
      },
    }
  }
</script>

<style scoped>

</style>
