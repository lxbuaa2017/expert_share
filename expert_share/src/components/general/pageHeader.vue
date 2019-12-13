<template>
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
  </Layout>
</template>

<script>
    export default {
      name: "pageHeader",
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
      }
    }
</script>

<style scoped>

</style>
