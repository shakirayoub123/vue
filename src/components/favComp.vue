<template>
  <h3>{{counter}}</h3>
  <h2>We do more here...</h2>
</template>

<script>
export default {
  name:'TheCounter',
  computed:{
    counter(){
      // return this.$store.state.counter*3
    //   use getter method
    //   return this.$store.getters.finalCounter;
    // will use other getter
      return this.$store.getters.normalizedCounter
    }
  }
}
</script>

<style scoped>

</style>