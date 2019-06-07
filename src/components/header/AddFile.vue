<template>
  <el-popover placement="bottom" trigger="click" v-model="visible">
    <div class="add-file__content">
      <template v-if="!loading">
        <component
          :is="step"
          class="add-file__step"
          :items="items"
          @update-files="updateItems"
          @next-page="changeToPage(active + 2)"
        ></component>
        <div class="add-file__footer">
          <el-pagination
            v-if="items.length > 0"
            background
            small
            layout="prev, pager, next"
            :page-size="nbItemsPerPage"
            :current-page="currentPage"
            @current-change="changeToPage"
            :total="totalItems"
          >
          </el-pagination>
          <div class="add-file__actions">
            <el-button @click="reset">Annuler</el-button>
            <el-button
              @click="moveAndSave"
              type="primary"
              :disabled="currentPage != lastPage"
            >
              Enregistrer
            </el-button>
          </div>
        </div>
      </template>
      <template v-if="loading">
        <i class="el-icon-loading"></i>
        Déplacement de {{ items.length }}
        {{ items.length > 1 ? "fichiers" : "fichier" }}
      </template>
    </div>
    <el-button slot="reference" icon="el-icon-document-add" circle />
  </el-popover>
</template>

<script>
const { ipcRenderer } = require("electron");
import EventBus from "../../event-bus";

import * as steps from "./addFileSteps";

export default {
  name: "AddFile",

  components: { ...steps },

  data() {
    return {
      visible: false,
      loading: false,
      active: 0,
      nbItemsPerPage: 1,
      totalItems: 2,
      items: []
    };
  },

  computed: {
    step() {
      return "Step" + this.active;
    },
    currentPage() {
      return this.active + 1;
    },
    lastPage() {
      return Math.ceil(this.totalItems / this.nbItemsPerPage);
    }
  },

  methods: {
    changeToPage(pageNumber) {
      this.active = pageNumber - 1;
    },
    updateItems(newItems) {
      this.items = [...newItems];
      if (this.items.length < 1) this.changeToPage(1);
    },
    reset() {
      this.visible = false;
      this.items = [];
      EventBus.$emit("UPDATE_ITEMS");
      this.active = 0;
    },
    moveAndSave() {
      this.loading = true;

      const move = new Promise(function(resolve) {
        ipcRenderer.on("files-moved", resolve);
      });
      ipcRenderer.send("move-files", this.items);

      const save = new Promise(function(resolve) {
        ipcRenderer.on("data-saved", resolve);
      });
      ipcRenderer.send("save-data", this.items);

      Promise.all([move, save]).then(() => {
        this.loading = false;
        this.reset();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.add-file {
  &__content {
    width: 720px;
    max-width: 80vw;
    color: $light;
    padding: 1.25rem 1rem 2rem;
    box-sizing: border-box;
  }
  &__step {
    max-height: 80vh;
    overflow-y: auto;
  }
  &__footer {
    display: flex;
    align-items: center;
    margin-top: 4rem;
  }
  &__actions {
    flex: 1;
    text-align: right;
  }
}
</style>
