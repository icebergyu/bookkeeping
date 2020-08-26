<template>
  <div>
    <label class="formItem">
      <span class="name">{{this.fieldName}}</span>
      <input type="text" v-model="value" :placeholder="this.placeholder" />
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class FormItem extends Vue {
  value = "";
  @Prop({ required: true }) fieldName!: string;
  @Prop() placeholder?: string;
  @Watch("value")
  onValueChange(value: string) {
    this.$emit("update:value", value);
  }
}
</script> 

<style lang="scss" scoped>
.formItem {
  font-size: 14px;
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