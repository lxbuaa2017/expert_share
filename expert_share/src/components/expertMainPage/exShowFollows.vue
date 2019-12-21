<template>
  <Layout>
    <Card style="height: 120px" v-for="(expert,index) in experts" :key="index">
      <Col span="6">
        <Col span="1">
          <div style="padding-top: 5px">
            <Avatar icon="ios-person" size="30"/>
          </div>
        </Col>
      </Col>
      <Col span="18">
        <p>
          <el-link style="color: #a71d5d;font-size: large;text-align: left" :underline="false" v-on:click="openExpertPage(expert.autherName, expert.unitName)">{{expert.autherName}}</el-link>
        </p>
        <p style="color: #0086b3;text-align: left">{{expert.unitName}}</p>
        <!--Col span="1">
          <div v-if="expert.autherID=='1'">
            <Button icon="md-heart"  @click="disFollow(expert)" size="small">已关注&nbsp;&nbsp;&nbsp;&nbsp;</Button>
          </div>
          <div v-else>
            <Button icon="md-heart-outline" @click="follow(expert)" size="small">关注专家</Button>
          </div>
        </Col-->
      </Col>
    </Card>
  </Layout>
</template>

<script>
  import searchBox from "../general/searchBox";

  export default {
    name: "exShowFollows",
    props: ['experts', 'user_id'],
    methods: {
      openExpertPage(name, unit) {
        this.$router.push('/expertMainPage/?name=' + name + '&add=' + unit)
        location.reload()
      }
    }
  }
</script>
