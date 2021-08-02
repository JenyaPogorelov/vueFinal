<template>
  <section class="gallery">
    <div class="gallery__heading">
      <h2>
        Fetured Items
      </h2>
      <span>Shop for items based on what we featured in this week</span>
    </div>
    <div class="gallery__wrapper">

      <Card v-bind:key="good.id"
            v-bind:good="good"
            v-for="good of catalog"
      />

    </div>
    <button class="gallery__browse_all_product">
      Browse All Product
    </button>
  </section>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "Gallery",
  components: {
    Card
  },
  computed: {
    catalog() {
      return this.$store.getters.getCatalog
    }
  }
}
</script>

<style scoped>

</style>