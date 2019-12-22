<template>
  <Layout>
    <Card style="height: 150px" v-for=" (expert, index) in experts" :key="index" :to="{path: '/expertMainPage?name=' + expert.name + '&add=' + expert.location}">
      <Col span=6>
        <Avatar icon="ios-person" size=100 />
      </Col>
      <Col align="left" span=12>
        <h1>{{expert.name}}</h1>
        <br>
        <h2>{{expert.location}}</h2>
      </Col>
      <Col v-if="expert.isFollowed==true" span=6>
        <Button icon="md-heart" @click="disFollow(expert)">已关注&nbsp;&nbsp;&nbsp;&nbsp;</Button>
      </Col>
      <Col v-else span=6>
        <Button icon="md-heart-outline" @click="follow(expert)">关注专家</Button>
      </Col>
    </Card>
  </Layout>
</template>

<script>
  export default {
    name: "showFollows",
    props:['experts'],
    methods: {
      disFollow: function (i) {
        i.isFollowed = false;
      },
      follow: function (i) {
        i.isFollowed = true;
      }
    }
  }
</script>
