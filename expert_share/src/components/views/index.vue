<style scoped xmlns:vertical-align="http://www.w3.org/1999/xhtml" xmlns:vertical-align="http://www.w3.org/1999/xhtml"
       xmlns:vertical-align="http://www.w3.org/1999/xhtml">
  .layout {
    border: 1px solid #d7dde4;
    background: #fff;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #fff;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }

  .layout-footer-center {
    text-align: center;
  }
</style>
<template>
  <div class="layout">
    <img style="width: 100%; height: 1%;" src="../../assets/background4.png">
    <Layout>
      <Header :style="{background: '#f5f7f9',paddingTop:'0px'}">

        <el-row style="text-align: left">
          <el-col :span=5><h3>科技专家资源共享平台</h3></el-col>
          <el-col :span=4>&nbsp;</el-col>
          <el-col :span=12>
            <el-row style="text-align: center">
              <el-col :span="3"><a>
                <router-link :to="{path:'/'}">首页</router-link>
              </a></el-col>
              <el-col :span="3"><a>
                <router-link :to="{path:'searchPaperResult'}">搜索文章</router-link>
              </a></el-col>
              <el-col :span="3"><a>搜索专家</a></el-col>
              <el-col :span="3"><a>个人主页</a></el-col>
              <!--el-col :span="2"><el-link type="primary">登录/注册</el-link></el-col-->
            </el-row>
          </el-col>
          <el-col :span="3">
            <router-link v-if="login_flag==false" :to="{path:'login'}">登录/注册</router-link>
            <span v-else>{{username}}</span>
          </el-col>
        </el-row>
      </Header>

    </Layout>
    <div style="padding: 22px;display: inline-block;width: 100%">
      <!--Input search enter-button="搜索"  type="text" placeholder="请输入搜索内容"
             @on-search="handleQuery($event)" size="large" style="width: 70%; float: left"/-->
      <el-input type="text" placeholder="请输入搜索内容" style="width: 30%;padding-right: 20px"/>
      <el-button type="primary" @click="handleQuery">搜索</el-button>
      <el-button type="primary" @click="dialogVisible = true">高级搜索</el-button>
    </div>
    <el-dialog
      title="高级检索"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
        <el-form-item
          prop="email"
          label="主题"
          :rules="{
      required: true, message: '主题不能为空', trigger: 'blur'
    }"
        >
          <el-input v-model="dynamicValidateForm.email"></el-input>
        </el-form-item>
        <el-form-item
          v-for="(domain, index) in dynamicValidateForm.domains"
          :label="'关键词' + index"
          :key="domain.key"
          :prop="'domains.' + index + '.value'"
          :rules="{
      required: true, message: '关键词不能为空', trigger: 'blur'
    }"
        >
          <el-input v-model="domain.value"></el-input>
          <el-button @click.prevent="removeDomain(domain)">删除</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('dynamicValidateForm')">搜索</el-button>
          <el-button @click="addDomain">新增关键词</el-button>
          <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
  </span>
    </el-dialog>

    <!--router-link :to="{path:'paper/',
           query:{paper_id:item._id.$oid}}"
                 target="_blank" v-html="height_light(item.c_title)"-->
    <el-carousel :interval="4000" type="card" height="300px">

       
      <el-carousel-item v-for="item in imagesbox" :key="item.id1">
        <router-link :to="{path:'searchPaperResult'}">
            <img style="width: auto; height: 100%;" :src="item.idView" class="image">
        </router-link>
         
      </el-carousel-item>

    </el-carousel>
    <div style="width: 60%;padding: 20px; text-align: left;display: inline-block">
      <el-card header="最新资源" shadow="hover">
        <li v-for="item in newest" :key="item.id">
          <el-link :href="item.url" target="_blank">{{item.title}}</el-link>
        </li>
      </el-card>
    </div>
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

  export default {
    created() {
      if (getCookie('username') != null) {
        this.login_flag = true;
        this.username = getCookie('username');
      }
    },
    data() {
      return {
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        },
        username: '',
        value: '',
        dialogVisible: false,
        login_flag: false,
        imagesbox: [{id1: 0, idView: require("../../assets/pp5.jpg")},
          {id1: 1, idView: require("../../assets/pp2.jpg")},
          {id1: 2, idView: require("../../assets/pp3.jpg")},
          {id1: 2, idView: require("../../assets/pp4.jpg")}],
        newest: []
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      handleRender() {
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
      this.$axios.get('/api/newest/').then((res) => {
        this.newest = res.data
      })
    }
  }

</script>
