<template>
  <base-container title="Vuex">
  <h2>{{ counter}}</h2>
  <FavComp></FavComp>
  <button @click="clickMe">Add 10</button>
  <change-counter></change-counter>  
</base-container>
 
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import changeCounter from './components/changeCounter.vue';
import FavComp from './components/FavComp.vue';

export default {
  components: {
    BaseContainer,
    changeCounter,
    FavComp
},
  computed:{
   counter(){
    return this.$store.state.counter*2
   }
  },
  methods:{
    clickMe(){
      // this.$store.state.counter++
      this.$store.commit('increament')
      // this.$store.commit('increase', {value:10})
    // alternative method we can also write this in this way also
    // this.$store.commit({
    //   type:'increase',
    //   value:10
    // });
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>