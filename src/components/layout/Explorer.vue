<template>
  <div class="explorer" v-if="this.files.length > 0">
    <template slot="title">
      <slot name="title"></slot>
    </template>
    <div v-for="file in files" :key="file.id">
      <file-or-dir :file="file"></file-or-dir>
    </div>
  </div>
</template>

<script>
import FileOrDir from "../FileOrDir";
export default {
  name: "Explorer",

  components: { FileOrDir },

  props: {
    files: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.explorer {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(115px, 1fr));
}
</style>
