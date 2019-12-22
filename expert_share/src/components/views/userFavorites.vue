<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
</style>
<template>
  <div class="layout">
    <Layout>
      <pageHeader></pageHeader>
      <Content :style="{background: '#f5f7f9',paddingTop:'0px'}">
        <Row>
          <Col :span=4>&nbsp;</Col>
          <Col :span=16>
            <Row>
              <Layout>
                <Row>
                  <Col span=4>
                    <userMainpageSider></userMainpageSider>
                  </Col>
                  <Col span=1>&nbsp;</Col>
                  <Col span=19>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                      <paper_result ref="paper_result" :page="page_id" :keyword="keyword" :papers="papers"></paper_result>
                    </Content>
                  </Col>
                </Row>
              </Layout>
            </Row>
          </Col>
          <Col :span=4>&nbsp;</Col>
        </Row>
      </Content>
      <Footer class="layout-footer-center">2019 &copy; kunkun.inc</Footer>
    </Layout>
  </div>
</template>

<script>
  import pageHeader from "../general/pageHeader";
  import searchBox from "../general/searchBox";
  import userMainpageSider from "../general/userMainpageSider";
  import paper_result from "../searchPaperResult/paper_result";
  import {getCookie, setCookie} from "../../assets/js/cookie";
  export default {
    name: "userFavorites",
    inject: ['reload'],
    created(){
      this.username = getCookie('username');
      this.$nextTick(()=>{
        this.$axios.get('api/get_favorites/?name='+this.username).then((res)=>{
          console.log(res.data)
          let t = res.data
            this.papers=res.data
          for(let each in t){
              let o = {}
              o['id']=t[each]['id']
              o['c_author']=t[each]['c_author']
              o['c_keywords']=t[each]['c_keywords']
              o['c_periodical']=t[each]['c_periodical']
              o['c_title']=t[each]['c_title']
              o['e_periodical']=t[each]['e_periodical']
              o['e_title']=t[each]['e_title']
              o['fund']=t[each]['fund']
              // o['_id'].$oid=t[each]['id']
              o['indexID']=t[each]['indexID']
              o['time']=t[each]['time']
              o['units']=t[each]['units']
              o['url']=t[each]['url']
              console.log(o)
              this.papers.push(o)
          }
        })
      })
    },
    data() {
      return {
        keyword:'',
        username: '',
        page_id: 1,
        papers:[
          { "_id" : { "$oid" : "5de33f210031bb949dbd6831" }, "c_abstract" : "针对微小型导航系统对导航计算机处理能力、体积、功耗及适应性等方面的要求,以捷联导航系统为例,使用SOPC方法在FPGA上设计嵌入式高性能导航计算机系统,采用嵌入式实时操作系统(RTOS)作为软件开发平台,重点研究了系统硬件平台的设计以及系统应用程序的开发.测试结果表明该系统在姿态、位置、速度等参数误差满足要求,具有很高的实用价值.", "c_author" : "李良仁,汪临伟,彭雪峰", "c_keywords" : "SOPC,FPGA,导航计算机,RTOS", "c_periodical" : "制造业自动化", "c_title" : "基于SOPC的嵌入式导航计算机设计", "e_periodical" : "MANUFACTURING AUTOMATION", "e_title" : "Design of the embedded navigation computer based on SOPC", "fund" : "", "indexID" : "2010, 32(1)", "time" : "2010年3月30日", "units" : "九江职业技术学院电气工程系,九江,332007", "url" : "http://d.old.wanfangdata.com.cn/Periodical/zzyzdh201001047" }
        ]
      }
    },
    components: {pageHeader, searchBox, userMainpageSider, paper_result},
  }
</script>
