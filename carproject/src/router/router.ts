import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import homePagwe from '../pages/HomePage.vue'


const Routes:Array<RouteRecordRaw> =[
    {
        path:'/',
        name:'home',
        component:homePagwe
    },
]

const Router = createRouter({
    history: createWebHistory(),
    routes: Routes
})

export default Router