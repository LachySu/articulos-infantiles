<template>
 <div class="body">
        <div class="body__item">
            <img src="../../assets/recursos/main/girl.png">
            <router-link class="body__item__link" :to="{name: 'girls'}">For Girls</router-link>
        </div>
        <div class="body__item">
            <img src="../../assets/recursos/main/boy.png">
            <a class="body__item__link" href="#">For Boys</a>
        </div>
        <div class="body__item">
            <img src="../../assets/recursos/main/baby.png">
            <a class="body__item__link" href="#">For Babies</a>
        </div>
        <div class="body__item">
            <img src="../../assets/recursos/main/toys.png">
            <a class="body__item__link" href="#">Home & Toys</a>
        </div>
        <div class="body__item">
            <img class="body__item__img" src="../../assets/recursos/main/play.jpg">
            <a class="body__item__link" href="#">For Play</a>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Filter'
  }
</script>

<style lang="scss" scoped>
@import "../../scss/config.scss";
.body{
    display: flex;
    justify-content: center;
    &__item{
        margin: 30px;
        display: grid;
        &__img{
            border-radius: 50%;
        }
        &__link{
           text-decoration: none; 
           font-family: $ff-2;
           color: $color-2;
           font-size: 20px;
           text-align: center;              
        }
    }
}
</style>