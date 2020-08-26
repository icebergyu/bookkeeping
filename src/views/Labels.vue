<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
        <span>{{tag.name}}</span>
        <Icon name="right" />
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import tagListModel from "../models/tagListModel";
import Button from "@/components/Button.vue";
tagListModel.fetch();
@Component({ components: { Button } })
export default class extends Vue {
  tags = tagListModel.data;
  createTag() {
    const name = window.prompt("请输入标签名");
    if (name) {
      window.createTage(name);
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
  > .tag {
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
  }
}
</style>
