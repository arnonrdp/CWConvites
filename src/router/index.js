import { createRouter, createWebHistory } from 'vue-router'
import AdminView from '../views/AdminView.vue'
import HomeVue from '../views/HomeVue.vue'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/',
    alias: '/home',
    component: HomeVue
  },
  {
    path: '/admin',
    component: AdminView,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
