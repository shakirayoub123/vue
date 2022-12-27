<template>
  <button class="btn btn-primary" @click="addOne"> Add 2 </button>
</template>

<script>
export default {
  name:'changeCounter',
  methods:{
    addOne(){
      // this.$store.state.counter++
    // we will triger mutation now
    //  this.$store.commit('increment')
    //   mutation with payload now

      this.$store.commit('increase', {value:2})
    }
  }
}
</script>

<style scoped>

</style>