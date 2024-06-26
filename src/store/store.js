// 导入createStore函数
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 创建store对象
// state用于存储数据
// mutations用于定义方法
// actions用于定义异步方法

const store = new Vuex.Store({
    
    state: {
        // 用户信息
        userInfo: {},
        // 借阅图书信息
        borrowedBooks: [],
        // 是否登录状态
        isLoginedIn: false,
        // 选课信息
        choosedCourses: [],
    },
    
    mutations: {
        // 用户信息
        SetUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
        // 借阅图书信息
        SetBorrowedBooks(state, borrowedBooks) {
            state.borrowedBooks = borrowedBooks;
        },
        // 清除借阅图书信息
        ClearBorrowedBooks(state) {
            state.borrowedBooks = [];
        },
        // 登录状态
        SetLoginStatus(state, isLoginedIn) {
            state.isLoginedIn = isLoginedIn;
        },
        // 选课信息
        SetChoosedCourses(state, choosedCourses) {
            state.choosedCourses = choosedCourses;
        },
        
    },
    
    actions: {
        SetUserInfo({commit}, userInfo) {
            commit('SetUserInfo', userInfo);
        },
        SetBorrowedBooks({commit}, borrowedBooks) {
            commit('SetBorrowedBooks', borrowedBooks);
        },
        SetLoginStatus({commit}, isLoginedIn) {
            commit('SetLoginStatus', isLoginedIn);
        },
        ClearBorrowedBooks({commit}) {
            commit('ClearBorrowedBooks');
        },
        SetChoosedCourses({commit}, choosedCourses) {
            commit('SetChoosedCourses', choosedCourses);
        },
    },
});
// 导出store对象
export default store;