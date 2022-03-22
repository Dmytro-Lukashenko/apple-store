import Vue from "vue";
import Vuex from "vuex";
import {
  ADD_PRODUCT_TO_THE_CART,
  DELETE_PRODUCT_FROM_THE_CART,
  PRODUCT_INCREASE,
  PRODUCT_DECREASE,
} from "./-listMutations.js";

Vue.use(Vuex);

const getProduct = (list, id) => {
  return list.find((item) => item.id === id);
};

export default new Vuex.Store({
  state: {
    products: [
      {
        id: "1",
        title: "Apple iPhone 12",
        color: "Black",
        memory: "64GB",
        price: 700,
        url: "https://jabko.ua/image/catalog/products/2020/10/140937/8.jpg",
      },
      {
        id: "2",
        title: "Apple iPhone 12 Pro",
        color: "Silver",
        memory: "128GB",
        price: 1200,
        url: "https://jabko.ua/image/catalog/products/2020/10/141033/16%20(4).jpg",
      },
      {
        id: "3",
        title: "Apple iPhone 13 mini",
        color: "Red",
        memory: "128GB",
        price: 900,
        url: "https://jabko.ua/image/catalog/products/2021/09/142205/2021-09-14%2021.47.44%20(1).jpg",
      },
      {
        id: "4",
        title: "Apple iPhone 13",
        color: "Midnight",
        memory: "128GB",
        price: 1000,
        url: "https://jabko.ua/image/catalog/products/2021/09/142254/2021-09-14%2021.47.41.jpg",
      },
      {
        id: "5",
        title: "Apple iPhone 13",
        color: "Blue",
        memory: "256GB",
        price: 1500,
        url: "https://jabko.ua/image/catalog/products/2021/09/142316/2021-09-14%2021.47.39.jpg",
      },
      {
        id: "6",
        title: "Apple iPhone 13 Pro",
        color: "Graphite",
        memory: "1TB",
        price: 2000,
        url: "https://jabko.ua/image/catalog/products/2021/09/150015/2021-09-15%2000.07.26.jpg",
      },
    ],
    cart: [],
  },
  mutations: {
    [ADD_PRODUCT_TO_THE_CART](state, payload) {
      state.cart.push({
        ...payload,
        amount: 1,
      });
    },
    [DELETE_PRODUCT_FROM_THE_CART](state, id) {
      state.cart = state.cart.filter((product) => product.id !== id);
    },
    [PRODUCT_INCREASE](state, id) {
      getProduct(state.cart, id).amount++;
    },
    [PRODUCT_DECREASE](state, id) {
      const product = getProduct(state.cart, id);
      product.amount && product.amount--;
    },
  },
  actions: {
    productIncrease({ commit }, id) {
      commit("PRODUCT_INCREASE", id);
    },
    productDecrease({ commit }, id) {
      commit("PRODUCT_DECREASE", id);
    },
  },
  getters: {
    productById(state) {
      return (id) => {
        return getProduct(state.products, id);
      };
    },
    myCart(state) {
      return state.cart;
    },
  },
});
