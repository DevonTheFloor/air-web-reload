import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const urlGet = 'http://localhost:3000'
const uriCat = '/categories'
const uriProd = '/products'

createApp(App)
  .use(store)
  .use(router)
  .use({urlGet, uriCat, uriProd})
  .mount('#app')
