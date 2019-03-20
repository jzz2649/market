<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    'v-home': Home
  }
}
</script>

<style scoped>
  #app {
    height: 100%;
  }
</style>
