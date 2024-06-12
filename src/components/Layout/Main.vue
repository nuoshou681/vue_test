<template>
    <el-main>
      <p>这是main的渲染{{ userInfo.username }}</p>
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