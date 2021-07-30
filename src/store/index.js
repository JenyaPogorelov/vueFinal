import { createStore } from 'vuex'
// import {response} from "express";

export default createStore({
  state: {
    catalog: [],
    cart: []
  },
  getters: {
    getCatalog(state) {
      return state.catalog
    },
    getCart(state) {
      return state.cart
    }
  },
  mutations: {
    setCatalog(state, payload) {
      state.catalog = [...state.catalog, ...payload];
    },
    addToCart(state, goodId) {
      const goodInCart = state.cart.find((good) => good.id === goodId);
      if(goodInCart) {
        goodInCart.quantity++
      } else {
        const good = state.catalog.find((good) => good.id === goodId);
        state.cart.push({...good, quantity: 1})
      }

    }
  },
  actions: {
    loadCatalog({commit}) {
      return fetch('api/good')
          .then((response) => {
            return response.json();
          })
          .then((goodList) => {
            commit('setCatalog', goodList)
          })

    },

    loadToCart({commit}, good) {
      return fetch('api/cart', {method: 'POST', body: JSON.stringify(good)})
          .then((response) => {
            commit('addToCart', good.id)
            console.log(JSON.stringify(good))
          })
    }
  },
  modules: {
  }
})
