<template>
  <div>
    <h1>Vue d'ensemble</h1>
    <section v-if="recentFiles.length === 0">
      <h2>Vous n'avez importé aucun fichier pour le moment</h2>
      <p>
        Vous pouvez le faire à tout moment en cliquant sur l'icône
        <i class="el-icon-document-add"></i> dans l'en-tête
      </p>
    </section>
    <template v-if="recentFiles.length > 0">
      <section v-if="lastPlayed.length > 0">
        <h2>Récemment joués</h2>
        <explorer />
      </section>
      <section v-if="pinnedItems.length > 0">
        <h2>Mes Collections épinglées</h2>
        <explorer />
      </section>
      <section v-if="recentFiles.length > 0">
        <h2>Ajoutés récemment</h2>
        <explorer :files="recentFiles" />
      </section>
    </template>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";

import Explorer from "../components/layout/Explorer";

export default {
  name: "Overview",

  components: { Explorer },

  data() {
    return {
      lastPlayed: [],
      pinnedItems: [],
      recentFiles: [],
      nbRecent: 6
    };
  },

  computed: {
    hasFiles() {
      return this.files.length > 0;
    }
  },

  methods: {
    fetchLastNthFiles(nth) {
      return ipcRenderer.sendSync("get-last-req", "files", nth);
    }
  },

  mounted() {
    window.console.log("Overview mounted");
    this.recentFiles = this.fetchLastNthFiles(this.nbRecent);
    window.console.log(this.recentFiles);
  }
};
</script>

<style lang="scss" scoped></style>
