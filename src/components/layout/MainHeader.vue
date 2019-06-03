<template>
  <header class="main-header">
    <div>Lecteur (avec condition)</div>
    <div>Nouveau dossier</div>
    <div>Nouveau fichier</div>
    <div class="main-header__search">Recherche</div>
    <div>Avatar</div>
    <div>Configuration</div>
  </header>
</template>

<script>
export default {
  name: "MainHeader"
};
</script>

<style lang="scss" scoped>
.main-header {
  background: linear-gradient(to bottom right, $gradient1 15%, $gradient2);
  border-bottom: 1px solid $mainColor;
  padding: 2rem 5rem;
  display: flex;
  align-items: center;
  > * {
    margin-left: 3rem;
  }
  &__search {
    flex: 1;
  }
}
</style>
