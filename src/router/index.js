import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Content from '../views/Content.vue'
import ComponentA from '@/components/Content/ComponentA.vue'
import ComponentB from '@/components/Content/ComponentB.vue'
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
                    path: '/content/componenta',
                    name: 'ComponentA',
                    component: ComponentA
                },
                {
                    path: '/content/componentb',
                    name: 'ComponentB',
                    component: ComponentB
                },
            ]
        },

    ]
})