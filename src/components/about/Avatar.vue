<template>
  <img
    class="avatar"
    src="../../assets/avatar-compressed.png"
    alt="Profile image"
  />
</template>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';

img {
  border-radius: 50%;
  width: 80vw;
  height: 80vw;
  margin: 10px;
  border: 10px solid $color-white;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Avatar extends Vue {}
</script>
