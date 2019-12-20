<template>
  <div>
    <h1>搜索结果</h1>
    <div v-if="showFlag == true">
      <Card v-for="(expert, index) in expertList" :key="index">
        <h2 @click="change(expert)">{{expert.author}}</h2>
        <h2 @click="change(expert)">{{expert.unit}}</h2>
      </Card>
    </div>
  </div>
</template>

<script>
  import pageHeader from "../general/pageHeader";
  export default {
    name: "searchExpert",
    data() {
      return {
        showFlag: false,
        expertList: [],
      }
    },
    created() {
      this.$nextTick(()=> {
        this.$axios.get('api/get_experts_by_author?author='+this.$route.query.name).then((res) => {
          this.expertList = res.data;
          this.showFlag = true;
        })
      });
    },
    methods: {
      change(expert) {
        this.$router.push({path: '/expertMainPage', query: {name: expert.author, add: expert.unit}});
      }
    },
    components: {pageHeader}
  }
</script>
