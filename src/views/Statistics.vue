<template>
  <Layout class="x">
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type" />
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval" />
    <div>
      type:{{type}}
      <br />
      interval:{{interval}}
    </div>
  </Layout>
</template>

<script lang="ts">
import Tabs from "@/components/Tabs.vue";
import intervalList from "../constants/intervalList";
import recordTypeList from "../constants/recordTypeList";
import { Component, Vue } from "vue-property-decorator";
@Component({ components: { Tabs } })
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>

<style lang="scss" scoped>
::v-deep .type-tabs-item {
  background-color: white;
  &.selected {
    background-color: #d1c9ef;
    &::after {
      display: none;
    }
  }
}
::v-deep .interval-tabs-item {
  height: 48px;
}
</style>
