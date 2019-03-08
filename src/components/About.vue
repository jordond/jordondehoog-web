<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>For a guide and recipes on how to configure / customize this project</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class About extends Vue {
  @Prop() private msg!: string
}
</script>

<style scoped lang="scss">
@import '../scss/_variables.scss';
.hello {
  background-color: $color-primary;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
