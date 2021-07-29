<template>
  <header class="header container">
    <nav class="nav">

      <div class="nav__logo_search">
        <a href="#" class="logo"><img src="img/logo.svg" alt="logo"></a>
        <a href="#" class="search"><img src="img/search.svg" alt="search"></a>
      </div>
      <div class="nav__menu">
        <label class="gamburg-menu" for="trigger"><img src="img/menu.svg" alt="menu"></label>
        <a class="profile-menu" href="#"><img src="img/profile.svg" alt="profile"></a>
        <a class="cart-menu" href="#"><img src="img/cart.svg" alt="cart"></a>
        <span class="cart-quantity">3</span>
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
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>