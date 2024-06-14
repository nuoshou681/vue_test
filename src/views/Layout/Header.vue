<template>
  <el-header>
    <span class="header-title">智慧微校园系统</span>
    <nav class="header-nav">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <i class="el-icon-user"></i>
          <!-- 将用户名渲染出来 -->
          <span class="header-person">{{ userInfo.username }}</span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">个人信息</el-dropdown-item>
          <el-dropdown-item command="b">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </nav>
  </el-header>
</template>
<script>
  export default {
    name: 'Header',
    methods: {
      // 处理下拉式菜单的点击事件
      handleCommand(command) {
        if (command === 'b') {
          // 退出登录
          this.$store.dispatch('SetLoginStatus', false)
          this.$router.push('/login')
        }else{
          this.$router.push('/content/home')
        }
      }
    },
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
  }

  .header-title {
    margin-left: 15px;
    font-size: 24px;
    color: white;
  }

  .header-person {
    margin-right: 10px;
    font-size: 18px;
  }

  .el-icon-user {
    font-size: 20px;
    margin-right: 10px;
  }

  .header-nav {
    margin-left: auto;
  }
</style>