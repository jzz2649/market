<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app'
}
</script>

<style scoped>
  #app {
    height: 100%;
  }
</style>
