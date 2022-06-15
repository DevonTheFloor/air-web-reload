import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/notre-catalogue',//avec toutes les categories
    name: 'OurCatalog',
    component: () => import(/* webpackChunkName: "OurCatalog" */ '../views/OurCatalog.vue')
  },
  {
    path: '/categorie/:id',//avec toutes les categories
    name: 'DetailsCategory',
    component: () => import(/* webpackChunkName: "DetailsCategory" */ '../views/DetailsCategory.vue')
  },
  {
    path: '/liste-de-categorie/:id',//avec toutes les categories
    name: 'AllProductsInCategory',
    component: () => import(/* webpackChunkName: "AllProductsInCategory" */ '../views/AllProductsInCategory.vue')
  },
  {
    path: '/tous-nos-produits',
    name: 'AllProducts',
    component: () => import(/* webpackChunkName: "AllProducts" */ '../views/AllProducts.vue')
  },
  {
    path: '/produit/:id',
    name: 'DetailsProduct',
    component: () => import(/* webpackChunkName: "DetailsProduct" */ '../views/DetailsProduct.vue')
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
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
