<template>
  <header class="header container">
    <nav class="nav">

      <div class="nav__logo_search">
        <router-link to="/"  class="logo"><img src="img/logo.svg" alt="logo"></router-link>
        <a  class="search"><img src="img/search.svg" alt="search"></a>
        <input type="text" @change="searchChangeBtnHandler($event)">
      </div>
      <div class="nav__menu">
        <label class="gamburg-menu" for="trigger"><img src="img/menu.svg" alt="menu"></label>
        <a class="profile-menu" href="#"><img src="img/profile.svg" alt="profile"></a>
        <router-link class="cart-menu" to="Cart"><img src="img/cart.svg" alt="cart"></router-link>
        <span class="cart-quantity">{{ cartQuantity }}</span>
        <div class="cardItem hideBlock">
          <div class="cardItem__wrapper">
            <div class="cardItem__info">
              <div class="cardItem__info_headingProduct">Товар</div>
            </div>
            <div class="cardItem__info">
              <div class="cardItem__info_headingProduct">Стоимость</div>
            </div>
            <div class="cardItem__info">
              <div class="cardItem__info_headingProduct">Количство</div>
            </div>
            <div class="cardItem__info">
              <div class="cardItem__info_headingProduct">Сумма</div>
            </div>
            <hr class="cardItem__hr">
          </div>
        </div>
      </div>
    </nav>

    <HomeHeader v-if="$router.currentRoute.value.name === 'Home'" />
    <CartHeader v-if="$router.currentRoute.value.name === 'Cart'" />
<!--    <div class="header__main">-->
<!--      <input type="checkbox" id="trigger" checked>-->
<!--      <div class="menu menu-open">-->
<!--        <label class="menu__close menu-open" for="trigger">-->
<!--          <img src="img/close.png" alt="close">-->
<!--        </label>-->
<!--        <div class="menu__wrapper">-->
<!--          <h4 class="menu__heading">MENU</h4>-->
<!--          <ul class="menu__name">-->
<!--            <li>MAN-->
<!--              <ul class="menu__name__list">-->
<!--                <li>Accessories</li>-->
<!--                <li>Bags</li>-->
<!--                <li>Denim</li>-->
<!--                <li>T-Shirts</li>-->
<!--              </ul>-->
<!--            </li>-->
<!--          </ul>-->
<!--          <ul class="menu__name">-->
<!--            <li>WOMAN-->
<!--              <ul class="menu__name__list">-->
<!--                <li>Accessories</li>-->
<!--                <li>Jackets & Coats</li>-->
<!--                <li>Polos</li>-->
<!--                <li>T-Shirts</li>-->
<!--                <li>Shirts</li>-->
<!--              </ul>-->
<!--            </li>-->
<!--          </ul>-->
<!--          <ul class="menu__name">-->
<!--            <li>KIDS-->
<!--              <ul class="menu__name__list">-->
<!--                <li>Accessories</li>-->
<!--                <li>Jackets & Coats</li>-->
<!--                <li>Polos</li>-->
<!--                <li>T-Shirts</li>-->
<!--                <li>Shirts</li>-->
<!--                <li>TBags</li>-->
<!--              </ul>-->
<!--            </li>-->
<!--          </ul>-->

<!--        </div>-->

<!--      </div>-->
<!--      <img class="header__main__img" src="img/the_brandof.png" alt="the_brandof">-->
<!--      <div class="header__main__heading">-->
<!--        <div class="heading__positon">-->
<!--          <div class="red-cube"></div>-->
<!--          <h1><b>THE BRAND</b> <br> OF LUXERIOUS <span>FASHION</span></h1>-->
<!--        </div>-->

<!--      </div>-->

<!--    </div>-->
  </header>
</template>

<script>
import HomeHeader from "./HomeHeader.vue";
import CartHeader from "./CartHeader.vue";
export default {
  name: "Header",
  components: {CartHeader, HomeHeader},
  methods: {
    searchChangeBtnHandler(event) {
      this.$store.commit('searchHandler', event.currentTarget.value);
    }
  },
  computed: {
    cartQuantity() {
      return this.$store.getters.getCart.reduce((acc, good) => acc + good.quantity, 0)
    }
  }
}
</script>

<style scoped>

</style>