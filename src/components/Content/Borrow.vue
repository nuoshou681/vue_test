<template>
  <div>
    <!-- 测试vuex内容 -->
    <!-- <p>登录状态{{ isLoginedIn }}  借阅{{ activeIndex }}</p> -->
    <!-- 状态栏卡片 -->
    <div class="card">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">借阅书籍表</el-menu-item>
        <el-menu-item index="2">借阅记录</el-menu-item>
        <el-menu-item index="3">待归还书籍</el-menu-item>
      </el-menu>
    </div>
    <!-- 借阅表卡片 -->
    <div class="card" v-if="activeIndex=='1'">
      <!-- 表格 -->
      <el-table :data="borrowedBooks" style="width: 100%">
        <el-table-column prop="name" label="书名" width="170"></el-table-column>
        <el-table-column prop="author" label="作者" width="160"></el-table-column>
        <el-table-column prop="price" label="价格" width="160"></el-table-column>
        <el-table-column prop="introduction" label="介绍" width="160"></el-table-column>
        <el-table-column prop="free" label="库存余量" width="160"></el-table-column>
        <el-table-column label="借阅时间" width="170">
          <template slot-scope="scope">
            {{ new Date().toLocaleDateString() }}
          </template>
        </el-table-column>
        <el-table-column label="时长" width="120">
          <template slot-scope="scope">
            <p>30天</p>
          </template>
        </el-table-column>
      </el-table>
      <!-- 按钮 -->
      <div class="button-container">
        <el-button type="primary" @click="updateBorrowReturn">确定借阅</el-button>
        <el-button @click="cancelSubscription">取消借阅</el-button>
      </div>
    </div>
    <!-- 还书卡片 -->
    <div class="card" v-if="activeIndex=='2'">
      <el-table :data="lentHistory" style="width: 100%">
        <el-table-column prop="name" label="书名" width="170"></el-table-column>
        <el-table-column prop="author" label="作者" width="160"></el-table-column>
        <el-table-column prop="price" label="价格" width="160"></el-table-column>
        <el-table-column prop="introduction" label="介绍" width="160"></el-table-column>
        <el-table-column prop="lent_date" label="借阅时间" width="160"></el-table-column>
        <el-table-column prop="returndate" label="归还时间" width="160"></el-table-column>
      </el-table>
    </div>
    <!-- 归还卡片 -->
    <div class="card" v-if="activeIndex=='3'">
      <el-table :data="unReturnHistory" style="width: 100%">
        <el-table-column prop="id" label="书编号" width="80"></el-table-column>
        <el-table-column prop="name" label="书名" width="160"></el-table-column>
        <el-table-column prop="author" label="作者" width="160"></el-table-column>
        <el-table-column prop="price" label="价格" width="160"></el-table-column>
        <el-table-column prop="introduction" label="介绍" width="180"></el-table-column>
        <el-table-column prop="lent_date" label="借阅时间" width="160"></el-table-column>
        <el-table-column label="时长" width="80">
          <template slot-scope="scope">
            <p>30天</p>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="removeItem(scope.$index)">归还</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  import { borrowedBooks } from '@/store/store.js'
  import { updateBorrowReturn, searchLentHistory, searchUnReturnHistory, returnBook } from '@/api/api.js'
  export default {
    name: 'Borrow',
    data() {
      return {
        // 状态栏默认选项
        activeIndex: '1',
        // 借阅书籍列表信息
        name: '',
        author: '',
        price: '',
        introduction: '',
        free: '',
        //已经归还借阅记录
        lentHistory: [],
        //未归还借阅记录
        unReturnHistory: []
      }
    },
    // 钩子函数
    mounted() {
      // 查询用户的借阅记录
      this.searchLentHistory();
      // 查询用户未归还的书籍
      this.searchUnReturnHistory();
    },
    // 方法
    methods: {
      // 状态栏选择
      handleSelect(key, keyPath) {
        this.activeIndex = key;
      },
      // 取消借阅, 将表格清空
      cancelSubscription() {
        this.$store.dispatch('ClearBorrowedBooks').then(() => {
          console.log('清空借阅书籍成功')
          console.log(this.borrowedBooks)
        })
      },
      // 确定借阅
      updateBorrowReturn() {
        // 调用API
        const userid = this.$store.state.userInfo.id;
        const data = this.borrowedBooks.map(item => {
          return {
            userId: userid,
            bookId: item.id,
          }
        })
        updateBorrowReturn(data).then(res => {
          console.log(res)
          // 清空借阅表
          this.cancelSubscription();
          // 查询用户的借阅记录
          this.searchLentHistory();
        })
      },
      // 查询用户的借阅记录
      searchLentHistory() {
        const user = this.$store.state.userInfo;
        searchLentHistory(user).then(res => {
          console.log("借阅记录")
          console.log(res)
          this.lentHistory = res;
        })
      },
      // 查询用户未归还的书籍
      searchUnReturnHistory() {
        const user = this.$store.state.userInfo;
        searchUnReturnHistory(user).then(res => {
          console.log("未归还记录")
          console.log(res)
          this.unReturnHistory = res;
        })
      },
      // 归还书籍
      removeItem(index) {
        const data = {
          userId: this.$store.state.userInfo.id,
          bookId: this.unReturnHistory[index].id
        }
        // 移除指定索引的元素
        this.unReturnHistory.splice(index, 1);
        // 调用API
        returnBook(data).then(res => {
          console.log(res)
          // 查询用户的借阅记录
          this.searchLentHistory();
        })
      }
    },
    // 计算属性
    computed: {
      // 从store中获取借阅表书籍信息
      borrowedBooks() {
        return this.$store.state.borrowedBooks;
      },
      // 从store中获取登录状态
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
    justify-content: flex-start;
    /* 使按钮靠左排布 */
    margin: 20px 0;
    /* 与表格之间的距离 */
  }
</style>