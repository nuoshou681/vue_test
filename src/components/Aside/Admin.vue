<template>
  <el-menu>
    <el-menu-item>
      <router-link to="/content/componenta">
        添加业主
      </router-link>
    </el-menu-item>
    <el-menu-item>
      <router-link to="/content/componentb">
        查询信息
      </router-link>
    </el-menu-item>
    <el-menu-item>
        更新信息
    </el-menu-item>
    <el-menu-item>
        删除信息
    </el-menu-item>
  </el-menu>
</template>
<script>
  export default {
    name: 'Admin',
  }
</script>
<style>
  .el-menu {
    user-select: none;
  }
</style>