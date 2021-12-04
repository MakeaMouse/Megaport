<template>
  <div id="app">
    <Activity1/>
  </div>
</template>

<script>
import Activity1 from './components/Activity1.vue'

export default {
  name: 'App',
  components: {
    Activity1
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
</style>
