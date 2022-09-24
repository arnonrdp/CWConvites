import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/solicitar-convite',
    component: () => import('../views/Pedido.vue')
  },
  {
    path: '/catalogo',
    component: () => import('../views/Catalogo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
