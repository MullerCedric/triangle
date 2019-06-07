<template>
  <ul class="file-lister">
    <li v-for="file in items" :key="file.path" class="file-lister__item">
      <div class="file-lister__file">
        <span class="file-lister__file-name">
          {{ file.name }}
        </span>
        <span>
          <i
            class="el-icon-circle-check file-lister__file-action"
            @click="removeFile(file.path)"
          ></i>
        </span>
      </div>
      <div v-if="hasSlot()" class="file-lister__file-slot">
        <slot :file="file"></slot>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FileLister",

  props: {
    items: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    removeFile(filePath) {
      const files = this.items;
      this.$_.remove(files, { path: filePath });
      this.$emit("update-files", files);
    },
    hasSlot(name = "default") {
      return !!this.$slots[name] || !!this.$scopedSlots[name];
    }
  }
};
</script>

<style lang="scss" scoped>
.file-lister {
  &__file {
    display: flex;
    background-color: $darkMain;
    padding: 0.5rem 1.25rem;
    &:hover {
      background-color: $gradient1;
      & .file-lister__file-action {
        cursor: pointer;
        &:before {
          content: "\e6db";
          color: $lighter;
        }
      }
    }
  }
  &__file-name {
    flex: 1;
  }
  &__file-action:before {
    color: $mainColor;
  }
  &__file-slot {
    margin-bottom: 2.5rem;
  }
}
</style>
