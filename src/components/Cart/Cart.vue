<template>
  <section class="about">   
    <v-card 
        dark
        v-for="(product, i) in myCart"
        :key="i"
        >   
        <v-layout>
            <v-flex>                  
                <v-img :src="product.url" max-height="250px" max-width="200px"></v-img>                      
            </v-flex>
            
         <v-flex>
             <v-card-text>
                    <h2 class="text-primary">{{ product.title }} </h2>                              
                    <p>Price: ${{ product.price }}</p>
                    <p>Amount: {{ product.amount }}</p>
                    <p>Total Price: {{ product.amount * product.price }}</p>
                </v-card-text>
                </v-flex>                
            <v-flex>
                <v-card-actions>
                    <v-btn 
                    class="info "
                    :to="'/product/' + product.id"
                    >Open Description</v-btn> 
                    </v-card-actions>
                    <v-card-actions>
                    <v-btn 
                    class="info"                    
                    >Edit</v-btn>   
                    </v-card-actions>                
                    <v-card-actions>
                    <v-btn 
                    class="info"  
                    @click="deleteProductFromTheCart(product.id)"                  
                    >Delete</v-btn>
                </v-card-actions>   
        </v-flex>
        </v-layout>
    </v-card>        
  </section>  
</template>

<script>

export default {      
    data(){
        return {
            
        }
    },  
    methods: {
        deleteProductFromTheCart(id) {
            console.log(id)
            this.$store.commit('deleteProductFromTheCart', id)
        }
    }, 
    computed: {
        myCart () {            
            return this.$store.getters.myCart
        },

        
    }
}
</script>
<style lang="scss" scoped>
@import './Cart.scss'
</style>