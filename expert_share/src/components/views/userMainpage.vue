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
              <searchBox></searchBox>
            </Row>
            <Row>
              <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                  <Menu theme="light" width="auto" :open-names="['1']">
                    <Submenu name="1">
                      <template slot="title">
                        个人中心
                      </template>
                      <MenuItem name="1-1">
                        <div @click="to(0)">
                          个人中心
                        </div>
                      </MenuItem>
                      <MenuItem name="1-2">
                        <div @click="to(1)">
                          我的收藏
                        </div>
                      </MenuItem>
                      <MenuItem name="1-3">
                        <div @click="to(2)">
                          我的关注
                        </div>
                      </MenuItem>
                    </Submenu>
                    <Submenu name="2">
                      <template slot="title">
                        管理平台
                      </template>
                      <MenuItem name="2-1" v-if="userType ==='user'">
                        <div @click="apply">
                          申请成为专家
                        </div>
                      </MenuItem>
                      <MenuItem name="2-2" v-if="userType ==='expert'">
                        我的论文
                      </MenuItem>
                      <MenuItem name="2-3" v-if="userType ==='expert'">
                        我的项目
                      </MenuItem>
                      <MenuItem name="2-4" v-if="userType ==='expert'">
                        我的专利
                      </MenuItem>
                    </Submenu>
                    <Submenu name="3">
                      <template slot="title">
                        其他
                      </template>
                      <MenuItem name="3-1">
                        联系我们
                      </MenuItem>
                    </Submenu>
                  </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                  <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                    <personalCenter v-if="flags[0]"></personalCenter>
                    <myFavorites v-else-if="flags[1]"></myFavorites>
                    <myFollows v-else-if="flags[2]"></myFollows>
                  </Content>
                </Layout>
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
  import personalCenter from "../userMainpage/personalCenter";
  import myFavorites from "../userMainpage/myFavorites";
  import myFollows from "../userMainpage/myFollows";
  export default {
    name: "userMainPage",
    data() {
      return {
        login: true,
        username: 'cxm',
        userType: 'user',
        flags: [1, 0, 0, 0, 0],
      }
    },
    methods: {
      apply: function () {
        this.userType = 'expert';
      },
      to: function (a) {
        this.flags = [0, 0, 0, 0, 0];
        this.flags[a] = 1;
      },
    },
    components: {pageHeader, searchBox, personalCenter, myFavorites, myFollows}
  }
</script>
