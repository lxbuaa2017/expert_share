<template>
  <Layout>
    <Card padding=20 style="height: 120px" v-for="expert in experts" :key="experts">
      <Col span="6">
        <Col span="1"><div style="padding-top: 5px"><Avatar icon="ios-person" size=30 /></div></Col>
      </Col>
      <Col span="18">
        <h3 align="left" style="color: #a71d5d">{{expert.name}}</h3>
        <p align="left">{{expert.location}}</p>
        <Col span="1">
          <div v-if="expert.isFollowed==true">
            <Button icon="md-heart"  @click="disFollow(expert)" size="small">已关注&nbsp;&nbsp;&nbsp;&nbsp;</Button>
          </div>
          <div v-else>
            <Button icon="md-heart-outline" @click="follow(expert)" size="small">关注专家</Button>
          </div>
        </Col>
      </Col>
    </Card>
  </Layout>
</template>

<script>
  export default {
    name: "exShowFollows",
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
