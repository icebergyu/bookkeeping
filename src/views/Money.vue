<template>
  <div>
    <Layout class-prefix="layout">
      {{recordList}}
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

type Record = {
  tags: string[];
  notes: string;
  type: string;
  total: number;
  createdAt?: Date;
};
@Component({ components: { NumberPad, Notes, Types, Tags } })
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行"];
  recordList: Record[] = JSON.parse(
    window.localStorage.getItem("recordList") || "[]"
  );
  record: Record = { tags: [], notes: "", type: "-", total: 0 };
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
    const record2: Record = JSON.parse(JSON.stringify(this.record));
    record2.createdAt = new Date();
    this.recordList.push(record2);
    console.log(this.recordList);
  }
  @Watch("recordList")
  onRecordChange() {
    window.localStorage.setItem("recordList", JSON.stringify(this.recordList));
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