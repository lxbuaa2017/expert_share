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
                      <showFollows :experts="experts"></showFollows>
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
  import showFollows from "../userMainpage/showFollows";
  import {getCookie, setCookie} from "../../assets/js/cookie";

  export default {
    name: "userFollows",
    created(){
      this.username = getCookie('username');
      this.$nextTick(()=> {
        this.$axios.get('lx/get_follows/?name='+this.username).then((res) => {
          console.log(res.data);
          this.experts = res.data;
        })
      });
    },
    data() {
      return {
        username: '',
        experts: []
      }
    },
    components: {pageHeader, searchBox, userMainpageSider, showFollows}
    }
</script>
