<style scoped xmlns:vertical-align="http://www.w3.org/1999/xhtml" xmlns:vertical-align="http://www.w3.org/1999/xhtml"
       xmlns:vertical-align="http://www.w3.org/1999/xhtml">
  .layout{
    border: 1px solid #d7dde4;
    background: #fff;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #fff;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
</style>
<template>
  <div class="layout">
    <img style="width: 100%; height: 1%;" src="../../assets/background1.png" >
    <Layout>
      <Header :style="{background: '#f5f7f9',paddingTop:'0px'}">

        <el-row style="text-align: left">
          <el-col :span=5><h3>科技专家资源共享平台</h3></el-col>
          <el-col :span=4>&nbsp;</el-col>
          <el-col :span=12>
            <el-row style="text-align: center">
              <el-col :span="3"><a ><router-link :to="{path:'/'}">首页</router-link></a></el-col>
              <el-col :span="3"><a ><router-link :to="{path:'searchPaperResult'}">搜索文章</router-link></a></el-col>
              <el-col :span="3"><a >搜索专家</a></el-col>
              <el-col :span="3"><a >个人主页</a></el-col>
              <!--el-col :span="2"><el-link type="primary">登录/注册</el-link></el-col-->
            </el-row>
          </el-col>
          <el-col :span="3">
            <router-link v-if="login_flag==false" :to="{path:'login'}">登录/注册</router-link>
            <span v-else >{{username}}</span>
          </el-col>
        </el-row>
      </Header>

    </Layout>
    <div style="padding-left: 22px;padding-top: 0px">
      <Sider hide-trigger>请输入搜索内容</Sider>
      <Input search enter-button="Search"  type="text" placeholder="Enter something..."
             @on-search="handleQuery($event)" size="large"/>
      <Button type="primary" ><router-link :to="{path:'/'}">高级搜索</router-link></Button>
      <el-button type="text" @click="open">点击打开 Message Box</el-button>
      <br/>
    </div>
    <!--router-link :to="{path:'paper/',
           query:{paper_id:item._id.$oid}}"
                 target="_blank" v-html="height_light(item.c_title)"-->
    <el-carousel :interval="4000" type="card" height="600px">

     <el-carousel-item v-for="item in imagesbox" :key="item.id1">
      <router-link :to="{path:'searchPaperResult'}">
      <img style="width: auto; height: 100%;" :src="item.idView" class="image">
      </router-link>
     </el-carousel-item>

    </el-carousel>
    <Header>2019 © kunkun.inc</Header>

  </div>

</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }


</style>

<script>
  import {setCookie, getCookie} from '../../assets/js/cookie.js'

  export default{
    created(){
      if (getCookie('username')!=null) {
        this.login_flag = true;
        this.username = getCookie('username');
      }
    },
    data(){
      return {
        username:'',
        value: '',
        login_flag:false,
        imagesbox:[{id1:0,idView:require("../../assets/pp1.jpg")},
          {id1:1,idView:require("../../assets/pp2.jpg")},
          {id1:2,idView:require("../../assets/pp3.jpg")},
          {id1:2,idView:require("../../assets/detail1.jpg")}]

      }
    },
    methods: {
      /*ok () {
        this.$Message.info('Clicked ok');
      },
      cancel () {
        this.$Message.info('Clicked cancel');
      },*/
      get () {
        //username = getCookie('username');
        this.username = getCookie('username');
      },
      open() {
        this.$prompt('请输入关键词（以逗号分隔）', '高级搜索', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          //inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          //inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      handleRender () {
        this.$Modal.confirm({
          render: (h) => {
            return h('Input', {
              props: {
                value: this.value,
                autofocus: true,
                placeholder: '请输入关键词',
              },
              on: {
                input: (val) => {
                  this.value = val;
                }
              }
            })
          },

        })
      }
    },
    mounted() {
    }
  }

</script>
