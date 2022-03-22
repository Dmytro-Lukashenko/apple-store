<template>
  <v-dialog max-width="400" v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
         dark         
         class="light-blue darken-4"
         rounded         
         v-bind="attrs" 
         v-on="on"  
         @click="addProductToTheCart"       
         >Buy</v-btn>
         </template>
        <v-card>
            <v-container>
                <v-layout row>
                    <v-flex>
                        <v-card-title>
                            <h2 class="text-primary">Do you want to buy it?</h2>
                        </v-card-title>
                    </v-flex>
                </v-layout>                
                <v-layout row>
                    <v-flex>
                        <v-card-text>
                           <v-text-field                           
                            name="name"
                            label="Your name"
                            type="text"                           
                            >
                          </v-text-field>
                           <v-text-field                           
                            name="phone"
                            label="Your phone"
                            type="text"
                            >
                          </v-text-field>
                        </v-card-text>
                    </v-flex>
                </v-layout>                
                <v-layout row>
                    <v-flex>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn 
                             dark 
                             color="light-blue darken-4" 
                             outlined
                             @click="dialog=false"                             
                             >Close</v-btn>
                            <v-btn 
                             dark 
                             color="light-blue darken-4"  
                            >Buy It</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>      
  </v-dialog>
</template>

<script>
export default {    
    props: {
        id:{
            type:String,
            required: true
        }
    },
    data() {
        return {
            dialog:false,                     
        }
    },
    methods: {       
        onClose() {
            this.name='';
            this.phone='';
            this.dialog = false;
        },        
        addProductToTheCart (event) {
        console.log(event.target)
        this.$store.commit('addProductToTheCart')
    }
 
    },
    computed:{
        
    }

}
</script>
