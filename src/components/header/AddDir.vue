<template>
  <el-popover placement="bottom" trigger="click" v-model="visible">
    <div class="add-file__content">
      <div class="add-file__step">
        Cette fonctionnalité n'est malheureusement pas encore disponible
      </div>
    </div>
    <el-button slot="reference" icon="el-icon-folder-add" small circle />
  </el-popover>
</template>

<script>
export default {
  name: "AddDir",

  data() {
    return {
      visible: false,
      loading: false,
      active: 0,
      nbItemsPerPage: 1,
      totalItems: 1,
      items: []
    };
  },

  computed: {
    step() {
      return "Step" + this.active;
    },
    currentPage() {
      return this.active + 1;
    },
    lastPage() {
      return Math.ceil(this.totalItems / this.nbItemsPerPage);
    }
  }
};
</script>

<style lang="scss" scoped>
.add-file {
  &__content {
    width: 720px;
    max-width: 80vw;
    color: $light;
  }
  &__step {
    max-height: 80vh;
    overflow-y: auto;
  }
}
</style>
