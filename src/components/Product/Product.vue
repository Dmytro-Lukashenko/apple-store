<template>
  <v-container>
      <section class="product">
          <v-layout row wrap>
              <v-flex xs12 lg6>
                  <img :src="product.url" class="product_img">
              </v-flex>
              <v-flex xs12 lg6>
                  <div class="product_info">
                      <h5 class="product_title display-1 mb-3 mt-3">{{product.title}}</h5>                      
                      <p class="product_price title">
                          <span class="product_title">Price: </span>${{product.price}} 
                      </p>
                      <p class="product_color title">
                          <span class="product_title">Color:</span>
                          <span
                              :title="product.color"
                              :style="{ backgroundColor:  product.color }"
                              class="product_color__bg"
                              >
                          </span>
                      </p>                                     
                  </div>    
                  <div class="div_btn_info">                                 
                    <v-btn                     
                        dark      
                        absolute   
                        class="btn_info light-blue darken-4"
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
            required:true
        }
    },    
    computed: {
        product() {
            const id = this.id              
            return this.$store.getters.productById(id)     
            
        },
        
    }
}
</script>
<style lang="scss" scoped>
@import './Product.scss'
</style>
