<template>
  <Layout>
    <Card style="height: 120px" v-for="(expert,index) in experts" :key="index">
      <Col span="6">
        <Col span="1"><div style="padding-top: 5px"><Avatar icon="ios-person" size=30 /></div></Col>
      </Col>
      <Col span="18">
        <p align="left" style="color: #a71d5d;font-size: large">{{expert.name}}</p>
        <p align="left" style="color: #0086b3">{{expert.location}}</p>
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
