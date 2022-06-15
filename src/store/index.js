import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      cart: 0,
      products: []
    }
  },
  mutations: {
    addCart (state) {
      state.cart++
    },
    saveProduct(state, product) {
      state.products.push(product)
    }
  },
  actions: {
  },
  modules: {
  }
})
