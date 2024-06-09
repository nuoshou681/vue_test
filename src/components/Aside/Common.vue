<template>
  <el-menu>
    <el-menu-item>
      <router-link to="/content/componenta">
        个人信息
      </router-link>
    </el-menu-item>
    <el-menu-item>
      <router-link to="/content/componentb">
        业务添加
      </router-link>
    </el-menu-item>
    <el-menu-item>
        业务查看
    </el-menu-item>
    <el-menu-item>
      业务状态修改
    </el-menu-item>
    <el-menu-item>
      业务删除
    </el-menu-item>
    <el-menu-item>
      账单查看
    </el-menu-item>
    <el-menu-item>
      小区业务查看
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'Common',
}
</script>
<style>
  .el-menu {
    user-select: none;
  }
</style>