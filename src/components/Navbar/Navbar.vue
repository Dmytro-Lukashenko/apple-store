<template>
    <div>       
        <v-toolbar 
            dark 
            color="primary"
            src="https://picsum.photos/1920/1080?random"
         >
         <template v-slot:img="{ props }">
            <v-img
                v-bind = "props"
                gradient="to top right, rgba(54, 56, 58, 0.9), rgba(163, 162, 162, 0.7)"
            ></v-img>
         </template>            
            <v-toolbar-title class="pointer">
                <router-link :to="'/'" tag="span">
                    <h3>APPLE STORE</h3>
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <cart-dialog></cart-dialog>
                <v-btn 
                    text 
                    :to="'/about'" 
                    >
                    <v-icon left size="25px">mdi-alert-circle</v-icon>
                    About
                </v-btn>  
            </v-toolbar-items>             
        </v-toolbar>
        <v-main>
            <router-view></router-view>
        </v-main>
    </div>
</template>

<script>
import CartDialog from '../Cart/Dialog/CartDialog.vue'
export default {
    components: {
        CartDialog
    },
    data() {
        return {
            sideNav: false,  
        }
    },    
}
</script>

<style lang="scss" scoped>
@import './Navbar.scss'
</style>