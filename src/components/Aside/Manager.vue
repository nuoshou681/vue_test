<template>
  <el-menu>
    <el-menu-item>
      <router-link to="/content/componenta">
        耗水耗电量填写
      </router-link>
    </el-menu-item>
    <el-menu-item>
      <router-link to="/content/componentb">
        耗水耗电量更改
      </router-link>
    </el-menu-item>
    <el-menu-item>
      生成水电费账单
    </el-menu-item>
    <el-menu-item>
      生成水电费账单
    </el-menu-item>
    <el-menu-item>
      耗水耗电量查看
    </el-menu-item>
    <el-menu-item>
      委派维修人员
    </el-menu-item>
    <el-menu-item>
      清除已完成业务
    </el-menu-item>
    <el-menu-item>
      物业费用修改
    </el-menu-item>
    <el-menu-item>
      物业维修费用填写
    </el-menu-item>
  </el-menu>
</template>
<script>
  export default {
    name: 'Manager',
  }
</script>
<style>
  .el-menu {
    user-select: none;
  }
</style>