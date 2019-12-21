<template>
  <div>
    <pageHeader></pageHeader>
    <br>
    <el-row>
      <el-input placeholder="请输入搜索内容" v-model="inputText" style="width: 30%;padding-right: 15px"/>
      <el-button type="primary" v-on:click="searchExpert">搜索专家</el-button>
    </el-row>
    <br>
    <Row>
      <Col :span=4>&nbsp;</Col>
      <Col :span=16>
        <h1>搜索结果</h1>
        <div v-if="showFlag == true">
          <Card v-for="(expert, index) in expertList" :key="index">
            <h2 @click="change(expert)">{{expert.author}}</h2>
            <h2 @click="change(expert)">{{expert.unit}}</h2>
          </Card>
        </div>
      </Col>
      <Col :span=4>&nbsp;</Col>
    </Row>
  </div>
</template>

<script>
  import pageHeader from "../general/pageHeader";
  import {delCookie} from "../../assets/js/cookie";
  export default {
    name: "searchExpert",
    data() {
      return {
        showFlag: false,
        expertList: [],
        inputText: '',
        username: '游客'
      }
    },
    created() {
      this.$nextTick(()=> {
        this.$axios.get('api/get_experts_by_author/?author='+this.$route.query.name).then((res) => {
          this.expertList = res.data;
          this.showFlag = true;
        })
      });
    },
    methods: {
      change(expert) {
        this.$router.push({path: '/expertMainPage', query: {name: expert.author, add: expert.unit}});
      },
      search() {
        window.localStorage.setItem("input_keyword", this.inputText)
        this.$router.push('/searchPaperResult')
      },
      searchExpert() {
        this.$router.push('/searchExpert?name=' + this.inputText)
      }
    },
    components: {pageHeader}
  }
</script>
