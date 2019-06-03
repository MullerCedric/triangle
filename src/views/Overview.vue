<template>
  <div>
    <h1>Vue d'ensemble</h1>
    <section>
      <h2>Récemment joués</h2>
      <explorer />
    </section>
    <section>
      <h2>Mes Collections épinglées</h2>
      <explorer />
    </section>
    <section>
      <h2>Ajoutés récemment</h2>
      <explorer />
    </section>
  </div>
</template>

<script>
import Explorer from "../components/layout/Explorer";
export default {
  name: "Overview",
  components: { Explorer }
};
</script>

<style scoped></style>
