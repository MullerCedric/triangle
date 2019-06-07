<template>
  <div class="main-search-bar">
    <el-input
      placeholder="Rechercher un fichier ou une collection via un nom ou une métadonnée"
      v-model="query"
      class="main-search-bar__input"
    >
      <el-button slot="prepend" icon="el-icon-s-operation"></el-button>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  name: "MainSearchBar",

  data() {
    return {
      query: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.main-search-bar {
  &__input {
    max-width: 80rem;
  }
}
</style>
