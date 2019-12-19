<style>
  .title{
    font-family: "PingFang CS";
    font-size: 16px;
    font-weight: bold;
    color: #464c5b;
    background: #d7dde4;
  }
  .ling{
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
        <Header :style="{background: '#f5f7f9',paddingTop:'0px'}">
          <el-row style="text-align: left">
            <el-col :span=5><h3>科技专家资源共享平台</h3></el-col>
            <el-col :span=1><router-link :to="{path:'/'}" style="font-size: 17px">首页</router-link></el-col>
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
                <Button type="primary" :to="{path:'/login'}">
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
            <el-row class="demo-autocomplete">
              <el-col :span="6">
                <div class="title">学者</div>
              </el-col>
              <el-col :span="18">
                <el-autocomplete
                  class="inline-input"
                  v-model="state2"
                  :fetch-suggestions="querySearch"
                  placeholder="请输入内容"
                  :trigger-on-focus="false"
                  @select="handleSelect"
                ></el-autocomplete>
              </el-col>
            </el-row>
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
                      <application-for-expert :username="username"></application-for-expert>
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
            <br/>
            <Row>
              <Echarts></Echarts>
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
    import {getCookie} from "../../assets/js/cookie";
    export default {
        name: "expertMainPage",
        created() {
            this.username=getCookie('username');
            this.$nextTick(()=> {
                this.$axios.get('api/get_nowexpert/?user='+this.username).then((res) => {
                    this.expertname=res.data.name;
                    this.expertadd=res.data.location;
                    this.followed=res.data.isFollowed;
                });
                this.$axios.get('api/get_relation/?name='+this.expertname+'&user='+this.username).then((res) => {
                    this.experts=res.data;
                });
                this.$axios.get('api/get_four/?name='+this.expertname).then((res) => {
                    this.num1=res.data.num1;
                    this.num2=res.data.num2;
                    this.num3=res.data.num3;
                    this.num4=res.data.num4;
                });
            });
        },
        data () {
            return {
                restaurants: [],
                state1: '',
                state2: '',
                followed:true,
                login:true,
                username: '',
                expertname:'',
                expertadd:'',
                num1:1111,
                num2:2222,
                num3:3333,
                num4:4444,
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
        mounted() {
            this.restaurants = this.loadAll();
        },
        methods:{
            querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                    return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            loadAll() {
                return [
                    { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                    { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                    { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                    { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                    { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                    { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                    { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
                    { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
                    { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
                    { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
                    { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
                    { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
                    { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
                    { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
                    { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
                    { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
                    { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
                    { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
                    { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
                    { "value": "枪会山", "address": "上海市普陀区棕榈路" },
                    { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
                    { "value": "钱记", "address": "上海市长宁区天山西路" },
                    { "value": "壹杯加", "address": "上海市长宁区通协路" },
                    { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
                    { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
                    { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
                    { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
                    { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
                    { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
                    { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
                    { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
                    { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
                    { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
                    { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
                    { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
                    { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
                    { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
                    { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
                    { "value": "浏阳蒸菜", "address": "天山西路430号" },
                    { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
                    { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
                    { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
                    { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
                    { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
                    { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
                    { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
                    { "value": "阳阳麻辣烫", "address": "天山西路389号" },
                    { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
                ];
            },
            handleSelect(item) {
                console.log(item);
            },
            logout:function () {
                this.login=false;
            },
            gofollow:function () {
                this.$axios.post('api/go_follow/',this.username,this.expertname).then((res) => {

                });
                this.followed=true;
            },
            godisfollow:function () {
                this.$axios.post('api/go_disfollow/',this.username,this.expertname).then((res) => {

                });
                this.followed=false;
            }
        },
        components: {paper_result, classification,pageHeader,exShowFollows,Echarts,applicationForExpert,cloud}
    }
</script>
