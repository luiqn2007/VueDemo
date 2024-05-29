import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView,
    children: [
      {
        path: '',
        component: () => import('@/views/AlldevView.vue')
      },
      {
        path: 'alldev',
        component: () => import('@/views/AlldevView.vue')
      },
      {
        path: 'JavaEE',
        component: () => import('@/views/JavaEEView.vue')
      },
      {
        path: 'SpringBoot',
        component: () => import('@/views/SpringBoot.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
