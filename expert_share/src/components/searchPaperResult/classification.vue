<template>
  <Menu active-name="1-2" :open-names="['1']">
    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-filing" />
        年份
      </template>
      <MenuItem name="1-1">Option 5</MenuItem>
      <MenuItem name="1-2">Option 6</MenuItem>
      <Submenu name="2">
        <template slot="title">Submenu</template>
        <MenuItem name="2-1">Option 7</MenuItem>
        <MenuItem name="2-2">Option 8</MenuItem>
      </Submenu>
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
</template>

<script>
    export default {
        name: "classification"
    }
</script>

<style scoped>

</style>
