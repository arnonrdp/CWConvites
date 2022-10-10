import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/solicitar-convite',
      name: 'solicitar-convite',
      component: () => import('../views/Pedido.vue')
    },
    {
      path: '/catalogo',
      component: () => import('../views/Catalogo.vue')
    }
  ]
})

export default router
