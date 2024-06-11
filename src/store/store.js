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
        userInfo: {}
    },
    
    mutations: {
        SetUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        }
    },
    
    actions: {
        SetUserInfo({commit}, userInfo) {
            commit('SetUserInfo', userInfo);
        }
    },
});
// 导出store对象
export default store;