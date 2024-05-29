import { createRouter, createWebHistory } from 'vue-router'
import FirstView from '@/views/FirstView.vue'
import SecondView from '@/views/SecondView.vue'

// 路由列表
const routes = [
    {
        path: '/first',
        name: 'first',
        component: FirstView
    },
    {
        path: '/second/:uname/:pwd',
        name: 'second',
        component: SecondView
    }
]

// 路由实例
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router