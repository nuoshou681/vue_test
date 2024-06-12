import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Content from '../views/Content.vue'
import Books from '@/views/Content/Books.vue'
import Borrow from '@/views/Content/Borrow.vue'
import Home from '@/views/Content/Home.vue'
import store from '../store/store.js'

Vue.use(Router)

const router = new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            redirect: '/login' //初始界面重定向到/login
        }
        ,{
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/content',
            name: 'Content',
            component: Content,
            children: [
                {
                    path: '/content/home',
                    name: 'Home',
                    component: Home
                },
                {
                    path: '/content/books',
                    name: 'Books',
                    component: Books
                },
                {
                    path: '/content/borrow',
                    name: 'Borrow',
                    component: Borrow
                }
            ]
        },

    ]
})
// 使用 router.beforeEach 注册一个全局前置守卫
router.beforeEach((to, from, next) => {
    // 检查用户是否已登录
    const isLoggedIn = store.state.isLoginedIn; 
    if (!isLoggedIn && to.path !== '/login') {
      // 如果用户未登录且目标路由不是登录页面，重定向到登录页面
      next('/login');
    } else if (isLoggedIn && to.path === '/login') {
        // 如果用户已登录且目标路由是登录页面，重定向到内容页面
        // 确保重定向到的路由不会再次触发重定向到自身，避免无限循环
        next('/content');
    } else {
        // 对于其他情况，正常进行路由导航
        next();
    }
});
export default router;