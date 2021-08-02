<template>
  <div class="main-cart__wrapper">
    <div class="main-cart__items">
      <div class="main-cart__items__info">

        <CartItem v-bind:key="cartItem.id"
                  v-bind:cartItem="cartItem"
                  v-for="cartItem of cartList"
        />

      </div>
      <div class="main-cart__items__buttons">
        <button>clear shopping cart</button>
        <button>continue shopping</button>
      </div>
    </div>
    <div class="main-cart__form_buy">
      <div class="main-cart__form">

        <form action="">
          <h2>SHIPPING ADRESS</h2>
          <input type="text" placeholder="Bangladesh">
          <input type="text" placeholder="State">
          <input type="text" placeholder="Postcode / Zip">
          <button>get a quote</button>
        </form>
      </div>
      <div class="main-cart__bye">
        <p class="main-cart__bye__sub_total">SUB TOTAL<span>${{ totalPrice }}</span></p>
        <p class="main-cart__bye__grand_total">GRAND TOTAL<span>${{ totalPrice }}</span></p>
        <hr class="main-cart__hr">
        <button class="main-cart__bye__button">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
export default {
  name: "MainCart",
  components: {
    CartItem
  },
  computed: {
    cartList() {
      return this.$store.getters.getCart;
    },
    totalPrice() {
      return this.cartList.reduce((acc, price) => {
        return acc + (price.price * price.quantity)
      }, 0).toFixed(2);
    }
  }
}
</script>

<style scoped>

</style>