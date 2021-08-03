<template>
  <div class="header__main_catalog">
    <input type="checkbox" id="trigger" checked>
    <nav class="menu menu-open">
      <label class="menu__close menu-open" for="trigger">
        <img src="img/close.png" alt="close">
      </label>
      <div class="menu__wrapper">
        <h4 class="menu__heading">MENU</h4>
        <ul class="menu__name">
          <li>MAN
            <ul class="menu__name__list">
              <li>Accessories</li>
              <li>Bags</li>
              <li>Denim</li>
              <li>T-Shirts</li>
            </ul>
          </li>
        </ul>
        <ul class="menu__name">
          <li>WOMAN
            <ul class="menu__name__list">
              <li>Accessories</li>
              <li>Jackets & Coats</li>
              <li>Polos</li>
              <li>T-Shirts</li>
              <li>Shirts</li>
            </ul>
          </li>
        </ul>
        <ul class="menu__name">
          <li>KIDS
            <ul class="menu__name__list">
              <li>Accessories</li>
              <li>Jackets & Coats</li>
              <li>Polos</li>
              <li>T-Shirts</li>
              <li>Shirts</li>
              <li>TBags</li>
            </ul>
          </li>
        </ul>

      </div>

    </nav>
    <nav class="header__main_catalog__wrapper">
      <h1 class="new-arrivals">
        SHOPPING CART
      </h1>
    </nav>

  </div>
</template>

<script>
export default {
  name: "CartHeader"
}
</script>

<style scoped>

</style>