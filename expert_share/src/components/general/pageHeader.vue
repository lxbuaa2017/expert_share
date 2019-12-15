<template>
  <Layout>
    <Header :style="{background: '#f5f7f9',paddingTop:'0px'}">
      <Row style="text-align: left">
        <Col :span=4>&nbsp;</Col>
        <Col :span=3><h3>科技专家资源共享平台</h3></Col>
        <Col :span=1><a style="font-size: 17px">首页</a></Col>
        <Col :span=7>&nbsp;</Col>
        <Col :span=5>
          <div v-if="login===true" style="text-align: right">
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
            <Button type="primary">
              登录/注册
            </Button>
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
