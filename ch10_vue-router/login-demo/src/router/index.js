import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView'
import MainView from '@/views/MainView'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { auth: true }
  },
  {
    path: '/main',
    name: 'main',
    component: MainView,
    meta: { auth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.meta.auth) {
    if (window.sessionStorage.getItem('user') == null) {
      alert('未登录，无法访问')
      return {
        path: 'login',
        query: { redirect: to.fullPath }
      }
    }
  }
})

export default router
