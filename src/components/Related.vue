<template>
  <p class="title">RELATED</p>
  <div class="related">
    <div class="related__card" v-for="n in 4" :key="n">
      <img class="related__card__img" src="../assets/recursos/for-girls/girls-1-1-580x870.jpg">
      <p class="related__card__p1">Categoria</p>
      <p class="related__card__p2">Nombre</p>
      <p class="related__card__p2">Precio</p>
      <p class="related__card__p1">Star</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Related'
  }
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";
.title{
  text-align: center;
  padding-top: 2em;
  padding-bottom: 1em;
  font-family: $ff-1;
  font-size: 20px;
  color: $color-2;
}
.related{
  display: flex;
  justify-content: center;
  &__card{
    text-align: center;
    padding-bottom: 6em;
    &__img{
      width: 180px;
      height: 260px;
      margin: 15px;
      padding-bottom: 5px;
    }
    &__p1{
      font-family: $ff-3;
      font-weight: bold;
      color: $color-1;
      padding-bottom: 5px;
    }
    &__p2{
      font-family: $ff-2;
      color: $color-2;
      padding-bottom: 5px;
    }
  }
}
</style>