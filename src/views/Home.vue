<template>
  <main class="main container">
    <MainCollection />
    <Gallery />
    <Delivery />
  </main>
</template>

<script>
import MainCollection from "@/components/MainCollection.vue";
import Gallery from "@/components/Gallery.vue";
import Delivery from "@/components/Delivery.vue";
export default {
  name: 'Home',
  components: {
    MainCollection,
    Gallery,
    Delivery
  }
}
</script>
