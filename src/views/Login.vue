<template>
    <div>
        <el-form ref="form" class="login-box" :model="form" label-width="100px">
            <h3 class="login-title">智慧微校园系统</h3>
            <el-form-item label="账户">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <!-- 密码隐藏 -->
                <el-input show-password v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button style="margin-right: 50px;" type="primary" @click="onSubmit">登录</el-button>
                <el-button @click="register">测试</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    // 引入api接口
    import { login, getTest } from '@/api/api.js'
    export default {
        name: 'Login',
        data() {
            return {
                // 表单数据
                form: {
                    username: '',
                    password: '',
                },
                isLoginedIn: false
            }
        },
        methods: {
            onSubmit() {
                login(this.form).then(
                    reponse => {
                        console.log(reponse)
                        if (reponse !== '') {
                            // 登录成功后的逻辑
                            this.isLoginedIn = true
                            this.$message({
                                message: '登录成功',
                                type: 'success'
                            });
                            // 表单数据加入vuex
                            this.$store.dispatch('SetUserInfo', reponse)
                            // 登录状态加入vuex
                            this.$store.dispatch('SetLoginStatus', this.isLoginedIn)
                            // 跳转到content页面
                            this.$router.push('/content')
                        } else {
                            this.$message.error('登录失败,请检查账号密码是否正确');
                        }
                    }
                ).catch(
                    error => {
                        console.log(error)
                    }
                )
                // 清空表单
                this.form.username = ''
                this.form.password = ''
            },
            register() {
                getTest().then(
                    reponse => {
                        console.log(reponse)
                    }
                ).catch(
                    error => {
                        console.log(error)
                    }
                )
            }
        }
    }
</script>
<style>
    .login-box {
        width: 350px;
        margin: 150px auto;
        border: 1px solid #EBEEF5;
        padding-left: -20px;
        padding-right: 50px;
        padding-top: 30px;
        padding-bottom: 30px;
        border-radius: 5px;
        box-shadow: 0 0 10px #EBEEF5;
    }

    .login-title {
        margin-left: 140px;
        font-size: 20px;
        margin-bottom: 20px;
    }
</style>