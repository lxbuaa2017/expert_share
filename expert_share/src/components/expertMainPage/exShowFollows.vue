<template>
  <Layout>
    <Card padding=20 style="height: 150px" v-for="expert in experts" :key="experts">
        <Avatar icon="ios-person" size=30 />
        {{expert.name}}
        <br>
        {{expert.location}}
      <br/>
      <Col v-if="expert.isFollowed==true" span=6>
        <Button icon="md-heart"  @click="disFollow(expert)" size="small">已关注&nbsp;&nbsp;&nbsp;&nbsp;</Button>
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
