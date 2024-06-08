// 导入createStore函数
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 创建store对象
const store = new Vuex.Store({
    // state用于存储数据
    state() {
        return {
            loginform: {
                username: '',
                password: '',
                identity: ''
            }
        }
    },
    // mutations用于定义方法
    mutations: {
        // 修改loginform的值
        LoginForm(state, loginform) {
            state.loginform = loginform;
        }
    },
    // actions用于定义异步方法
    actions: {
        // 修改loginform的值
        SetLoginForm({ commit }, loginform) {
            commit('LoginForm', loginform);
        }
    },
    // getters用于获取数据
});
// 导出store对象
export default store;