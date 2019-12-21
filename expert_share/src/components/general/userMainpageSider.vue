<template>
  <Content>
    <Menu theme="light" width="auto" :open-names="['1']">
      <Submenu name="1">
        <template slot="title">
          个人中心
        </template>
        <MenuItem name="1-1" :to="{path: '/userMainpage'}">
          个人中心
        </MenuItem>
        <MenuItem name="1-2" :to="{path: '/userFavorites'}">
          我的收藏
        </MenuItem>
        <MenuItem name="1-3" :to="{path: '/userFollows'}">
          我的关注
        </MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          管理平台
        </template>
        <MenuItem name="2-1" :to="{path: '/userMessageBox'}">
          私聊
        </MenuItem>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
          其他
        </template>
        <MenuItem name="3-1">
          <div  v-on:click="contact">联系我们</div>
        </MenuItem>
      </Submenu>
    </Menu>
  </Content>
</template>

<script>
    export default {
      name: "userMainpageSider",
      methods: {
        contact() {
          alert('邮箱：webmaster@expertplatform.com')
        }
      }
    }
</script>

<style scoped>

</style>
