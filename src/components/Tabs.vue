<template>
  <ul class="tabs" :class="{[classPrefix+'-tabs']:classPrefix}">
    <li
      class="tabs-item"
      v-for="item in dataSource"
      :key="item.value"
      :class="liClass(item)"
      @click="select(item)"
    >{{item.text}}</li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
type DataSourceItem = {
  text: string;
  value: string;
};
@Component
export default class extends Vue {
  @Prop({ required: true, type: Array }) dataSource!: DataSourceItem[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;
  select(item: DataSourceItem) {
    this.$emit("update:value", item.value);
  }

  liClass(item: DataSourceItem) {
    return {
      [this.classPrefix + "-tabs-item"]: this.classPrefix,
      selected: item.value === this.value,
    };
  }
}
</script>

<style  lang="scss" scoped>
.tabs {
  background-color: #d1c9ef;
  display: flex;
  text-align: center;
  font-size: 24px;
  &-item {
    width: 50%;
    display: flex;
    height: 64px;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #333;
    }
  }
}
</style>