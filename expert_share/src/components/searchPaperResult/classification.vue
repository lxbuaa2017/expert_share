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
    export default {
        name: "classification",
        props:['papers','keyword','paper_result_flag'],
        data(){
            return{
                'year':[2019,2018],
                'author':['王小可','张大拿']
            }
        },
        methods:{
            show_by_year(i){
                this.$axios.get('')
                alert('按年展示 '+i)
            },
            show_by_author(i){
                alert('按作者展示 '+i)
            }
        }
    }
</script>

<style scoped>

</style>
