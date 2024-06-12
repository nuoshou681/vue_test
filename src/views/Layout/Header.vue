<template>
    <el-header>
      <span class="header-title">智慧微校园系统</span>
      <nav class="header-nav">
        <i class="el-icon-user"></i>
        <!-- 将用户名渲染出来 -->
        <span>{{ userInfo.username }}</span>
      </nav>
    </el-header>
  </template>
<script>
export default {
  name: 'Header',
  computed: {
    // 从vuex中获取用户信息
    userInfo() {
      return this.$store.state.userInfo
    }
  }
}
</script>
<style>
  .el-header {
    user-select: none;
    display: flex;
    align-items: center;
    background-color: #409EFF;
    font-size: 24px;
    color: #fff;
  }
  .header-title {

    margin-left: 15px;
  }
  .el-icon-user {
    font-size: 20px;
    margin-right: 10px;
  }
  .header-nav {
    margin-left: auto;
  }
</style>