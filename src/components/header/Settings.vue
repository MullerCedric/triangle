<template>
  <div class="settings">
    <i class="el-icon-setting settings__icon" @click="dialogVisible = true"></i>

    <el-dialog
      title="Paramètres"
      :visible.sync="dialogVisible"
      width="75%"
      :close-on-click-modal="false"
      center
    >
      <span>
        Cette fonctionnalité n'est malheureusement pas encore disponible
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Settings",

  data() {
    return {
      dialogVisible: false
    };
  },

  methods: {
    handleClose() {}
  }
};
</script>

<style lang="scss" scoped>
.settings {
  &__icon {
    font-size: 2.5rem;
    transition: 0.3s ease-in-out;
    &:hover {
      cursor: pointer;
      transform: rotate(35deg);
    }
  }
}
</style>
