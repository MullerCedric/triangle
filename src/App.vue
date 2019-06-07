<template>
  <div class="layout">
    <main-header class="layout__header" />
    <main class="layout__body">
      <side-panel class="layout__side-panel" />
      <div class="layout__main-content"><router-view /></div>
      <side-panel
        zone="right"
        class="layout__side-panel layout__side-panel--left"
      />
    </main>
  </div>
</template>

<script>
import SidePanel from "./components/layout/SidePanel";
import MainHeader from "./components/layout/MainHeader";

export default {
  components: { MainHeader, SidePanel }
};
</script>

<style lang="scss" scoped>
@import url(assets/styles/generic.css);
@import url(assets/styles/base.css);

.layout {
  font-size: 1.5rem;
  color: $lighter;
  background-color: $darkest;
  display: flex;
  height: 100vh;
  flex-direction: column;

  &__body {
    flex: 1;
    display: flex;
    position: relative;
  }

  &__main-content {
    flex-grow: 1;
    overflow: auto;
    max-height: 100%;
    padding: 2.5rem 2rem 5rem;
  }
  &__side-panel {
    max-height: 100%;
  }

  /*&__nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }*/
}
</style>
