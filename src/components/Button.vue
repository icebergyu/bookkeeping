<template>
  <button class="button" @click="$emit('click',$event)">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.button {
  background-color: #ee82ee;
  color: white;
  border: none;
  border-radius: 4px;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 24px;
  }
}
</style>