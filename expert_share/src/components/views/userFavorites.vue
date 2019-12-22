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
        papers:[]
      }
    },
    components: {pageHeader, searchBox, userMainpageSider, paper_result},
  }
</script>
