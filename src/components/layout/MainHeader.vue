<template>
  <header class="main-header">
    <div>Lecteur (avec condition)</div>
    <div>Nouveau dossier</div>
    <add-file></add-file>
    <div class="main-header__search">Recherche</div>
    <div>Avatar</div>
    <div>Configuration</div>
  </header>
</template>

<script>
import AddFile from "../header/AddFile";

export default {
  name: "MainHeader",
  components: { AddFile }
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
