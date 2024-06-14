<template>
    <div>
      <el-descriptions direction="vertical" :column="4" border>
        <el-descriptions-item label="用户名">{{user.username}}</el-descriptions-item>
        <el-descriptions-item label="手机号">18123459786</el-descriptions-item>
        <el-descriptions-item label="居住地" :span="2">济南市</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">学校</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
      </el-descriptions>
    </div>
</template>
<script>
export default {
  name: 'Home',
  computed: {
    user(){
      return this.$store.state.userInfo
    }
  }
}
</script>