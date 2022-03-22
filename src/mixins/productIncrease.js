export default {
    methods: {
        productIncrease(id) {
            this.$store.dispatch('productIncrease', id)
        }
    }
}
