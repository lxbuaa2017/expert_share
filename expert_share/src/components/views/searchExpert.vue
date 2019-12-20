<template>
  <div>
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
              <!--el-col :span="2"><el-link type="primary">登录/注册</el-link></el-col-->
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
                    <el-link :underline="false" v-on:click="userMainpage">个人信息</el-link>
                  </DropdownItem>
                  <DropdownItem>
                    <el-link :underline="false" v-on:click="userFavorites">收藏</el-link>
                  </DropdownItem>
                  <DropdownItem>
                    <el-link :underline="false" v-on:click="userFollows">关注</el-link>
                  </DropdownItem>
                  <DropdownItem>
                    <el-link :underline="false" v-on:click="userMessageBox">消息</el-link>
                  </DropdownItem>
                  <DropdownItem>
                    <el-link :underline="false" v-on:click="logout">退出账户</el-link>
                  </DropdownItem>
                </DropdownMenu>
                <DropdownMenu v-else slot="list">
                  <DropdownItem>
                    <el-link :underline="false" v-on:click="login">登录/注册</el-link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </el-col>
        </el-row>
      </Header>

    </Layout>
    <el-row>
      <el-input placeholder="请输入搜索内容" v-model="inputText" style="width: 30%;padding-right: 15px"/>
      <el-button type="primary" v-on:click="searchExpert">搜索专家</el-button>
    </el-row>
    <br>
    <h1>搜索结果</h1>
    <div v-if="showFlag == true">
      <Card v-for="(expert, index) in expertList" :key="index">
        <h2 @click="change(expert)">{{expert.author}}</h2>
        <h2 @click="change(expert)">{{expert.unit}}</h2>
      </Card>
    </div>
  </div>
</template>

<script>
  import pageHeader from "../general/pageHeader";
  import {delCookie} from "../../assets/js/cookie";
  export default {
    name: "searchExpert",
    data() {
      return {
        showFlag: false,
        expertList: [],
        inputText: '',
        username: '游客'
      }
    },
    created() {
      this.$nextTick(()=> {
        this.$axios.get('api/get_experts_by_author/?author='+this.$route.query.name).then((res) => {
          this.expertList = res.data;
          this.showFlag = true;
        })
      });
    },
    methods: {
      change(expert) {
        this.$router.push({path: '/expertMainPage', query: {name: expert.author, add: expert.unit}});
      },
      search() {
        window.localStorage.setItem("input_keyword", this.inputText)
        this.$router.push('/searchPaperResult')
      },
      logout() {
        delCookie('username')
        location.reload()
      },
      userFavorites() {
        this.$router.push('/userFavorites')
      },
      userFollows() {
        this.$router.push('/userFollows')
      },
      userMainpage() {
        this.$router.push('/userMainpage')
      },
      userMessageBox() {
        this.$router.push('/userMessageBox')
      },
      login() {
        this.$router.push('/login')
      },
      searchExpert() {
        this.$router.push('/searchExpert?name=' + this.inputText)
      }
    },
    components: {pageHeader}
  }
</script>
