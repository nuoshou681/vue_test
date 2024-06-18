<template>
    <div>
        <div class="card">
            <!-- 表格 -->
            <el-table :data="Courses">
                <el-table-column prop="id" label="课程编号" width="200">
                </el-table-column>
                <el-table-column prop="courseName" label="课程名称" width="200">
                </el-table-column>
                <el-table-column prop="teacher" label="教师" width="200">
                </el-table-column>
                <el-table-column prop="week" label="时长周数" width="200">
                </el-table-column>
                <el-table-column prop="address" label="上课地点" width="200">
                </el-table-column>
                <el-table-column label="操作" width="120">
                    <template slot-scope="scope">
                        <el-button  type="danger" size="small" @click="dropCourse(scope.row)">
                            退课
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
    import { chooseCourse,getSelectedCourse,returnCourse } from '@/api/api.js'
    export default {
        name: 'Choose',
        data() {
            return {
                // 所有已经选课的课程信息
                Courses: [],
                // 本次等待选择的课程信息
                waitCourses: [],
            }
        },
        methods: {
            chooseCourse() {
                if (this.waitCourses.length === 0) {
                    this.getSelectedCourse()
                    console.log(this.Courses)
                    return;
                }
                const data = this.waitCourses.map(item => {
                    return {
                        userId: this.$store.state.userInfo.id,
                        courseId: item.id
                    }
                });
                chooseCourse(data).then(res=>{
                    console.log(res)
                    this.getSelectedCourse()
                })
            },
            // 获取当前用户已经选过的所有课程
            getSelectedCourse() {
                const data = {
                    id: this.$store.state.userInfo.id
                }
                getSelectedCourse(data).then(res=>{
                    console.log(res)
                    this.Courses = res
                })
            },
            dropCourse(course) {
                // 将本条记录从Course数组去除,不在渲染
                this.Courses = this.Courses.filter(item => item.id !== course.id)
                // 向后端发送请求,删除该课程
                const data = {
                    userId: this.$store.state.userInfo.id,
                    courseId: course.id
                }
                returnCourse(data).then(res=>{
                    console.log(res)
                })
            }
        },
        mounted() {
            // 本次等待选择的课程信息
            this.waitCourses = this.$store.state.choosedCourses;
            // 选课
            this.chooseCourse();
            // 清空本次等待选择的课程信息
            this.$store.dispatch('SetChoosedCourses',[]);
        },
        computed: {
        }
    }
</script>