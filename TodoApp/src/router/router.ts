import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const Routes:Array<RouteRecordRaw> =[
    {
        path:'/',
        name:'home',
        component: function(){
            return import('../pages/home.vue')
        }
    },
    {
        path:'/edit',
        name:'Edit',
        component: function(){
            return import('../pages/edit.vue')
        }
    },
    {
        path: '/add',
        name: 'Add',
        component: function(){
            return import ('../pages/add.vue')
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes : Routes
})

export default router