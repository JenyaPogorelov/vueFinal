<template>
  <div class="header__main">
    <input type="checkbox" id="trigger" checked>
    <div class="menu menu-open">
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

    </div>
    <img class="header__main__img" src="img/the_brandof.png" alt="the_brandof">
    <div class="header__main__heading">
      <div class="heading__positon">
        <div class="red-cube"></div>
        <h1><b>THE BRAND</b> <br> OF LUXERIOUS <span>FASHION</span></h1>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
}
</script>

<style scoped>

</style>