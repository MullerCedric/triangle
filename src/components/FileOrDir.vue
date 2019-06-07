<template>
  <div
    class="file-or-dir file-or-dir__zone"
    :class="[
      'file-or-dir--' + (file.type || 'file'),
      isSelected ? 'file-or-dir--selected' : ''
    ]"
    @click="selectItem"
  >
    <div class="file-or-dir__icon"></div>
    <div class="file-or-dir__name">{{ fileName }}</div>
  </div>
</template>

<script>
export default {
  name: "FileOrDir",

  data() {
    return {
      nameLimit: 30
    };
  },

  props: {
    file: {
      type: Object,
      default: null
    }
  },

  computed: {
    isSelected() {
      return this.$store.state.selectedItem.id === this.file.id;
    },
    fileName() {
      let name = this.file.name.substr(0, this.nameLimit - 3);
      if (this.file.name.length > this.nameLimit) name = name + "...";

      return name;
    }
  },

  methods: {
    selectItem() {
      this.$store.commit("updateSelectedItem", this.file);
    }
  }
};
</script>

<style lang="scss" scoped>
.file-or-dir {
  &__zone {
    text-align: center;
    border-radius: 5px;
    padding: 0.75rem 0.5rem;
    box-sizing: border-box;
    font-size: 1.25rem;
    &:hover {
      background-color: $darker;
      cursor: pointer;
    }
  }
  &__icon {
    width: 100px;
    height: 65px;
    display: inline-block;
    background-color: $darker;
    border: 1px solid $light;
    margin-bottom: 0.5rem;
  }

  &--selected {
    color: $lightest;
    background-color: $darkMain;
    & .file-or-dir__icon {
      background-color: $gradient1;
      border-color: $mainColor;
    }
  }
}
</style>
