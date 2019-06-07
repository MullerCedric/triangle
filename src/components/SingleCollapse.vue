<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item name="1">
      <template slot="title">
        <slot name="title"></slot>
      </template>
      <slot></slot>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  name: "SingleCollapse",

  data() {
    return {
      activeName: ""
    };
  }
};
</script>

<style scoped></style>
