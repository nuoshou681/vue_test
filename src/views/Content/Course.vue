<template>
    <div>
        <div>
            <div class="card-form">
                <div class="search-row">
                    <el-input placeholder="输入查询信息" class="search-input" v-model="text"></el-input>
                    <el-select v-model="value" placeholder="请选择" class="course-select">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-button type="primary" icon="el-icon-search" circle @click="searchCourse"></el-button>
                </div>
            </div>

            <div class="card">
                <el-table :data="courseInform">
                    <el-table-column prop="id" label="课程编号" width="160">
                    </el-table-column>
                    <el-table-column prop="courseName" label="课程名称" width="160">
                    </el-table-column>
                    <el-table-column prop="teacher" label="教师" width="160">
                    </el-table-column>
                    <el-table-column prop="week" label="时长周数" width="160">
                    </el-table-column>
                    <el-table-column prop="address" label="上课地点" width="160">
                    </el-table-column>
                    <el-table-column label="操作" width="120">
                        <template slot-scope="scope">
                            <el-button v-if="!choosedStatus[scope.row.id]" type="primary" size="small"
                                @click="addChoosedCourse(scope.row)">添加选课</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script>
    import { getAllCourse, searchCourse, getSelectedCourse } from '@/api/api.js'
    export default {
        name: 'Course',
        data() {
            return {
                // 选课状态
                choosedStatus: {},
                // 课程信息
                courseInform: [],
                // 选课信息
                choosedCourses: [],
                // 下拉框选项
                options: [{
                    value: 'all',
                    label: '课程'
                }, {
                    value: 'id',
                    label: '课程编号'
                }, {
                    value: 'courseName',
                    label: '课程名称'
                }, {
                    value: 'teacher',
                    label: '上课教师'
                }, {
                    value: 'address',
                    label: '上课地点'
                }],
                value: '',
                text: '',
            }
        },
        mounted() {
            // 查询课程信息
            getAllCourse().then(allCourses => {
                const data = {
                    id: this.$store.state.userInfo.id
                }
                getSelectedCourse(data).then(selectedCourses => {
                    // 假设每个课程对象都有一个唯一的id属性
                    const selectedIds = selectedCourses.map(course => course.id);
                    // 过滤掉已选择的课程
                    const filteredCourses = allCourses.filter(course => !selectedIds.includes(course.id));
                    // 更新课程信息
                    this.courseInform = filteredCourses;
                })
            })
        },
        methods: {
            // 搜索课程
            searchCourse() {
                // 所有课程信息
                if (this.value === 'all') {
                    getAllCourse().then(allCourses => {
                        const data = {
                            id: this.$store.state.userInfo.id
                        }
                        getSelectedCourse(data).then(selectedCourses => {
                            // 假设每个课程对象都有一个唯一的id属性
                            const selectedIds = selectedCourses.map(course => course.id);
                            // 过滤掉已选择的课程
                            const filteredCourses = allCourses.filter(course => !selectedIds.includes(course.id));
                            // 更新课程信息
                            this.courseInform = filteredCourses;
                        })
                    })
                    return;
                }
                // 传递参数
                const data = {
                    [this.value]: this.text,
                }
                console.log(data)
                // 按照条件查询课程信息
                searchCourse(data).then(res => {
                    console.log(res)
                    this.courseInform = res
                })
            },
            // 添加选课
            addChoosedCourse(row) {
                // 检查这门课是否已经被添加过，避免重复添加
                if (!this.choosedStatus[row.id]) {
                    this.$set(this.choosedStatus, row.id, true);
                    this.choosedCourses.push(row)
                } else {
                    // 如果课程已经被添加，可以在这里给出提示
                    alert('这门课已经添加到选课列表中')
                }
                this.$store.dispatch('SetChoosedCourses', this.choosedCourses)
            }
        }
    }
</script>
<style>
    .course-select {
        width: 200px;
    }

    .search-input {
        margin: 10px;
        width: 200px;
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
        user-select: none;
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

    .search-row {
        display: flex;
        flex-wrap: wrap;
        /* 允许元素换行 */
        align-items: center;
        /* 垂直居中对齐 */
        gap: 10px;
        /* 元素之间的间隔 */
    }
</style>