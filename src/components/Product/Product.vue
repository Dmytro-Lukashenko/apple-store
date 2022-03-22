<template>
  <v-container>
    <section class="product">
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <img :src="product.url" class="product__img">
        </v-flex>
        <v-flex xs12 lg6>
          <div class="product__info">
            <h5 class="product__info_title display-1 mb-3 mt-3">{{ product.title }}</h5>
            <p class="product__info_price title">
              <span class="product__info_title">Price: </span>${{ product.price }}
            </p>
            <p class="product__info_color title">
              <span class="product__info_title">Color:</span>
              <span
                  :title="product.color"
                  :style="{ backgroundColor:  product.color }"
                  class="background"
              >
                          </span>
            </p>
          </div>
          <div class="btn">
            <v-btn
                dark
                absolute
                class="btn__info light-blue darken-4"
                rounded
                :to="'/'"
            >Back to the phones list
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </section>
  </v-container>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    product() {
      return this.$store.getters.productById(this.id)
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'Product.scss';
</style>
