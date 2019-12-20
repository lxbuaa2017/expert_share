<template>
  <div>
  <Menu active-name="1-2" :open-names="['1']">
    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-filing" />
        年份
      </template>
      <div v-for="i in this.year" :key="i">
        <MenuItem name=i>
          <span @click="show_by_year(i)">{{i}}</span>
        </MenuItem>
      </div>
    </Submenu>
    <Submenu name="3">
      <template slot="title">
        <Icon type="ios-cog" />
        作者
      </template>
      <div v-for="i in this.author" :key="i">
      <MenuItem name=i>
        <span @click="show_by_author(i)">{{i}}</span>
      </MenuItem>
      </div>
    </Submenu>
  </Menu>
  </div>
</template>

<script>
  import searchPaperResult from "../views/searchPaperResult";
    export default {
        name: "classification",
        props:['papers','keyword','paper_result_flag','year','author','by_author','by_year','which_year','which_author','paper_cnt'],
        data(){
            return{
                'year':[2019,2018],
                'author':['王小可','张大拿']
            }
        },
        methods:{
            show_by_year(i){
                this.which_year=i
                //http://localhost:8000/get_paper_total_by_year?keyword=数据挖掘&year=2019
                let self = this
                this.$axios.get('api/get_paper_total_by_year/?keyword='+self.keyword+'&year='+i).then((res)=>{
                    self.paper_cnt = res.data
                })
                this.by_year = true
                this.by_author = false
                searchPaperResult.methods.page_change(1)
                // alert('按年展示 '+i)
            },
            show_by_author(i){

                this.which_author=i
                //http://localhost:8000/get_paper_total_by_year?keyword=数据挖掘&year=2019
                let self = this
                this.$axios.get('api/get_paper_total_by_author/?keyword='+self.keyword+'&author='+i).then((res)=>{
                    self.paper_cnt = res.data
                    alert(this.which_author)
                })
                self.by_year = false
                self.by_author = true
                searchPaperResult.methods.page_change(1)
            }
        }
    }
</script>

<style scoped>

</style>
