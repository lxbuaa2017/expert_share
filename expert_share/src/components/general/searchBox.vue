<template>
  <div style="padding-left: 22px; padding-top: 0px">
    <Input search enter-button="Search"  type="text" placeholder="Enter something..."
           @on-search="handleQuery($event)" size="large"/>
    <br/>
  </div>
</template>

<script>
    export default {
        name: "searchBox"
    }
</script>

<style scoped>

</style>
