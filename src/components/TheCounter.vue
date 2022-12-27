<template>
  <h3>{{counter}}</h3>
</template>

<script>
export default {
  name:'TheCounter',
  computed:{
    counter(){
      // return this.$store.state.counter
    // we can use getter method here now
      return this.$store.getters.finalCounter;
    }
  }
}
</script>

<style scoped>

</style>