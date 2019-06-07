<template>
  <div>
    <div
      class="step0__dropzone"
      @dragenter="onDEnter"
      @dragover="onDOver"
      @dragleave="onDLeave"
      @drop="onDropFile"
      @click="onClickDialog"
    >
      <i class="el-icon-upload2"></i>
      <span>
        Glissez un/des fichiers sur cette zone ou cliquez ici pour ouvrir la
        fenêtre de sélection
      </span>
    </div>
    <file-lister @update-files="updateItems" :items="items"></file-lister>
  </div>
</template>

<script>
import FileLister from "../FileLister";
const { dialog } = require("electron").remote;

export default {
  name: "Step0",

  components: { FileLister },

  props: {
    items: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    generateId() {
      return Date.now() + "" + (Math.floor(Math.random() * 40) + 10);
    },
    onDEnter(e) {
      e.target.classList.add("step0__dropzone--drag-over");
    },
    onDOver(e) {
      e.preventDefault();
    },
    onDLeave(e) {
      e.target.classList.remove("step0__dropzone--drag-over");
    },
    onDropFile(e) {
      e.preventDefault();
      e.target.classList.remove("step0__dropzone--drag-over");

      this.handleFiles(e.dataTransfer.files);
    },
    onClickDialog() {
      dialog.showOpenDialog(
        {
          properties: ["openFile", "multiSelections"]
        },
        uploadedFiles => {
          if (!uploadedFiles) return;
          const formattedFiles = [];
          uploadedFiles.forEach(function(file) {
            formattedFiles.push({
              path: file,
              name: file.replace(/^.*[\\/]/, "")
            });
          });
          this.handleFiles(formattedFiles);
        }
      );
    },
    getNameAndExtension(fullName) {
      const regex = /^(.*)[.]([a-zA-Z1-9]+)$/;
      const separated = regex.exec(fullName);
      return {
        name: separated[1],
        extension: separated[2]
      };
    },
    handleFiles(uploadedFiles = []) {
      const files = this.items;
      for (let file of uploadedFiles) {
        const nameAndExtension = this.getNameAndExtension(file.name);
        files.push({
          id: this.generateId(),
          name: nameAndExtension.name,
          extension: nameAndExtension.extension,
          path: file.path,
          contentTypesIds: [],
          labels: [],
          tags: [],
          added_on: Date.now(),
          privacy_id: 0
        });
      }
      this.$emit("update-files", this.$_.uniqBy(files, "path"));
      this.$emit("next-page");
    },
    updateItems(newItems) {
      this.$emit("update-files", newItems);
    }
  }
};
</script>

<style lang="scss" scoped>
.step0 {
  &__dropzone {
    padding: 5rem 2rem;
    border-radius: 1rem;
    border: 1px dashed $lighter;
    background-color: $darkMain;
    &:hover {
      border-color: $lightest;
      cursor: pointer;
    }
    &--drag-over {
      background-color: $gradient1;
      border-color: $mainColor;
    }
  }
}
</style>
