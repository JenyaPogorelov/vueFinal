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
      // console.log(state.catalog);
      // console.log(state);
    },
    setCartList(state, payload) {
      state.cart = [...state.cart, ...payload];
      console.log(state.cart);
      console.log(state);
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

    loadCart({commit}) {
      return fetch('api/cart')
          .then((response) => {
            return response.json();
          })
          .then((cartList) => {
            commit('setCartList', cartList);
            console.log(cartList);
          })
    },

    loadToCart({commit}, good) {
      return fetch('api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(good)
      })
          .then((response) => {
            commit('addToCart', good.id)
          })
    }
  },
  modules: {
  }
})
