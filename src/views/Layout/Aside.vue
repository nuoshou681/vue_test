<template>
  <el-aside width="250px" style="background-color:#FFFFFF">
    <el-menu :default-openeds="['2','3']">
      <el-menu-item-group>
        <el-menu-item index="1-1">
          <i class="el-icon-house"></i>
          <router-link to="/content/home">个人信息</router-link>
        </el-menu-item>
      </el-menu-item-group>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-reading"></i>图书管理</template>
        <el-menu-item-group title=" 图书">
          <el-menu-item index="2-1">
            <router-link to="/content/books">图书信息</router-link>   
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link to="/content/borrow">借阅信息</router-link>
          </el-menu-item>
          <el-menu-item index="2-3">
            <router-link to="/content/review">精彩书评</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-data-board"></i>选课管理</template>
        <el-menu-item-group title=" 课程">
          <el-menu-item index="3-1">
            <router-link to="/content/course">课程信息</router-link>  
          </el-menu-item>
          <el-menu-item index="3-2">
            <router-link to="/content/choose">选课信息</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<script>
  export default {
    name: 'Header',
    components: {
    },
    // 计算属性拿到vuex中用户数据
    computed: {
      form() {
        return this.$store.state.loginform
      }
    }
  }
</script>
<style>
  .el-aside {
    user-select: none;
    background-color: #ECF5FF;
    height: 89vh;
  }
</style>