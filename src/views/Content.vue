<template>
  <div>
    <el-container direction="vertical">
      <Header></Header>
      <el-container>
        <Aside></Aside>
        <Main></Main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import Aside from '@/views/Layout/Aside'
  import Main from '@/views/Layout/Main'
  import Header from '@/views/Layout/Header'
  export default {
    name: 'Content',
    components: {
      Aside,
      Main,
      Header
    },
  }

</script>
<style>

/* 链接样式 */
a,
a.router-link-active,
a:hover {
  text-decoration: none;
  color: inherit; /* 保持链接颜色与其父元素一致 */
}

</style>