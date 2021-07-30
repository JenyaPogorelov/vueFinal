<template>
  <div class="main-cart__wrapper">
    <div class="main-cart__items">
      <div class="main-cart__items__info">
        <article class="main-cart__item">
          <img class="main-cart__item_img" src="img/cart/cartItem1.png" alt="cartItem1">
          <div class="main-cart__item_info">
            <div class="main-cart__item_info__heading">
              <h2>MANGO PEOPLE T-SHIRT</h2>
              <img src="img/cart/cross.svg" alt="cross">
            </div>

            <ul>
              <li>Price: <span>$300</span></li>
              <li>Color: Red</li>
              <li>Size: Xl</li>
              <li>Quantity:
                <div>2</div>
              </li>
            </ul>
          </div>
        </article>
        <article class="main-cart__item">
          <img class="main-cart__item_img" src="img/cart/cartItem2.png" alt="cartItem2">
          <div class="main-cart__item_info">
            <div class="main-cart__item_info__heading">
              <h2>MANGO PEOPLE T-SHIRT</h2>
              <img src="img/cart/cross.svg" alt="cross">
            </div>
            <ul>
              <li>Price: <span>$300</span></li>
              <li>Color: Red</li>
              <li>Size: Xl</li>
              <li>Quantity:
                <div>2</div>
              </li>
            </ul>
          </div>
        </article>
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
        <p class="main-cart__bye__sub_total">SUB TOTAL<span>$900</span></p>
        <p class="main-cart__bye__grand_total">GRAND TOTAL<span>$900</span></p>
        <hr class="main-cart__hr">
        <button class="main-cart__bye__button">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainCart"
}
</script>

<style scoped>

</style>