<template>
  <div>
    <p>{{ isLoginedIn }}</p>
    <div class="card">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">等待借阅</el-menu-item>
        <el-menu-item index="2">等待归还</el-menu-item>
      </el-menu>
    </div>
    <div class="card">
      <el-table :data="borrowedBooks" style="width: 100%">
        <el-table-column prop="name" label="书名" width="180"></el-table-column>
        <el-table-column prop="author" label="作者" width="180"></el-table-column>
        <el-table-column prop="price" label="价格" width="180"></el-table-column>
        <el-table-column prop="introduction" label="介绍" width="180"></el-table-column>
        <el-table-column prop="free" label="库存余量" width="180"></el-table-column>
      </el-table>
      <div class="button-container">
        <el-button type="primary">确定借阅</el-button>
        <el-button type="danger">取消借阅</el-button>        
      </div>
    </div>
  </div>
</template>
<script>
  import { borrowedBooks } from '@/store/store.js'
  export default {
    name: 'Borrow',
    data() {
      return {
        activeIndex: '1',
        name: '',
        author: '',
        price: '',
        introduction: '',
        free: ''
      }
    },
    computed: {
      borrowedBooks() {
        return this.$store.state.borrowedBooks;
      },
      isLoginedIn() {
        return this.$store.state.isLoginedIn;
      }
    }
  }
</script>
<style>

    .card {
    background-color: white;
    /* 卡片背景颜色 */
    border-radius: 8px;
    /* 圆角 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* 阴影 */
    transition: box-shadow 0.3s ease;
    /* 过渡效果 */
    padding: 20px;
    /* 内边距 */
    margin: 20px 0;
    /* 外边距 */
    user-select: none;
  }
  .button-container {
    display: flex;
    justify-content: flex-start; /* 使按钮靠左排布 */
    margin: 20px 0; /* 与表格之间的距离 */
}
</style>