<style>
  .title{
    font-family: "PingFang CS";
    font-size: 16px;
    font-weight: bold;
    color: #464c5b;
    background: #d7dde4;
  }
</style>
<template>
  <div>
    <div class="layout">
      <Layout>
        <Header :style="{background: '#f5f7f9',paddingTop:'0px'}">
          <el-row style="text-align: left">
            <el-col :span=5><h3>科技专家资源共享平台</h3></el-col>
            <el-col :span=1><a style="font-size: 17px">首页</a></el-col>
            <el-col :span=13>&nbsp;</el-col>
            <el-col :span=5>
              <div v-if="login==true" style="text-align: right">
                <Dropdown style="text-align: center">
                  <Button type="primary">
                    {{username}}
                    <Icon type="ios-arrow-down"></Icon>
                  </Button>
                  <DropdownMenu slot="list">
                    <DropdownItem>
                      <router-link :to="{path: '/userMainpage'}">
                        个人信息
                      </router-link>
                    </DropdownItem>
                    <DropdownItem>
                      <router-link :to="{path: '/userFavorites'}">
                        收藏
                      </router-link>
                    </DropdownItem>
                    <DropdownItem>
                      <router-link :to="{path: '/userFollows'}">
                        关注
                      </router-link>
                    </DropdownItem>
                    <DropdownItem>
                      <div @click="logout()">退出账户</div>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div v-else style="text-align: right">
                <Button type="primary">
                  登录/注册
                </Button>
              </div>
            </el-col>
          </el-row>
        </Header>
        <Content :style="{padding: '24px',background: '#f5f7f9'}">
          <div style="padding-left: 22px;padding-right: 22px;padding-top: 0px">
            <Input search enter-button="Search"  type="text" placeholder="Enter something..."
                   @on-search="handleQuery($event)" size="large"/>
          </div>
        </Content>
        <Layout>
          <Sider hide-trigger :style="{paddingTop: '130px',background: '#fff'}">
            <Row>
              <div class="title" style="padding-left: 10px;" align="left">相关学者</div>
              <ex-show-follows :experts="experts"></ex-show-follows>
              <Divider type="horizontal" />
            </Row>
          </Sider>
          <Content :style="{background: '#fff'}">
            <Row>
              <Col span="20">
                <Col span="3">
                  <div class="demo-avatar" >
                    <Avatar icon="ios-person" size=100  />
                  </div>
                </Col>
                <Col span="15" >
                  <Row>
                    <div style="padding-top: 20px"><h1 align="left" >{{expertname}}</h1></div>
                  </Row>
                  <Row>
                    <div style="padding-top: 5px"><h4 align="left" >{{expertadd}}</h4></div>
                  </Row>
                </Col>
                <Col span="6">
                  <Col span="12">
                    <div v-if="followed==false" style="padding-top: 32px">
                      <Button  size="large" @click="gofollow()">关注</Button>
                    </div>
                    <div v-else style="padding-top: 32px">
                      <Button  size="large" @click="godisfollow()">取消关注</Button>
                    </div>
                  </Col>
                  <Col span="12">
                    <div style="padding-top: 32px">
                      <application-for-expert></application-for-expert>
                    </div>
                  </Col>
                </Col>
              </Col>
            </Row>
            <Row style="padding-top: 30px">
              <Col span=20  :style="{background:'#f5f7f9', minHeight:'100px'}">
                <Col span=6 :style="{borderRightColor:'#17233d', borderRightWidth:'1px',borderRightStyle:'solid',minHeight:'100px'}">
                  <Row style="padding-top: 32px">
                    <Col span="4" offset="3"><div style="padding-top: 5px"><Icon type="md-book" size="35" /></div></Col>
                    <Col span="12">
                      <div style="padding-top: 0px" >
                        <h2>总文献量</h2>
                        <h3>{{num1}}</h3>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col span=6 :style="{borderRightColor:'#17233d', borderRightWidth:'1px',borderRightStyle:'solid',minHeight:'100px'}">
                  <Row style="padding-top: 32px">
                    <Col span="6" offset="3"><div style="padding-top: 5px"><Icon type="md-book" size="35" /></div></Col>
                    <Col span="12">
                      <div style="padding-top: 0px" >
                        <h2>核心发文量</h2>
                        <h3 >{{num2}}</h3>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col span=6 :style="{borderRightColor:'#17233d', borderRightWidth:'1px',borderRightStyle:'solid',minHeight:'100px'}">
                  <Row style="padding-top: 32px">
                    <Col span="4" offset="3"><div style="padding-top: 5px"><Icon type="md-book" size="35" /></div></Col>
                    <Col span="12">
                      <div style="padding-top: 0px" >
                        <h2>总被引量</h2>
                        <h3 >{{num3}}</h3>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col span=6 :style="{minHeight:'100px'}">
                  <Row style="padding-top: 32px">
                    <Col span="6" offset="3"><div style="padding-top: 5px"><Icon type="md-book" size="35" /></div></Col>
                    <Col span="12">
                      <div style="padding-top: 0px" >
                        <h2>篇均被引量</h2>
                        <h3 >{{num4}}</h3>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Col>
              <Col span="4"></Col>
            </Row>
            <Row>
              <Col span="12">
                <div><h1>个人成果数</h1></div>
                <div id="myChart1" :style="{paddingTop: '0px',width: '600px', height: '600px'}">
                  <Echarts></Echarts>
                </div>
              </Col>
              <Col span="12">
                <div><h1>成果引用数</h1></div>
                <div id="myChart2" :style="{paddingTop: '0px',width: '600px', height: '600px'}">
                  <Echarts></Echarts>
                </div>
              </Col>
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
  export default {
    name: "expertMainPage",
    created() {
      this.$nextTick(()=> {
        this.$axios.get('api/get_user/').then((res) => {
          this.username=res.data.username;
        });
      this.$axios.get('api/get_nowexpert/?user='+this.username).then((res) => {
        this.expertname=res.data.name;
        this.expertadd=res.data.location;
        this.followed=res.data.isFollowed;
      });
      this.$axios.get('api/get_relation/?name='+this.expertname+'&user='+this.username).then((res) => {
        console.log(res);
        this.experts=res.data;
      });
      this.$axios.get('api/get_field/?name='+this.expertname).then((res) => {
        this.field=res.data;
      });
      this.$axios.get('api/get_published/?name='+this.expertname).then((res) => {
        this.published=res.data;
      });
      this.$axios.get('api/get_four/?name='+this.expertname).then((res) => {
        this.num1=res.data.num1;
        this.num2=res.data.num2;
        this.num3=res.data.num3;
        this.num4=res.data.num4;
      })
      })
    },
    data () {
      return {
        followed:true,
        login:true,
        username: '',
        expertname:'',
        expertadd:'',
        num1:1111,
        num2:2222,
        num3:3333,
        num4:4444,
        field:[

        ],
        published:[

        ],
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
        ]
      }
    },
    methods:{
      logout:function () {
        this.login=false;
      },
      gofollow:function () {
        this.followed=true;
      },
      godisfollow:function () {
        this.followed=false;
      }
    },
    components: {paper_result, classification,pageHeader,exShowFollows,Echarts,applicationForExpert}
  }
</script>
