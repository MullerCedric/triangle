<template>
  <div class="settings">
    <i class="el-icon-setting settings__icon" @click="dialogVisible = true"></i>

    <el-dialog
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :modal="false"
      title="Paramètres"
      width="75%"
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
    &:hover,
    &:focus,
    &:active {
      cursor: pointer;
      color: $lightest;
      transform: rotate(35deg);
    }
  }
}
.el-dialog__wrapper {
  background-color: rgba(35, 40, 45, 0.5);
}
</style>
