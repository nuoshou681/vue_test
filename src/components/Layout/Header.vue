<template>
    <el-header>
      <span class="header-title">物业管理系统</span>
      <!-- 这个地方实现点击折叠和展开, 使用vuex -->
      <i class="el-icon-s-fold"></i>
      <nav class="header-nav">
      </nav>
    </el-header>
  </template>
<script>
export default {
  name: 'Header',
}
</script>
<style>
  .el-header {
    display: flex;
    align-items: center;
    background-color: #409EFF;
    line-height: 100px;
    user-select: none;
  }
  .header-title {
    font-size: 24px;
    color: #fff;
    margin-left: 20px;
  }
  .el-icon-s-fold {
    font-size: 24px;
    color: #fff;
    margin-left: 50px;
  }
  .header-nav {
    margin-left: auto;
  }
  .header-nav a {
    color: #fff;
    margin: 0 10px;
  }
</style>