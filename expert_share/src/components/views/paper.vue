<style scoped xmlns:vertical-align="http://www.w3.org/1999/xhtml" xmlns:vertical-align="http://www.w3.org/1999/xhtml"
       xmlns:vertical-align="http://www.w3.org/1999/xhtml">
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
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

  .abstract {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: left;
  }

</style>
<template>
  <div class="layout">
    <Layout>
      <Header :style="{background: '#f5f7f9',paddingTop:'0px'}">
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
      <!--        <pageHeader></pageHeader>-->
      <Layout :style="{padding: '0 50px'}">
        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
          <el-row>
            <el-col :span=15>
              <el-row type="flex" justify="left">
                <p
                  style="font-family: 微软雅黑;line-height: 35px;font-size: 24px;font-weight: 400;color: rgb(66, 125, 201)">
                  &nbsp;{{paper.c_title}}</p>
              </el-row>

              <el-row type="flex" justify="left">
                <p style="font-family: 宋体;line-height: 27px;font-size: 14px;font-weight: 400;color: rgb(142, 142, 142)">
                  &nbsp;{{paper.e_title}}</p>
              </el-row>
              <br/>
              <el-row type="flex" justify="left">
                <el-col :span=3>
                  <Button :size="buttonSize" icon="ios-cloudy-outline" type="default"><a target="_blank"
                                                                                         :href="paper.url">链接</a>
                  </Button>
                </el-col>
                <el-col :span=3>
                  <Button :size="buttonSize" icon="md-bookmark" type="default">收藏</Button>
                </el-col>
              </el-row>
              <br/>
              <el-row class="abstract">
                <Card style="width:640px;height: 120px">
                  <div style="text-align:left">
                    <span style="font-family: 微软雅黑;font-size: 14px;color:RGB(137,137,137);font-weight: 700">摘要:</span>
                    {{paper.c_abstract}}
                  </div>
                </Card>
              </el-row>
              <br/>
              <el-row>
                <Card style="width:640px">
                  <div style="text-align:left">
                    <span style="font-family: 微软雅黑;font-size: 14px;color:RGB(137,137,137);font-weight: 700">关键词:</span>
                    <template v-for="keyword in split_keywords(paper.c_keywords)">
                      <Tag>{{keyword}}</Tag>
                    </template>
                    <br/><br/>
                    <span style="font-family: 微软雅黑;font-size: 14px;color:RGB(137,137,137);font-weight: 700">作者:</span>
                    {{paper.c_author}}
                    <br/><br/>
                    <span style="font-family: 微软雅黑;font-size: 14px;color:RGB(137,137,137);font-weight: 700">刊名:</span>
                    {{paper.c_periodical}}
                    <br/><br/>
                    <span
                      style="font-family: 微软雅黑;font-size: 14px;color:RGB(137,137,137);font-weight: 700">Journal:</span>
                    {{paper.e_periodical}}
                    <br/><br/>
                    <span
                      style="font-family: 微软雅黑;font-size: 14px;color:RGB(137,137,137);font-weight: 700">年，卷（期）:</span>
                    {{paper.indexid}}
                    <br/><br/>
                    <span
                      style="font-family: 微软雅黑;font-size: 14px;color:RGB(137,137,137);font-weight: 700">在线出版日期:</span>
                    {{paper.time}}
                    <br/><br/>
                    <span style="font-family: 微软雅黑;font-size: 14px;color:RGB(137,137,137);font-weight: 700">单位:</span>
                    {{paper.units}}
                  </div>
                </Card>
              </el-row>
            </el-col>
            <el-col :span=9>
              <el-row type="flex" justify="left">
                <p
                  style="font-family: 微软雅黑;line-height: 35px;font-size: 24px;font-weight: 400;color: rgb(66, 125, 201)">
                  推荐文章</p>
                <br/>
              </el-row>
              <el-row>
                <br/><br/>
                <template class="abstract">
                  <Table :columns="columns1" :data="recommend_papers"></Table>
                </template>
              </el-row>
              <br/><br/><br/><br/>
              <el-row type="flex" justify="left">
                <p
                  style="font-family: 微软雅黑;line-height: 35px;font-size: 24px;font-weight: 400;color: rgb(66, 125, 201)">
                  推荐专家</p>
                <br/>
              </el-row>
              <el-row>
                <br/><br/>
                <template class="abstract">
                  <Table :columns="columns2" :data="recommend_experts"></Table>
                </template>
              </el-row>
            </el-col>
          </el-row>
        </Content>
      </Layout>
      <Footer class="layout-footer-center">2019 &copy; kunkun.inc</Footer>
    </Layout>
  </div>

</template>

<script>
  import pageHeader from "../general/pageHeader";
  import {delCookie, getCookie} from "../../assets/js/cookie";

  export default {
    name: 'paper',
    created() {
      if (getCookie('username') !== '') {
        this.login_flag = true;
        this.username = getCookie('username');
      }
    },
    mounted() {
      this.$nextTick(() => {
        // alert(this.$route.query.paper_id)
        // id = this.$route.query.paper_id
        let self = this
        //http://localhost:8000/get_paper_by_id?id=5de340a60031bb949dbd7632
        this.$axios.get('/api/get_paper_by_id/?id=' + self.$route.query.paper_id).then((res) => {
          // alert(res.data)
          console.log(res.data)
          self.paper = res.data[0]
        })
      })
    },
    data() {
      return {
        columns1: [
          {
            title: '题目',
            key: 'c_title'
          },
          {
            title: '作者',
            key: 'c_author'
          }
        ],
        columns2: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '单位',
            key: 'unit'
          }
        ],
        login: true,
        username: 'lx',
        paper:
          {
            "id": "5de33f210031bb949dbd6831",
            "c_abstract": "针对微小型导航系统对导航计算机处理能力、体积、功耗及适应性等方面的要求,以捷联导航系统为例,使用SOPC方法在FPGA上设计嵌入式高性能导航计算机系统,采用嵌入式实时操作系统(RTOS)作为软件开发平台,重点研究了系统硬件平台的设计以及系统应用程序的开发.测试结果表明该系统在姿态、位置、速度等参数误差满足要求,具有很高的实用价值.",
            "c_author": "李良仁,汪临伟,彭雪峰",
            "c_keywords": "SOPC,FPGA,导航计算机,RTOS",
            "c_periodical": "制造业自动化",
            "c_title": "基于SOPC的嵌入式导航计算机设计",
            "e_periodical": "MANUFACTURING AUTOMATION",
            "e_title": "Design of the embedded navigation computer based on SOPC",
            "fund": "",
            "indexid": "2010, 32(1)",
            "time": "2010年3月30日",
            "units": "九江职业技术学院电气工程系,九江,332007",
            "url": "http://d.old.wanfangdata.com.cn/Periodical/zzyzdh201001047"
          },
        recommend_papers: [
          {
            "id": "5de33f200031bb949dbd682d",
            "c_abstract": "本文介绍了一种基于凌阳十六位单片机SPCE061 A,能识别不同节奏舞曲的智能机器人.凌阳SPCE061A单片机内部集成了专门处理语音信号的ADO、DAC、AGO等电路,能非常方便地实现对麦克风音乐信号的放大和采集.在数据处理时,对采集的数据进行FFT变换,并由此来识别不同舞曲的节奏,并利用变址法和离散傅立叶变换系数WN程序化等方法进一步提高FFT变换的计算的速度.利用这种方法,通过多次试验能实现对慢三和慢四舞曲的识别.",
            "c_author": "何毅,梅雪,黄超,安飞,余阳,林锦国",
            "c_keywords": "单片机(SPCE061A),舞曲节奏,信号处理,机器人",
            "c_periodical": "制造业自动化",
            "c_title": "能识别舞曲节奏的智能机器人",
            "e_periodical": "MANUFACTURING AUTOMATION",
            "e_title": "The Intelligent Robot which can identify the different dance music rhythms",
            "fund": "",
            "indexid": "2010, 32(1)",
            "time": "2010年3月30日",
            "units": "南京工业大学,自动化与电气工程学院,南京,211800",
            "url": "http://d.old.wanfangdata.com.cn/Periodical/zzyzdh201001051"
          },
          {
            "id": "5de33f200031bb949dbd682e",
            "c_abstract": "本文主要介绍了在高电压功率测量和近场显微技术等领域中,通过分析计算坡印亭矢量来解决科技生活中一些实际问题的方法.",
            "c_author": "谢小乐",
            "c_keywords": "坡印亭矢量,计算,应用",
            "c_periodical": "制造业自动化",
            "c_title": "分析坡印亭矢量在实际问题中的应用",
            "e_periodical": "MANUFACTURING AUTOMATION",
            "e_title": "The application on the analysis about the poynting vector in modern scientific life",
            "fund": "",
            "indexid": "2010, 32(1)",
            "time": "2010年3月30日",
            "units": "江西电力职业技术学院,南昌,330032",
            "url": "http://d.old.wanfangdata.com.cn/Periodical/zzyzdh201001050"
          },
          {
            "id": "5de33f210031bb949dbd6832",
            "c_abstract": "阐述了ControlLosix冗余PLC系统在九华街污水处理系统中的应用.",
            "c_author": "石磊",
            "c_keywords": "ControlLogix冗余PLC,污水处理",
            "c_periodical": "制造业自动化",
            "c_title": "PLC系统在九华街污水处理系统的应用",
            "e_periodical": "MANUFACTURING AUTOMATION",
            "e_title": "The application of PLC system on Jiuhuajie wastewater treatment system",
            "fund": "",
            "indexid": "2010, 32(1)",
            "time": "2010年3月30日",
            "units": "北京机械工业自动化研究所,北京,100120",
            "url": "http://d.old.wanfangdata.com.cn/Periodical/zzyzdh201001046"
          }
        ],
        recommend_experts: [
          {"name": "金茂忠", "unit": "北京航空航天大学"}
        ]
      }
    },
    methods: {
      split_keywords(str) {
        return str.split(',')
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
      }
    }
  }
</script>
