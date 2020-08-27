<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad @update:value="onUpdateTotal" @submit="saveRecord" />
      <Tabs :data-source="recordTypeList" :value.sync="record.type" />
      <FormItem @update:value="onUpdateNotes" fieldName="备注" placeholder="输入备注" />
      <Tags @update:value="onUpdateTags" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import NumberPad from "../components/Money/NumberPad.vue";
import FormItem from "../components/Money/FormItem.vue";
import Tabs from "../components/Tabs.vue";
import Tags from "../components/Money/Tags.vue";
import recordTypeList from "../constants/recordTypeList";

@Component({ components: { NumberPad, FormItem, Tabs, Tags } })
export default class Money extends Vue {
  recordTypeList = recordTypeList;
  get recordList() {
    return this.$store.state.recordList;
  }
  record: RecordItem = { tags: [], notes: "", type: "-", total: 0 };
  created() {
    this.$store.commit("fetchRecords");
  }
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  onUpdateTotal(value: string) {
    this.record.total = parseFloat(value);
  }
  saveRecord() {
    this.$store.commit("createRecord", this.record);
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
</style>