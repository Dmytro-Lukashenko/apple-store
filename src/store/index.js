import Vue from "vue";
import Vuex from "vuex";
import {
  ADD_PRODUCT_TO_THE_CART,
  DELETE_PRODUCT_FROM_THE_CART,
  PRODUCT_INCREESE,
  PRODUCT_DECREESE,
} from "./-listMutations.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: "1",
        title: "Apple iPhone 12",
        color: "Black",
        memory: "64GB",
        price: 700,
        url: "https://fs39.fex.net/preview/3956405179/0x0",
      },
      {
        id: "2",
        title: "Apple iPhone 12 Pro",
        color: "Silver",
        memory: "128GB",
        price: 1200,
        url: "https://fs39.fex.net/preview/3956405187/0x0",
      },
      {
        id: "3",
        title: "Apple iPhone 13 mini",
        color: "Red",
        memory: "128GB",
        price: 900,
        url: "https://fs41.fex.net/preview/3956405205/0x0",
      },
      {
        id: "4",
        title: "Apple iPhone 13",
        color: "Midnight",
        memory: "128GB",
        price: 1000,
        url: "https://fs41.fex.net/preview/3956405198/0x0",
      },
      {
        id: "5",
        title: "Apple iPhone 13",
        color: "Blue",
        memory: "256GB",
        price: 1500,
        url: "https://fs39.fex.net/preview/3956405192/0x0",
      },
      {
        id: "6",
        title: "Apple iPhone 13 Pro",
        color: "Graphite",
        memory: "1TB",
        price: 2000,
        url: "https://fs41.fex.net/preview/3956405212/0x0",
      },
    ],
    cart: [],
  },
  getters: {
    productById(state) {
      return (id) => {
        return state.products.find((product) => product.id === id);
      };
    },
    myCart(state) {
      return state.cart;
    },
  },
  mutations: {
    [ADD_PRODUCT_TO_THE_CART](state, payload) {
      state.cart.push(Object.assign(payload, { amount: 1 }));
    },
    [DELETE_PRODUCT_FROM_THE_CART](state, id) {
      let result = [];
      result = state.cart.filter((product) => product.id !== id);
      state.cart = result;
    },
    [PRODUCT_INCREESE](state, id) {
      const product = state.cart.find((product) => product.id === id);
      product.amount++;
    },
    [PRODUCT_DECREESE](state, id) {
      const product = state.cart.find((product) => product.id === id);
      product.amount === 0 ? 0 : product.amount--;
    },
  },
  actions: {
    productIncreese({ commit }, id) {
      commit("PRODUCT_INCREESE", id);
    },
    productDecreese({ commit }, id) {
      commit("PRODUCT_DECREESE", id);
    },
  },
});
