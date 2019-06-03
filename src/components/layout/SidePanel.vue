<template>
  <div
    v-if="tabs && tabs.length > 0"
    class="side-panel"
    :class="'side-panel--' + zone"
  >
    <ul class="side-panel__tabs">
      <li
        v-for="(tab, key) in tabs"
        :key="key"
        @click="updateTab(tab.machine_name)"
        class="side-panel__tab"
        :class="{
          'side-panel__tab--opened': tab.machine_name === currentlyOpened
        }"
      >
        {{ tab.name }}
      </li>
    </ul>
    <div v-if="isOpen" class="side-panel__panel">
      <div v-if="toolbar" class="side-panel__toolbar">
        <span class="side-panel__toolbar-buttons">
          <button @click="isOpen = false" class="side-panel__toolbar-button">
            _
          </button>
        </span>
      </div>
      <component :is="currentlyOpened" class="side-panel__content" />
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";

import * as tabs from "./tabs";

export default {
  name: "SidePanel",

  components: { ...tabs },

  props: {
    zone: {
      type: String,
      default: "left"
    },
    toolbar: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      name: "Pas encore de nom dispo",
      tabs: [],
      isOpen: true,
      currentlyOpened: "Shortcuts"
    };
  },

  mounted() {
    this.tabs = ipcRenderer.sendSync("get-req", "tabs", { zone: this.zone });
  },

  methods: {
    updateTab(machineName) {
      if (this.currentlyOpened === machineName) {
        this.isOpen = !this.isOpen;
        return;
      }
      this.currentlyOpened = machineName;
      this.isOpen = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.side-panel {
  display: flex;

  &__tabs {
    background-color: $dark;
    writing-mode: vertical-lr;
    display: flex;
  }
  &__tab {
    transform: rotate(180deg);
    display: block;
    white-space: nowrap;
    cursor: pointer;
    padding: 0.75em 0.5em;
    font-size: 1.25rem;

    &--opened {
      background-color: $darker;
    }
  }

  &__panel {
    flex: 1;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    text-align: left;
    background-color: $darkMain;
  }

  &__content {
    flex: 1;
    overflow-y: auto;
    resize: horizontal;
    min-width: 175px;
    width: 15vw;
    max-width: 30vw;
    padding: 3.5rem 1.75rem;
  }

  &__toolbar {
    margin: 0.25em 0 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-button {
      display: inline-block;
      padding: 0.25em 0.5em;
      border: 1px solid $light;
      border-radius: 3px;
      background-color: $darker;
      color: $lighter;
      cursor: pointer;
    }
  }
}
.side-panel--right {
  flex-direction: row-reverse;
  & .side-panel {
    &__tab {
      transform: none;
    }
    &__content {
      width: 22vw;
      resize: none;
    }
  }
}
</style>
