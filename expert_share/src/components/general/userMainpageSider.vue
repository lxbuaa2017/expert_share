<template>
  <Content>
    <Menu theme="light" width="auto" :open-names="['1']">
      <Submenu name="1">
        <template slot="title">
          个人中心
        </template>
        <MenuItem name="1-1">
          <router-link :to="{path: '/userMainpage'}">
            个人中心
          </router-link>
        </MenuItem>
        <MenuItem name="1-2">
          <router-link :to="{path: '/userFavorites'}">
            我的收藏
          </router-link>
        </MenuItem>
        <MenuItem name="1-3">
          <div>
            我的关注
          </div>
        </MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          管理平台
        </template>
        <MenuItem name="2-1" v-if="userType ==='user'">
          <div>
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
  </Content>
</template>

<script>
    export default {
      name: "userMainpageSider",
      data() {
        return {
          userType: 'user',
        }
      },
      methods: {
        apply: function () {
          this.userType = 'expert';
        },
      },
    }
</script>

<style scoped>

</style>
