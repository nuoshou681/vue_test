<template>
  <el-aside width="250px" style="background-color: rgb(238, 241, 246)">
    <Admin v-if="form.identity=='管理员'"></Admin>
  </el-aside>
</template>
<script>
  import Admin from '@/components/Aside/Admin.vue'
  import Common from '@/components/Aside/Common.vue'
  import Manager from '@/components/Aside/Manager.vue'
  export default {
    name: 'Header',
    components: {
      Admin,
      Common,
      Manager
    },
    computed: {
      form() {
        return this.$store.state.loginform
      }
    }
  }
</script>
<style>
  .el-aside {
    text-align: center;
  }
</style>