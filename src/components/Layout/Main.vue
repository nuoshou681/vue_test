<template>
    <el-main>
      <p>{{ userInfo.username }}</p>
      <router-view></router-view>
    </el-main>
</template>
<script>
  export default {
    name: 'Main',
    computed: {
      userInfo() {
        return this.$store.state.userInfo
      }
    }
  }
</script>
<style>
  .el-main {
    background-color: #FFFFFF;
  }
</style>