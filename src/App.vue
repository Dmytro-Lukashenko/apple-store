<template>
  <div>
    <navbar data-app/>        
  </div>
</template>
<script>
import navbar from '@/components/Navbar/Navbar'
export default {
  name: 'App',
  components: {
    navbar
  }, 
  data() {
    return {
      drawer: false,
      group: null,
    }
  } 
};
</script>
<style scoped>
div{
  
  background: linear-gradient(to top right, rgba(54, 56, 58, 0.7), rgba(163, 162, 162, 0.7))
}
</style>
