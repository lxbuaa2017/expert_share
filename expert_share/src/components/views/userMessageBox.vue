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
                    <Content :style="{padding: '0px', minHeight: '400px', background: '#fff'}">
                      <messageBox @refresh="refresh" v-if="showFlag == true" :messageList="messageList" :username="username" :nowName="nowName"></messageBox>
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
  import messageBox from "../userMessageBox/messageBox";
  import {getCookie} from "../../assets/js/cookie";
  export default {
    name: "userMessageBox",
    created() {
      this.username = getCookie('username');
      this.$nextTick(()=>{
        this.$axios.get('api/get_chat_list/?name='+this.username).then((res)=>{
          this.messageList=res.data
        })
      });
    },
    data() {
      return {
        username: null,
        messageList: null,
        showFlag: true,
        nowName: null,
      }
    },
    methods: {
      refresh(recName) {
        this.showFlag = false;
        this.nowName = recName;
        this.$nextTick(()=>{
          this.$axios.get('api/get_chat_list/?name='+this.username).then((res)=>{
            this.messageList=res.data
            this.showFlag = true;
          })
        });
      },
    },
    components: {pageHeader, searchBox, userMainpageSider, messageBox},
  }
</script>
