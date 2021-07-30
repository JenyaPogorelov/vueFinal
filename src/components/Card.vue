<template>
  <div class="gallery__card" :id="'card-' + good.id">
    <div class="gallery__card__wrapper">
      <img class="gallery__card__img" :src="'img/' + good.image" alt="fetured_Items_2">
      <div @click="addToCart" data-item="2" class="gallery__card__hidden">
        <label>
          <img src="img/cart.svg" alt="">
          <span class="gallery__addToCart">Add to Cart</span>
        </label>
      </div>
    </div>
    <div class="gallery__card__info">
      <h3 class="gallery__card__heading">{{good.title}}</h3>
      <span class="gallery__card__text">{{good.description}}</span>
      <span class="gallery__card__price">$ {{good.price}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['good'],
  methods: {
    addToCart() {
      this.$store.dispatch('loadToCart', this.good)
    }
  }
}
</script>

<style scoped>

</style>