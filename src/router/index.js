import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/notre-catalogue',
    name: 'OurCatalog',
    component: () => import(/* webpackChunkName: "OurCatalog" */ '../views/OurCatalog.vue')
  },
  {
    path: '/login',
    name: 'LoginMe',
    component: () => import(/* webpackChunkName: "LoginMe" */ '../views/LoginMe.vue')
  },
  {
    path: '/votre-panier',
    name: 'YourCart',
    component: () => import(/* webpackChunkName: "YourCart" */ '../views/YourCart.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
