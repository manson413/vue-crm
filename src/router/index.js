import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Categories from '../views/Categories.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home
}, {
    path: '/login',
    component: Login
}, {
    path: '/categories',
    component: Categories
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router