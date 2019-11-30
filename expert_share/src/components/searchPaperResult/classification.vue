<template>
  <div>
  <Menu active-name="1-2" :open-names="['1']">
    <Submenu name="1" v-for="i in year" :key="i">
      <template slot="title">
        <Icon type="ios-filing" />
        年份
      </template>
      <MenuItem name=i>i</MenuItem>
    </Submenu>
    <Submenu name="3">
      <template slot="title">
        <Icon type="ios-cog" />
        作者
      </template>
      <MenuItem name="3-1">Option 9</MenuItem>
      <MenuItem name="3-2">Option 10</MenuItem>
      <MenuItem name="3-3">Option 11</MenuItem>
      <MenuItem name="3-4">Option 12</MenuItem>
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
