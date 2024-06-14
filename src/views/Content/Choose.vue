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
    import { choosedCourses } from '@/store/store.js'
    import { chooseCourse,returnCourse } from '@/api/api.js'
    export default {
        name: 'Choose',
        data() {
            return {
                // 选课信息
                Courses: [],
                CoursesStatus: {}
            }
        },
        methods: {
            // 选择课程
            chooseCourse() {
                // 调用API
                const userid = this.$store.state.userInfo.id;
                const data = this.choosedCourses.map(item => {
                    return {
                        userId: userid,
                        courseId: item.id,
                    }
                })
                // 调用API 选择课程
                chooseCourse(data).then(res => {
                    console.log('该用户已经选择的课程信息')
                    console.log(res)
                })
            },
            // 退课
            dropCourse(course) {
                this.Courses = this.Courses.filter(item => item.id !== course.id);
                this.$store.dispatch('SetChoosedCourses', this.Courses)
                // 调用API 退课
                const data = {
                    userId: this.$store.state.userInfo.id,
                    courseId: course.id
                }
                console.log(data)
                returnCourse(course).then(res => {
                    console.log('退课成功')
                })
            }
        },
        mounted() {
            this.Courses = this.$store.state.choosedCourses
        },
        computed: {
            choosedCourses() {
                return this.$store.state.choosedCourses
            }
        }
    }
</script>