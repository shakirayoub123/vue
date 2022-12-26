<template>
   <h3>{{ counter }}</h3>
   <p>we will do more</p>
  </template>
  
  <script>
  export default {
    name:'favComp',
    computed:{
    counter(){
return this.$store.state.counter*2
    }
},
  };
  </script>
  
  <style scoped>
  section {
    max-width: 30rem;
    margin: 2rem auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
  }
  
  h2 {
    text-align: center;
  }
  </style>