<template>
  <header class="main-header">
    <mini-player v-if="false"></mini-player>
    <add-dir></add-dir>
    <add-file></add-file>
    <main-search-bar class="main-header__search"></main-search-bar>
    <avatar-preview></avatar-preview>
    <settings></settings>
  </header>
</template>

<script>
import MiniPlayer from "../header/MiniPlayer";
import AddDir from "../header/AddDir";
import AddFile from "../header/AddFile";
import MainSearchBar from "../header/MainSearchBar";
import AvatarPreview from "../header/AvatarPreview";
import Settings from "../header/Settings";

export default {
  name: "MainHeader",
  components: {
    Settings,
    AvatarPreview,
    MainSearchBar,
    MiniPlayer,
    AddDir,
    AddFile
  }
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
    &:first-child {
      margin-left: 0;
    }
  }
  &__search {
    flex: 1;
    text-align: center;
  }
}
</style>
