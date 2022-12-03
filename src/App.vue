<template>
  <h1>Liste des Inscrits</h1>
  <InscritsList />
</template>

<script>

import InscritsList from './components/InscritsList.vue';
export default {
  name: 'App',
  components: {
    InscritsList
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
 text-align : center;
 margin-bottom : 4rem;
}
</style>
