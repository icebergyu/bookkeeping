<template>
  <Layout>
    <div>
      <Icon name="left" />
      <span>编辑标签</span>
    </div>
    <Notes fieldName="标签名" placeholder="请输入标签名" />
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Notes from "@/components/Money/Notes.vue";
import tagListModel from "../models/tagListModel";
@Component({ components: { Notes } })
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace("/404");
    }
  }
}
</script>

<style scoped>
</style>