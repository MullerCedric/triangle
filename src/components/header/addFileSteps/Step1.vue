<template>
  <file-lister @update-files="updateItems" :items="items">
    <template v-slot:default="slotProps">
      <div>{{ slotProps.file.path }}</div>
      <label v-for="ct in availableContentTypes" :key="ct.id">
        <input
          type="checkbox"
          :value="ct.id"
          @click="toggleContentType(slotProps.file.path, ct.id)"
        />
        <span>{{ ct.name }}</span>
      </label>
      <single-collapse>
        <template slot="title">
          Lier des données à ce fichier
        </template>
        <div>
          <label>
            Nom
            <input type="text" v-model="slotProps.file.name" />
          </label>
          <div v-for="label in slotProps.file.labels" :key="label.id">
            <label>
              {{ label.name }}
              <input type="text" v-model="label.value" />
            </label>
          </div>
          <tags-editor
            @update-tags="slotProps.file.tags = $event"
          ></tags-editor>
        </div>
      </single-collapse>
    </template>
  </file-lister>
</template>

<script>
import { ipcRenderer } from "electron";

import FileLister from "../FileLister";
import SingleCollapse from "../../SingleCollapse";
import TagsEditor from "../../TagsEditor";

export default {
  name: "Step1",

  components: { TagsEditor, SingleCollapse, FileLister },

  data() {
    return {
      availableContentTypes: []
    };
  },

  props: {
    items: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    updateItems(newItems) {
      this.$emit("update-files", newItems);
    },
    fetchContentType() {
      this.availableContentTypes = ipcRenderer.sendSync(
        "get-req",
        "content_types"
      );
    },
    toggleContentType(filePath, ctId) {
      const files = this.items;
      const indexOfCurrentFile = this.$_.findIndex(files, { path: filePath });
      const updatedContentTypes = this.$_.xor(
        files[indexOfCurrentFile].contentTypesIds,
        [...ctId]
      );
      files[indexOfCurrentFile].contentTypesIds = [...updatedContentTypes];
      this.$emit("update-files", files);
      this.fetchLabels(indexOfCurrentFile, updatedContentTypes);
    },
    fetchLabels(indexOfCurrentFile, fileContentTypes) {
      window.console.log("Fetch Labels", indexOfCurrentFile, fileContentTypes);
      // The relationships shouldn't be done on the front but I couldn't find
      // another solution without an SQL Data Base ¯\_(ツ)_/¯

      const allCtAndLabRel = ipcRenderer.sendSync(
        "get-req",
        "content_type_label"
      );
      const selectedRel = this.$_.filter(allCtAndLabRel, relationship => {
        return fileContentTypes.includes(relationship.content_type_id);
      });
      const labelsIds = this.$_.map(selectedRel, "label_id");
      const allLabels = ipcRenderer.sendSync("get-req", "labels");
      const labelNames = this.$_.filter(allLabels, label => {
        return labelsIds.includes(label.id);
      });

      // Update labels without deleting used values
      const files = this.items;
      files[indexOfCurrentFile].labels = this.$_.unionBy(
        files[indexOfCurrentFile].labels,
        labelNames,
        "id"
      );
      files[indexOfCurrentFile].labels = this.$_.intersectionBy(
        files[indexOfCurrentFile].labels,
        labelNames,
        "id"
      );

      this.$emit("update-files", files);
    },
    saveFiles() {
      window.console.log(this.items);
    }
  },

  mounted() {
    this.fetchContentType();
  }
};
</script>

<style lang="scss" scoped></style>
