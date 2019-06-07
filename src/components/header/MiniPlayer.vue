<template>
  <div v-if="showPlayer"></div>
</template>

<script>
export default {
  name: "MiniPlayer",

  data() {
    return {
      showPlayer: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
