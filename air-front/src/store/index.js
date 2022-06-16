import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      user: null,
      login: false,
      cart: 0,
      products: [],
      listing: null
    }
  },
  mutations: {
    addCart (state) {
      state.cart++
    },
    saveProduct(state, product) {
      state.products.push(product)
    },
    logging(state) {
      state.login = true
    },
    unlogging(state) {
      state.login = false
    },
    usercome(state, name) {
      state.user = name
    }
  },
  actions: {
    
  },
  modules: {
  }
})
