<template>
  <div class="card">
    <a class="card__link" href="#">INSTAGRAM @KIDSRUS</a>
    <img class="card__img1" src="../assets/recursos/main/home-8.png">
    <img class="card__img2" src="../assets/recursos/referencias/footer.gif">
  </div>
</template>

<script>
  export default {
    name: 'Card'
  }
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";
.card{
  text-align: center;
  display: grid;
  padding: 2em;
  &__link{
    text-decoration: none;
    color: $color-2;
    font-size: 25px;
    padding: 1em;
  }
  &__img1{
    margin-left: 48%;
  }
  &__img2{
    margin-left: 15%;
    padding: 2em;
  }
}
</style>