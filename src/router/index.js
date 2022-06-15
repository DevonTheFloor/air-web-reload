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
  },
  {
    path: '/categorie/:catid',
    name: 'OneCategorie',
    component: () => import(/* webpackChunkName: "OneCategorie" */ '../views/OneCategorie.vue')
  },
  {
    path: '/tous-nos-produits',
    name: 'AllProducts',
    component: () => import(/* webpackChunkName: "AllProducts" */ '../views/AllProducts.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
