import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      cart: 0
    }
  },
  mutations: {
    addCart (state) {
      state.cart++
    }
  },
  actions: {
  },
  modules: {
  }
})
