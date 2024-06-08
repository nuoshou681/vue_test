<template>
    <div>
        <el-form ref="form" class="login-box" :model="form" label-width="100px">
            <h3 class="login-title">物业管理系统</h3>
            <el-form-item label="账户">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="用户">
                <el-radio-group v-model="form.identity" class="login-box-radio">
                  <el-radio label="管理员"></el-radio>
                  <el-radio label="普通业主"></el-radio>
                  <el-radio label="物业代表"></el-radio>
                </el-radio-group>
              </el-form-item>
            <el-form-item>
                <el-button style="margin-right: 50px;" type="primary" @click="onSubmit">登录</el-button>
                <el-button>注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        name: 'Login',
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                    identity: ''
                }
            }
        },
        methods: {
            onSubmit() {
                this.$store.dispatch('SetLoginForm',this.form)
                this.$router.push('/content')
            },
            register(){
                alert('注册')
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
    .login-box-radio {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;

    }
    .login-box-radio .el-radio {
        margin-right: 11px;
    }
</style>