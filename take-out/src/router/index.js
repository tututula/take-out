/*
* 路由器对象模块
* */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage/HomePage.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order'
import Mine from '../pages/Mine/Mine'
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/homePage',
            component:HomePage
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/order',
            component:Order
        },
        {
            path:'/mine',
            component:Mine
        },
        {
            path:'/',
            redirect:'/homepage'
        }
    ]
})