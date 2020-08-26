<template>
  <div>
    <Layout class-prefix="layout">
      {{recordList}}
      <NumberPad @update:value="onUpdateTotal" @submit="saveRecord" />
      <Types :value.sync="record.type" />
      <FormItem @update:value="onUpdateNotes" fieldName="备注" placeholder="输入备注" />
      <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import NumberPad from "../components/Money/NumberPad.vue";
import FormItem from "../components/Money/FormItem.vue";
import Types from "../components/Money/Types.vue";
import Tags from "../components/Money/Tags.vue";
import recordListModel from "../models/recordListModel";

const recordList = recordListModel.fetch();
@Component({ components: { NumberPad, FormItem, Types, Tags } })
export default class Money extends Vue {
  tags = window.tagList.map((item) => item.name);
  recordList: RecordItem[] = recordList;
  record: RecordItem = { tags: [], notes: "", type: "-", total: 0 };
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
    recordListModel.create(this.record);
  }
  @Watch("recordList")
  onRecordChange() {
    recordListModel.save();
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