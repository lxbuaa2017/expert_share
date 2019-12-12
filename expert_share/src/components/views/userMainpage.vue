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
      <Header :style="{background: '#f5f7f9',paddingTop:'0px'}">
        <Row style="text-align: left">
          <Col :span=4>&nbsp;</Col>
          <Col :span=3><h3>科技专家资源共享平台</h3></Col>
          <Col :span=1><a style="font-size: 17px">首页</a></Col>
          <Col :span=7>&nbsp;</Col>
          <Col :span=5>
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
                  <DropdownItem>
                    <div @click="logout()">退出账户</div>
                  </DropdownItem>
                </DropdownMenu>
                <DropdownMenu v-else slot="list">
                  <DropdownItem>登录</DropdownItem>
                  <DropdownItem>注册</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </Col>
          <Col :span=4>&nbsp;</Col>
        </Row>
      </Header>
      <Content :style="{background: '#f5f7f9',paddingTop:'0px'}">
        <Row>
          <Col :span=4>&nbsp;</Col>
          <Col :span=16>
            <Row>
              <div style="padding-left: 22px; padding-top: 0px">
                <Input search enter-button="Search"  type="text" placeholder="Enter something..."
                       @on-search="handleQuery($event)" size="large"/>
                <br/>
              </div>
            </Row>
            <Row>
              <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                  <Menu theme="light" width="auto" :open-names="['1']">
                    <Submenu name="1">
                      <template slot="title">
                        个人中心
                      </template>
                      <MenuItem name="1-1">个人中心</MenuItem>
                      <MenuItem name="1-2">我的收藏</MenuItem>
                      <MenuItem name="1-3">我的关注</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                      <template slot="title">
                        管理平台
                      </template>
                      <MenuItem name="2-1" v-if="userType ==='user'">
                        <div @click="apply">申请成为专家</div>
                      </MenuItem>
                      <MenuItem name="2-2" v-if="userType ==='expert'">我的论文</MenuItem>
                      <MenuItem name="2-3" v-if="userType ==='expert'">我的项目</MenuItem>
                      <MenuItem name="2-4" v-if="userType ==='expert'">我的专利</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                      <template slot="title">
                        其他
                      </template>
                      <MenuItem name="3-1">联系我们</MenuItem>
                    </Submenu>
                  </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                  <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                    <personalCenter></personalCenter>
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
  import personalCenter from "../userMainpage/personalCenter";
  export default {
    name: "userMainPage",
    data() {
      return {
        login: true,
        username: 'cxm',
        userType: 'user'
      }
    },
    methods: {
      logout: function() {
        this.login = false;
      },
      apply: function () {
        this.userType = 'expert';
      }
    },
    components: {personalCenter}
  }
</script>
