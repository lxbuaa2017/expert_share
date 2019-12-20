<style>
  .title {
    font-family: "PingFang CS";
    font-size: 16px;
    font-weight: bold;
    color: #464c5b;
    background: #d7dde4;
  }

  .ling {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 60px;
    font-weight: bold;
    color: #417DC9;
    background: white;
  }
</style>
<template>
  <div>
    <div class="layout">
      <Layout>
        <Header :style="{background:'white',paddingTop: '0px'}">
          <el-row style="text-align: left">
            <el-col :span=5><h3>科技专家资源共享平台</h3></el-col>
            <el-col :span=1><a style="font-size: 17px" href="/">首页</a></el-col>
            <el-col :span=13>&nbsp;</el-col>
            <el-col :span=5>
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
        <Layout>
          <Sider hide-trigger :style="{paddingTop: '130px',background: '#fff'}">
            <el-row class="demo-autocomplete">
              <el-col :span="6">
                <div class="title">学者</div>
              </el-col>
              <el-col :span="18">
                <Input v-model="searchExpertName" placeholder="请输入专家名" style="width: auto" @on-enter="searchExpert"/>
              </el-col>
            </el-row>
            <Row>
              <div class="title" style="padding-left: 10px;" align="left">相关学者</div>
              <ex-show-follows :experts="experts"></ex-show-follows>
              <Divider type="horizontal"/>
            </Row>
          </Sider>
          <Content :style="{background: '#fff'}">
            <Row>
              <Col span="20">
                <Col span="3">
                  <div class="demo-avatar">
                    <Avatar icon="ios-person" size="100"/>
                  </div>
                </Col>
                <Col span="15">
                  <Row>
                    <div style="padding-top: 20px"><p align="left" style="font-size: xx-large">{{expertname}}</p></div>
                  </Row>
                  <Row>
                    <div style="padding-top: 5px"><p align="left" style="font-size: medium;">{{add}}</p></div>
                  </Row>
                </Col>
                <Col span="6">
                  <Col span="12">
                    <div v-if="followed=='0'" style="padding-top: 32px">
                      <Button size="large" @click="gofollow()">关注</Button>
                    </div>
                    <div v-else style="padding-top: 32px">
                      <Button size="large" @click="godisfollow()">取消关注</Button>
                    </div>
                  </Col>
                  <Col span="12">
                    <div style="padding-top: 32px">
                      <application-for-expert :username="username"></application-for-expert>
                    </div>
                  </Col>
                </Col>
              </Col>
            </Row>
            <Row style="padding-top: 30px">
              <Col span=20 :style="{background:'#f5f7f9', minHeight:'100px'}">
                <Col span=6
                     :style="{borderRightColor:'#17233d', borderRightWidth:'1px',borderRightStyle:'solid',minHeight:'100px'}">
                  <Row style="padding-top: 32px">
                    <Col span="4" offset="3"><div style="padding-top: 5px"><Icon type="ios-book-outline" size="35" /></div></Col>
                    <Col span="12">
                      <div style="padding-top: 0px" >
                        <p style="font-size: x-large">总文献量</p>
                        <p style="font-size: large">{{num1}}</p>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col span=6
                     :style="{borderRightColor:'#17233d', borderRightWidth:'1px',borderRightStyle:'solid',minHeight:'100px'}">
                  <Row style="padding-top: 32px">
                    <Col span="6" offset="3"><div style="padding-top: 5px"><Icon type="ios-bookmark-outline" size="35" /></div></Col>
                    <Col span="12">
                      <div style="padding-top: 0px" >
                        <p style="font-size: x-large">核心发文量</p>
                        <p style="font-size: large" >{{num2}}</p>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col span=6
                     :style="{borderRightColor:'#17233d', borderRightWidth:'1px',borderRightStyle:'solid',minHeight:'100px'}">
                  <Row style="padding-top: 32px">
                    <Col span="4" offset="3"><div style="padding-top: 5px"><Icon type="ios-bookmarks-outline" size="35" /></div></Col>
                    <Col span="12">
                      <div style="padding-top: 0px" >
                        <p style="font-size: x-large">总被引量</p>
                        <p style="font-size: large" >{{num3}}</p>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col span=6 :style="{minHeight:'100px'}">
                  <Row style="padding-top: 32px">
                    <Col span="6" offset="3"><div style="padding-top: 5px"><Icon type="ios-browsers-outline" size="35"/></div></Col>
                    <Col span="12">
                      <div style="padding-top: 0px" >
                        <p style="font-size: x-large">篇均被引量</p>
                        <p style="font-size: large" >{{num4}}</p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Col>
              <Col span="4"></Col>
            </Row>
            <br/>
            <Row>
              <Echarts :add="add" :expertname="expertname"></Echarts>
            </Row>

          </Content>
        </Layout>
        <Footer class="layout-footer-center">2019 &copy; kunkun.inc</Footer>
      </Layout>
    </div>
  </div>
</template>

<script>
  import classification from "../searchPaperResult/classification";
  import paper_result from "../searchPaperResult/paper_result";
  import pageHeader from "../general/pageHeader";
  import exShowFollows from "../expertMainPage/exShowFollows";
  import Echarts from "../expertMainPage/Echarts";
  import applicationForExpert from "./applicationForExpert";
  import cloud from "./cloud";
  import {delCookie, getCookie} from "../../assets/js/cookie";

  export default {
    name: "expertMainPage",
    created() {
      this.expertname = this.$route.query.name;
      this.add = this.$route.query.add;
      if (getCookie('username') !== '') {
        this.login_flag = true;
        this.username = getCookie('username');
      } else {
        this.username = '游客'
      }
      this.$nextTick(() => {
        this.$axios.get('/api/get_experts_by_author_and_unit/?author=' + this.expertname + '&unit=' + this.add).then((res) => {
            console.log(res.data)
          this.num1 = res.data.literature_num;
          this.num2 = res.data.core_num;
          this.num3 = res.data.quoted_num;
          this.num4 = res.data.avg_quoted;
          console.log(this.num1)
          this.experts = res.data.cooperation_scholar;
          let au, un, len;
          len = this.experts.length;
          for (let i = 0; i < len; i++) {
            au = this.experts[i].autherName;
            un = this.experts[i].unitName;
            this.$axios.get('api/get_iffollowed/?user_id=' + this.user_id + '&author=' + au + '$unit' + un).then((res) => {
              this.experts[i].autherID = res.data.iffollowed;
            });
          }
        });
        this.$axios.get('api/get_iffollowed/?user_id=' + this.user_id + '&author=' + this.expertname + '$unit' + this.add).then((res) => {
          this.followed = res.data.iffollowed;
        });
      });
    },
    data() {
      return {
        user_id: '',
        login_flag: false,
        followed: '1',
        username: '',
        expertname: 'ssss',
        add: 'saddd',
        num1: 1111,
        num2: 2222,
        num3: 3333,
        num4: 4444,
        experts: [
          {
            "name": "褚兮铭0",
            "location": "北京航空航天大学",
            "avatar": "",
            "isFollowed": true,
          },
          {
            "name": "褚兮铭1",
            "location": "广东省广州市天河区教育局",
            "avatar": "",
            "isFollowed": true,
          },
          {
            "name": "褚兮铭2",
            "location": "北京航空航天大学",
            "avatar": "",
            "isFollowed": true,
          },
          {
            "name": "褚兮铭3",
            "location": "北京航空航天大学",
            "avatar": "",
            "isFollowed": true,
          },
          {
            "name": "褚兮铭4",
            "location": "北京航空航天大学",
            "avatar": "",
            "isFollowed": true,
          },
        ],
        searchExpertName: '',
      }
    },
    methods: {
      gofollow: function () {
        this.followed='1';
        let json_str = {
          user_id: this.user_id,
          author: this.expertname,
          unit: this.add
        }
        this.$axios.post('api/go_follow_by_user_id_and_author_and_unit/', json_str, {
          headers: {'content-type': 'application/json'},
          withCredentials: true
        })
      },
      godisfollow: function () {
        this.followed='0';
        let json_str = {
          user_id: this.user_id,
          author: this.expertname,
          unit: this.add
        }
        this.$axios.post('api/go_disfollow_by_user_id_and_author_and_unit/', json_str, {
          headers: {'content-type': 'application/json'},
          withCredentials: true
        });
      },
      logout() {
        this.login_flag=false;
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
      searchExpert(){
        console.log(this.expertName);
        this.$router.push({path: '/searchExpert', query: {name: this.searchExpertName}});
      },
    },
    components: {paper_result, classification, pageHeader, exShowFollows, Echarts, applicationForExpert, cloud}
  }
</script>
