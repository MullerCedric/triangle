<template>
  <div>
    <div class="avatar-preview">
      <div class="avatar-preview__avatar"></div>
      <div class="avatar-preview__status"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AvatarPreview"
};
</script>

<style lang="scss" scoped>
.avatar-preview {
  position: relative;
  &__avatar {
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
    background-color: $dark;
    border: 1px solid $light;
  }
  &__status {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 2rem;
    background-color: #359837;
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>
