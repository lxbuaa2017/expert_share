<template>
  <div>这里是paper</div>
</template>

<script>
    export default {
        name: "paper",
        created() {
            alert(this.$route.query.paper_id)
        }
    }
</script>

<style scoped>

</style>
