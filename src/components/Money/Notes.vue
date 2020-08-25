<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" v-model="value" placeholder="输入备注" />
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  value = "";
}
</script> 

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  padding-left: 16px;
  .name {
    padding-right: 16px;
  }
  input {
    padding: 16px 0;
    flex-grow: 1;
    background-color: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>