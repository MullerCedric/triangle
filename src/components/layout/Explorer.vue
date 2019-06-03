<template>
  <div class="explorer" v-if="this.files && this.files.length > 0">
    <div v-for="(file, key) in files" class="explorer__zone" :key="key">
      <div class="explorer__item" :class="'explorer__item--' + file.type">
        <div class="explorer__icon"></div>
        <div>{{ file.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Explorer",

  data() {
    return {
      files: []
    };
  },

  mounted() {
    for (let i = 0, total = Math.random() * 19 + 1; i < total; i++) {
      this.files.push({
        name: "Fichier " + i,
        type: (Math.random() * 5) % 2 ? "file" : "folder"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.explorer {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));

  &__zone {
    text-align: center;
    border-radius: 5px;
    padding: 0.5rem;
    background-color: rgba(3, 30, 60, 0.7);
    &:hover {
      background-color: rgba(3, 30, 60, 1);
    }
  }

  &__icon {
    width: 100px;
    height: 70px;
    display: inline-block;
    background-color: $light;
  }
}
</style>
