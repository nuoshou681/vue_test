<template>
    <el-header>
      <span class="header-title">智慧微校园系统</span>
      <nav class="header-nav">
        <span>{{ form.username }}</span>
      </nav>
    </el-header>
  </template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      form: {
        username: '李同学',
        password: '',
        identity: '' // 身份 管理员待定
      }
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
  .header-nav {
    margin-left: auto;
  }
</style>