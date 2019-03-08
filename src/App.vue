<template>
  <div id="app">
    <img alt="logo" src="./assets/logo.png" />
    <About msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<style lang="scss">
@import './scss/_variables.scss';
#app {
  background-color: $color-primary;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import About from '@/components/About.vue'

@Component({
  components: { About },
})
export default class App extends Vue {}
</script>
