<template>
  <article class="main-cart__item" :id="cartItem.id">
    <img class="main-cart__item_img" :src="'img/' + cartItem.image" alt="cartItem1">
    <div class="main-cart__item_info">
      <div class="main-cart__item_info__heading">
        <h2>{{cartItem.title}}</h2>
        <img src="img/cart/cross.svg" alt="cross" >
      </div>

      <ul>
        <li>Price: <span>{{cartItem.price}}$</span></li>
        <li>Color: Red</li>
        <li>Size: Xl</li>
        <li>Quantity:
          <div>{{cartItem.quantity}}</div>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  name: "CartItem",
  props: ['cartItem']
}
</script>

<style scoped>

</style>