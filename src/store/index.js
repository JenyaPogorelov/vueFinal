import { createStore } from 'vuex'

export default createStore({
  state: {
    catalog: [],
    cart: [],
    filter: [],
    filterList: []
  },
  getters: {
    getCatalog(state) {
      return state.catalog
    },
    getCart(state) {
      return state.cart
    },
    getSearch(state) {
      return state.filterList
    }
  },
  mutations: {
    setCatalog(state, payload) {
      state.catalog = [...state.catalog, ...payload];
    },
    setCartList(state, payload) {
      state.cart = payload;
    },
    addToCart(state, goodId) {
      const goodInCart = state.cart.find((good) => good.id === goodId);
      if(goodInCart) {
        goodInCart.quantity++
      } else {
        const good = state.catalog.find((good) => good.id === goodId);
        state.cart.push({...good, quantity: 1})
      }
    },
    searchHandler(state, filterText = '') {
      if (filterText) {
        state.filterList = state.catalog.filter((element) => {
          for (let key in element) {
            if (key === 'id' || key === 'image' || key === 'quantity' || key === 'price') continue;
            if (element[key].toLowerCase().indexOf(filterText) !== -1) return true;
          }
        });
      } else {
        state.filterList = state.catalog;
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
    },

    delCard({commit}, card) {
      fetch('api/cart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: card })
      })
          .then(() => this.dispatch('loadCart'))
    },
  },
  modules: {
  }
})
