<template>  
    <v-dialog
      v-model="dialog"       
      max-width="600px" 
      close-delay:3     
         > 
      <template v-slot:activator="{ on, attrs }">
        <v-btn        
         text
         v-bind="attrs"      
         v-on="on"
        ><v-icon left size="25px"> mdi-cart</v-icon>
                    Cart         
        </v-btn>
      </template>


      <v-card>
        <v-card-title>
          <span class="text-h5">List of products in Cart</span>
        </v-card-title>



<v-card 
        dark
        v-for="(product, id) in myCart"
        :key="id"  
        v-model="myCart"                 
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
                    <p>Total Price:${{ product.amount * product.price }}</p>                    
                </v-card-text>                
                </v-flex>                           
            <v-flex>
                <v-card-actions>
                    <v-btn 
                    class="info"  
                    @click="dialog=false"                  
                    :to="'/product/' + product.id"
                    >Open Description</v-btn> 
                    </v-card-actions>  
                    <v-card-actions>
                      <v-btn     
                    @click="productIncreese(product.id)"
                    >+</v-btn>
                    <v-btn
                    @click="productDecreese(product.id)"
                    >-</v-btn>
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
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"            
          >
            Close
          </v-btn>          
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {

data(){
     return {
       dialog: false,                   
     } 
    },
     methods: {
        deleteProductFromTheCart(id) {            
            this.$store.commit('DELETE_PRODUCT_FROM_THE_CART', id)
        },   
        productDecreese(id) {
          this.$store.dispatch('productDecreese', id, {root: true})
          const product = this.$store.state.cart.find((product) => product.id === id);
          return product.amount
        },    
        productIncreese(id) {
          this.$store.dispatch('productIncreese', id, {root: true})          
        }  
    }, 
    computed: {
        myCart () {            
            return this.$store.getters.myCart
        },        
    },    
   
}
</script>

<style>

</style>