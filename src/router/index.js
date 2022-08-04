// 导入vue-router
import { createRouter, createWebHashHistory } from 'vue-router'

// 创建路由表
const routes = [
  {
    path: '/index',
    name: 'index',
    alias: '/',
    component: () => import('@/views/Index.vue')
  }
]

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router