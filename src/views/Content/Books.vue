<template>
  <div>
    <div class="card-form">

      <div class="search-row">
        <el-input v-model="name" placeholder="书名" class="search-input"></el-input>
        <el-input v-model="author" placeholder="作者" class="search-input"></el-input>
      </div>

      <div class="search-row">
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-button type="primary" round @click="searchBook">搜索</el-button>
        <el-button type="success" round @click="resert">重置</el-button>
        <el-button type="info" round>更多</el-button>
      </div>

    </div>

    <div class="card">
      <el-table :data="tableData">
        <el-table-column prop="id" label="图书编号" width="140">
        </el-table-column>
        <el-table-column prop="name" label="书名" width="120">
        </el-table-column>
        <el-table-column prop="author" label="作者">
        </el-table-column>
        <el-table-column prop="price" label="定价">
        </el-table-column>
        <el-table-column prop="introduction" label="书评">
        </el-table-column>
        <el-table-column prop="free" label="库存余量">
        </el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button v-if="!borrowedStatus[scope.row.id]" type="primary" size="small"
              @click="addBorrow(scope.row)">添加借阅</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  import { getBooks, searchBook } from '@/api/api.js'
  import { borrowedBooks } from '@/store/store.js'
  export default {
    name: 'Books',
    data() {
      const item = {
        id: '',
        name: '',
        author: '',
        price: '',
        introduction: '',
        free: ''
      };
      return {
        tableData: [],      // 当前图书列表
        borrowedBooks: [],  // 借阅列表 要存入 Vuex
        borrowedStatus: {}, // 借阅状态
        name: '',
        author: '',
        free: '',
        options: [
          {
            value: '选项1',
            label: '还有库存'
          }, {
            value: '选项2',
            label: '没有库存'
          }
        ],
        value: ''
      }
    },
    methods: {
      // 重置搜索条件
      resert() {
        this.name = '';
        this.author = '';
        this.value = '';
      },
      // 添加借阅
      addBorrow(row) {
        //检测是否有库存
        if (row.free === 0) {
          alert('这本书没有库存');
          return;
        }
        // 检查这本书是否已经被添加过，避免重复添加
        if (!this.borrowedBooks.some(book => book.id === row.id)) {
          this.borrowedBooks.push(row);
          // 可以在这里或其他地方处理 borrowedBooks 数组，例如显示借阅列表或发送到服务器
          console.log('当前借阅的书籍:', this.borrowedBooks);
          // 更新借阅状态
          this.$set(this.borrowedStatus, row.id, true);
        } else {
          // 如果书籍已经被添加，可以在这里给出提示
          console.log('这本书已经添加到借阅列表中');
        }
        // 将借阅列表存入 Vuex
        this.$store.dispatch('SetBorrowedBooks', this.borrowedBooks);
      },
      // 按照条件搜索图书
      searchBook() {
        const searchData = {
          name: this.name,
          author: this.author,
          free: this.free
        };
        searchBook(searchData).then(response => {
          // 处理响应数据
          console.log(response);
          this.tableData = response;
        }).catch(error => {
          // 处理错误
          console.error(error);
        });
      }
    },
    mounted() {
      // 获取图书列表
      getBooks().then(
        response => {
          console.log(response)
          this.tableData = response
        }
      ).catch(
        error => {
          console.log(error)
        }
      )
    }
  }
</script>
<style>
  .search-input {
    width: 200px !important;
    margin-bottom: 20px;
  }

  .card-form {
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
  }

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
  }

  .search-row,
  .select-row {
    display: flex;
    flex-wrap: wrap;
    /* 允许元素换行 */
    align-items: center;
    /* 垂直居中对齐 */
    gap: 10px;
    /* 元素之间的间隔 */
  }

  .search-row {
    margin-bottom: 10px;
    /* 与下一行的间隔 */
  }
</style>