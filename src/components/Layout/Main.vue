<template>
  <div>
    <p>{{ form }}</p>
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>
<script>
  export default {
    name: 'Main',
    computed: {
      form() {
        return this.$store.state.loginform
      }
    }
  }
</script>
<style>
  .el-main {
    background-color: #FFFFFF;
    text-align: center;
    line-height: 100vh;
  }
</style>