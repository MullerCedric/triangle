<template>
  <div>
    <template v-if="!item.id">
      <p>Veuillez sélectionner un élément pour afficher ses informations</p>
    </template>
    <section v-if="item.id">
      <h2>{{ item.name }}</h2>
      <el-button small>
        <i class="el-icon-caret-right" disabled></i>Lire seul
      </el-button>
      <dl>
        <dt>Extension</dt>
        <dd>{{ item.extension }}</dd>
        <dt>Métadonnées</dt>
        <dd>{{ item.labels }}</dd>
        <dt>Étiquettes</dt>
        <dd>{{ item.tags }}</dd>
      </dl>

      <el-button @click="unselectItem" small>Déselectionner</el-button>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",

  computed: {
    item() {
      return this.$store.state.selectedItem;
    }
  },

  methods: {
    unselectItem() {
      this.$store.commit("updateSelectedItem", {});
      this.$emit("close-tab");
    }
  }
};
</script>

<style scoped>
dt,
dd {
  display: block;
}
dd {
  margin-bottom: 0.75rem;
}
</style>
