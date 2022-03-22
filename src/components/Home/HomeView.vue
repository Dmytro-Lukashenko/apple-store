<template>
  <div>  
  <v-container grid-list-lg>
    <v-layout row wrap>
        <v-flex xs12>           
            <v-row dense>
                <v-col                
                 v-for="(product,i) in products"
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
                                    <p class="subheading card_price"> <span class="title">Price: </span>${{ product.price }} </p>
                                </div>
                            </div>               
                        </v-card-title>                
                        <v-card-actions>
                        <v-spacer></v-spacer>                        
                        <v-btn 
                          dark         
                          class="light-blue darken-4"
                          rounded 
                          @click="addProductToTheCart(product.id)"       
                          >Buy</v-btn>                         
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
  export default {
    name: 'Home',
    methods: {
      addProductToTheCart(id){            
        let result = this.$store.state.cart.find((product) => product.id === id)
        if(!result){
        const product = this.$store.getters.productById(id)        
        this.$store.commit('ADD_PRODUCT_TO_THE_CART', product)
        } else {
        result.amount ++ 
        }         
      }          
    },
    computed: {        
        products () {
            return this.$store.state.products
        },
    }
  }
</script>

<style scoped>
.extra{
  background: linear-gradient(to top right, rgba(63, 63, 63, 0.9), rgba(49, 48, 48, 0.9));
  color: white;
}
</style>
