<template>
  <Layout class="x">
    <Tabs class-prefix="type" :data-source="typeList" :value.sync="type" />
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval" />
    <div>
      type:{{type}}
      <br />
      interval:{{interval}}
    </div>
  </Layout>
</template>

<script lang="ts">
import Types from "@/components/Money/Types.vue";
import Tabs from "@/components/Tabs.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    Types,
    Tabs,
  },
})
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  intervalList = [
    { text: "按天", value: "day" },
    { text: "按周", value: "week" },
    { text: "按月", value: "month" },
  ];
  typeList = [
    { text: "支出", value: "-" },
    { text: "收入", value: "+" },
  ];
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
</style>
