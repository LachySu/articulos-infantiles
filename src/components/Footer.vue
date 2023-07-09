<template>
  <section class="pattern">
    <div class="footer">
    <img class="footer__img2" src="../assets/recursos/main/logo(1).png">
    <a class="footer__link" href="#">Link</a>
    <a class="footer__redes" href="#">Redes</a>
    <p class="footer__policy">Privacy Policy</p>
  </div>
  </section>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";
body{
  padding: 0%;
  margin: 0%;
}
.footer{
  padding: 120px;
  text-align: center;
}
 section{
  width: 100%;
  min-height: 300px;
}
.pattern {
  position: relative;
  background-color: $color-4;
  background-image: linear-gradient(315deg,#f8be6c);
}
.pattern:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 250px;
  background: url(https://media.geeksforgeeks.org/wp-content/uploads/20200326181026/wave3.png);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
