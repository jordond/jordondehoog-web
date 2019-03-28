<template>
  <div id="app">
    <!-- <About/> -->
    <GitTracker username="jordond"/>
  </div>
</template>

<style lang="scss">
@import './scss/_variables.scss';

body {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  background-color: $color-primary;
  margin: 0;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import About from '@/components/about/About.vue'
import GitTracker from '@/components/gittracker/GitTracker.vue'

@Component({
  components: { About, GitTracker },
})
export default class App extends Vue {}
</script>
