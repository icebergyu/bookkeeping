<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click="goBack" />
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem :value="tag.name" fieldName="标签名" placeholder="请输入标签名" @update:value="update" />
    </div>
    <div class="button-wrapper">
      <Button @click="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FormItem from "@/components/Money/FormItem.vue";
import Button from "@/components/Button.vue";

@Component({ components: { FormItem, Button } })
export default class EditLabel extends Vue {
  get tag() {
    return this.$store.state.currentTag;
  }
  created() {
    const id = this.$route.params.id;
    this.$store.commit("fetchTags");
    this.$store.commit("setCurrentTag", id);
    if (!this.tag) {
      this.$router.replace("/404");
    }
  }
  update(name: string) {
    if (this.tag) {
      this.$store.commit("updateTag", { id: this.tag.id, name });
    }
  }
  remove() {
    if (this.tag) {
      this.$store.commit("removeTag", this.tag.id);
    }
  }
  goBack() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .leftIcon {
  }
  > .title {
  }
  > .rightIcon {
    width: 16px;
    height: 16px;
  }
}
.form-wrapper {
  background-color: white;
  margin-top: 8px;
}
.button-wrapper {
  text-align: center;
  padding: 16px;
}
</style>