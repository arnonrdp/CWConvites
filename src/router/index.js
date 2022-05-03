import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/pedido",
    name: "pedido",
    component: () => import("../views/Pedido.vue"),
  },
  {
    path: "/catalogo",
    name: "catalogo",
    component: () => import("../views/Catalogo.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
