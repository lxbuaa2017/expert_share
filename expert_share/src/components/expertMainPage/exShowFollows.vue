<template>
  <Layout>
    <Card style="height: 120px" v-for="(expert,index) in experts" :key="index">
      <Col span="6">
        <Col span="1"><div style="padding-top: 5px"><Avatar icon="ios-person" size=30 /></div></Col>
      </Col>
      <Col span="18">
        <p align="left" style="color: #a71d5d;font-size: large">{{expert.autherName}}</p>
        <p align="left" style="color: #0086b3">{{expert.unitName}}</p>
        <Col span="1">
          <div v-if="expert.autherID=='1'">
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
  import searchBox from "../general/searchBox";

  export default {
    name: "exShowFollows",
    props:['experts','user_id'],
    methods: {
      disFollow: function (i) {
        i.autherID='0';
        this.$axios.post('api/go_disfollow_by_user_id_and_author_and_unit/',json_str,{headers:{'content-type':'application/json'},user_id:this.user_id,author:i.autherName,unit:i.unitName,withCredentials:true}).then((res) => {

        });
      },
      follow: function (i) {
        i.autherID='1';
        this.$axios.post('api/go_follow_by_user_id_and_author_and_unit/',json_str,{headers:{'content-type':'application/json'},user_id:this.user_id,author:i.autherName,unit:i.unitName,withCredentials:true}).then((res) => {

        });
      }
    }
  }
</script>
