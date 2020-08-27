<template>
  <Layout class="x">
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type" />
    <ol>
      <li v-for="(group,index) in groupList" :key="index">
        <h3 class="title">
          {{beautify(group.title)}}
          <span>￥{{group.totalAmount}}</span>
        </h3>
        <ol>
          <li class="record" v-for="item in group.items" :key="item.id">
            <span>{{tagString(item.tags)}}</span>
            <span class="notes">{{item.notes}}</span>
            <span>￥{{item.total}}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>

<script lang="ts">
import Tabs from "@/components/Tabs.vue";
import intervalList from "../constants/intervalList";
import recordTypeList from "../constants/recordTypeList";
import Vue from "vue";
import dayjs from "dayjs";

import { Component } from "vue-property-decorator";
import clone from "../lib/clone";
@Component({ components: { Tabs } })
export default class Statistics extends Vue {
  tagString(tags: string[]) {
    return tags.length === 0 ? "无" : tags.join("");
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  get groupList() {
    const { recordList } = this;
    if (recordList.length === 0) {
      return [];
    }
    const newList = clone(recordList)
      .filter((r) => r.type === this.type)
      .sort(
        (a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf()
      );
    type Result = {
      title: string;
      totalAmount?: number;
      items: RecordItem[];
    }[];
    const result: Result = [
      {
        title: dayjs(newList[0].createdAt).format("YYYY-MM-DD"),
        items: [newList[0]],
      },
    ];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdAt), "day")) {
        last.items.push(current);
      } else {
        result.push({
          title: dayjs(current.createdAt).format("YYYY-MM-DD"),
          items: [current],
        });
      }
    }
    result.map(
      (group) =>
        (group.totalAmount = group.items.reduce(
          (sum, item) => sum + item.total,
          0
        ))
    );
    return result;
  }
  beforeCreate() {
    this.$store.commit("fetchRecords");
  }
  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, "day")) {
      return "今天";
    } else if (day.isSame(now.subtract(1, "day"), "day")) {
      return "昨天";
    } else if (day.isSame(now.subtract(2, "day"), "day")) {
      return "前天";
    } else if (day.isSame(now, "year")) {
      return day.format("M月D日");
    } else {
      return day.format("YYYY年M月D日");
    }
  }
  type = "-";
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
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  @extend %item;
}
.record {
  @extend %item;
  background-color: white;
}
.notes {
  margin-right: auto;
  margin-left: 8px;
  color: #999;
}
</style>
