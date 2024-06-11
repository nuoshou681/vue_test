import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Content from '../views/Content.vue'
import Books from '@/components/Content/Books.vue'
import Borrow from '@/components/Content/Borrow.vue'
import Home from '@/components/Content/Home.vue'
Vue.use(Router)

export default new Router({
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