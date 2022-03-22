<template>
  <div>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12>
          <v-row dense>
            <v-col
                v-for="(product, i) in products"
                :key="i">
              <v-card
                  class="extra mx-auto"
                  width="350px"
                  dark
              >
                <router-link
                    :aria-label="product.title"
                    :to="'/product/' + product.id"
                >
                  <v-img
                      :src="product.url"
                  ></v-img>
                </router-link>
                <v-card-title primary-title>
                  <div>
                    <h3 class="card_heading heading">{{ product.title }}</h3>
                    <div class="card_describe">
                      <p class="subheading card_price"><span class="title">Price: </span>${{ product.price }} </p>
                    </div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      dark
                      class="light-blue darken-4"
                      rounded
                      @click="addProductToTheCart(product)"
                  >Buy
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import productIncrease from '/src/mixins/productIncrease';

export default {
  mixins: [productIncrease],
  computed: {
    products() {
      return this.$store.state.products
    },
    cart() {
      return this.$store.state.cart
    }
  },
  methods: {
    addProductToTheCart(item) {
      let result = this.cart.find((product) => product.id === item.id)
      if (!result) {
        this.$store.commit('ADD_PRODUCT_TO_THE_CART', item)
      } else {
        this.productIncrease(item.id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'HomeView.scss';
</style>
