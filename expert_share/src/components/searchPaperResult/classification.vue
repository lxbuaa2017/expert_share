<template>
  <div>
  <Menu active-name="1-2" :open-names="['1']">
    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-filing" />
        年份
      </template>
      <div v-for="i in this.year" :key="i">
        <MenuItem name=i>{{i}}</MenuItem>
      </div>
    </Submenu>
    <Submenu name="3">
      <template slot="title">
        <Icon type="ios-cog" />
        作者
      </template>
      <div v-for="i in this.author" :key="i">
      <MenuItem name=i>{{i}}</MenuItem>
      </div>
    </Submenu>
  </Menu>
  </div>
</template>

<script>
    export default {
        name: "classification",
        // props:['year','author']
        data(){
            return{
                'year':[2019,2018],
                'author':['王小可','张大拿']
            }
        }
    }
</script>

<style scoped>

</style>
