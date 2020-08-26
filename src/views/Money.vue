<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad @update:value="onUpdateTotal" @submit="saveRecord" />
      <Types :value.sync="record.type" />
      <Notes @update:value="onUpdateNotes" />
      <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import NumberPad from "../components/Money/NumberPad.vue";
import Notes from "../components/Money/Notes.vue";
import Types from "../components/Money/Types.vue";
import Tags from "../components/Money/Tags.vue";
import recordListModel from "../models/recordListModel";
import tagListModel from "../models/tagListModel";

const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();
@Component({ components: { NumberPad, Notes, Types, Tags } })
export default class Money extends Vue {
  tags = tagList.map((item) => item.name);
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
    const record2: RecordItem = recordListModel.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }
  @Watch("recordList")
  onRecordChange() {
    recordListModel.save(this.recordList);
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