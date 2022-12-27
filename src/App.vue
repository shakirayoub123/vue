<template>
  <base-container title="Vuex">
    <TheCounter />
    <favComp />
    <button class="btn btn-danger mx-2" @click="clickMe">Add 110</button>
  <change-counter />
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from "@/components/TheCounter.vue";
import ChangeCounter from "@/components/changeCounter.vue";
import favComp from "@/components/favComp.vue";
export default {
  components: {
    ChangeCounter,
    TheCounter,
    BaseContainer,
    favComp
  },
  methods:{
    clickMe(){
   // this.$store.state.counter=this.$store.state.counter+11;
   // we will use mutation now
   //    this.$store.commit('increment')
    // mutation with payload
    //   this.$store.commit('increase',{value:10})

    //   we can also write this as
      this.$store.commit({
        type:'increase',
        value:10
      });
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