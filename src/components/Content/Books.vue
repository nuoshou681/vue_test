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
        <el-button type="primary" round>搜索</el-button>
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
      </el-table>
    </div>
  </div>
</template>
<script>
  import { getBooks } from '@/api/api.js'
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
        tableData: '',
        name: '',
        author: '',
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
      resert() {
        this.name = '';
        this.author = '';
        this.value = '';
      }
    },
    mounted() {
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

  .search-row, .select-row {
  display: flex;
  flex-wrap: wrap; /* 允许元素换行 */
  align-items: center; /* 垂直居中对齐 */
  gap: 10px; /* 元素之间的间隔 */
  }

.search-row {
  margin-bottom: 10px; /* 与下一行的间隔 */
}

</style>