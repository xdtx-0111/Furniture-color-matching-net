import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
import One from '@/views/one.vue'


const routes = [
  {
    path: '/',
    redirect: '/one'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/one',
    component: One,
    meta: {
      title: '分页'
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
