<template>
  <Layout>
    <ol class="tags">
      <li v-for="tag in tags" :key="tag">
        <span>{{tag}}</span>
        <Icon name="right" />
      </li>
    </ol>

    <div class="createTag-wrapper">
      <button class="createTag" @click="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import tagListModel from "../models/tagListModel";
tagListModel.fetch();
@Component
export default class extends Vue {
  tags = tagListModel.data;
  createTag() {
    const name = window.prompt("请输入标签名");
    if (name) {
      const success = tagListModel.create(name);
      if (success === "duplicated") {
        window.alert("标签名重复");
      } else if (success === "success") {
        window.alert("添加成功");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags {
  font-size: 16px;
  background-color: white;
  padding-left: 16px;
  > li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      color: $color-highlight;
      margin-right: 16px;
    }
  }
}
.createTag {
  background-color: #ee82ee;
  color: white;
  border: none;
  border-radius: 4px;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 24px;
  }
}
</style>
