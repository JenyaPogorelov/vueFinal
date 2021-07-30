<template>
  <footer class="footer container">

    <div class="upper-footer">
      <div class="upper-footer__wrapper">
        <section class="upper-footer__left">
          <figure class="subscribe-user">
            <img class="subscribe-user__img" src="img/subscribeImg.png" alt="subscribeImg">
            <figcaption class="subscribe-user__text">
              “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“
            </figcaption>
          </figure>
        </section>

        <section class="upper-footer__right">
          <h2 class="upper-footer__right__heading">SUBSCRIBE</h2>
          <span class="upper-footer__right__text">FOR OUR NEWLETTER AND PROMOTION</span>
          <form class="upper-footer__right__form" action="#">
            <input class="upper-footer__right__form_input" type="email" placeholder="Enter Your Email">
            <button class="upper-footer__right__form_button">Subscribe</button>
          </form>
        </section>
      </div>
    </div>
    <div class="lower-footer">
      <div class="lower-footer-wrapper">
        <div class="lower-footer__all_rights_reserved">
          &copy; 2021 Brand All Rights Reserved.
        </div>
        <figure class="lower-footer__social_networks">

          <a href="#">
            <img src="img/facebook.svg" alt="">
          </a>


          <a href="#">
            <img src="img/instagram.svg" alt="">
          </a>


          <a href="#">
            <img src="img/pinterest.svg" alt="">
          </a>


          <a href="#">
            <img src="img/twitter.svg" alt="">
          </a>


        </figure>
      </div>
    </div>

  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>