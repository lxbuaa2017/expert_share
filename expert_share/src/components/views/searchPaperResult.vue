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
  <div>
    <div class="layout">
      <Layout>
        <Header :style="{background: '#f5f7f9',paddingTop:'0px'}">
          <el-row style="text-align: left">
            <el-col :span=5><h3>科技专家资源共享平台</h3></el-col>
            <el-col :span=1><a style="font-size: 17px">首页</a></el-col>
            <el-col :span=13>&nbsp;</el-col>
            <el-col :span=5>
              <div style="text-align: right">
                <Dropdown style="text-align: center">
                  <Button type="primary">
                    {{username}}
                    <Icon type="ios-arrow-down"></Icon>
                  </Button>
                  <DropdownMenu v-if="login===true" slot="list">
                    <DropdownItem>个人信息</DropdownItem>
                    <DropdownItem>收藏</DropdownItem>
                    <DropdownItem>关注</DropdownItem>
                    <DropdownItem>粉丝</DropdownItem>
                    <DropdownItem>退出账户</DropdownItem>
                  </DropdownMenu>
                  <DropdownMenu v-else slot="list">
                    <DropdownItem>登录</DropdownItem>
                    <DropdownItem>注册</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </el-col>
          </el-row>
        </Header>
        <Layout :style="{padding: '0 50px'}">
          <Sider hide-trigger :style="{background: '#fff'}">
            <classification></classification>
          </Sider>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <div style="padding-left: 22px;padding-top: 0px">
              <Input search enter-button="Search"  type="text" placeholder="Enter something..."
                     @on-search="handleQuery($event)" size="large"/>
              <br/>
            </div>
            <paper_result v-if="paper_result_flag==true" ref="paper_result" :page="page_id" :keyword="input_keyword" :papers="papers"></paper_result>
            <Page :total="100" :page-size="10" :current="page_id" show-elevator show-total @on-change="page_change"/>
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
  import test from "./test";
  export default {
    name:'searchPaperResult',
    inject:['reload'],
    created(){
      this.input_keyword=window.localStorage.getItem("input_keyword")
      //this.paper...
      //在刷新前保存信息，刷新后取出
      // this.$axios.get('/api/get_papers').then((res)=>{
      //     this.papers=res.data
      // })
      // get_papers
      window.localStorage.removeItem("input_keyword")
      this.page_change(1)
    },
    methods:{
      page_change($event){
        this.page_id=$event
        this.paper_result_flag=false
        this.$nextTick(()=>{
          // this.input_keyword='基于'
          let self=this
          ///api/get_paper_by_page?page='+self.page_id+'&keyword='+self.input_keyword
          this.$axios.get('api/get_papers/?page='+self.page_id+'&keyword='+self.input_keyword).then((res)=>{
            console.log(res.data)
            this.papers=res.data
          })
          this.paper_result_flag=true
        })
      },
      handleQuery($event){
        self.input_keyword=$event
        window.localStorage.setItem("input_keyword",self.input_keyword)
        //this.aixos...得到后端返回的论文，存到localStorage中，然后刷新（在index的刷新机制中也是这样，把input_keyword和papers存到localStorage，然后路由跳过来）
        // location.reload()
        this.$refs.paper_result.reload()
      }
    },
    data(){
      return {
        paper_result_flag:true,
        page_id:1,
        login:true,
        username:'lx',
        year:[2019,2018,2017],
        author:['张伟','向华强'],
        input_keyword:'软件工程',
        papers:[
          { "id" : "5de33f210031bb949dbd6831", "c_abstract" : "针对微小型导航系统对导航计算机处理能力、体积、功耗及适应性等方面的要求,以捷联导航系统为例,使用SOPC方法在FPGA上设计嵌入式高性能导航计算机系统,采用嵌入式实时操作系统(RTOS)作为软件开发平台,重点研究了系统硬件平台的设计以及系统应用程序的开发.测试结果表明该系统在姿态、位置、速度等参数误差满足要求,具有很高的实用价值.", "c_author" : "李良仁,汪临伟,彭雪峰", "c_keywords" : "SOPC,FPGA,导航计算机,RTOS", "c_periodical" : "制造业自动化", "c_title" : "基于SOPC的嵌入式导航计算机设计", "e_periodical" : "MANUFACTURING AUTOMATION", "e_title" : "Design of the embedded navigation computer based on SOPC", "fund" : "", "indexid" : "2010, 32(1)", "time" : "2010年3月30日", "units" : "九江职业技术学院电气工程系,九江,332007", "url" : "http://d.old.wanfangdata.com.cn/Periodical/zzyzdh201001047" }
        ]
      }
    },
    components: {paper_result, classification}
  }
</script>
