<template>
    <div class="banner1">
       <p>20% off all kidswear + free shipping when you spend $60 or more</p>
    </div>
    <div class="banner">
        <img class="banner__img" src="../assets/recursos/main/logo.png">        
    </div>
    <div class="header">
        <ul class="header__menu">
            <li class="header__menu__item">
                <a class="header__menu__item__link" href="#">Home</a>
            </li>
            <li class="header__menu__item">
                <a class="header__menu__item__link" href="#">Shop Features</a>
            </li>
            <li class="header__menu__item">
                <a class="header__menu__item__link" href="#">Clothes</a>
            </li>
            <li class="header__menu__item">
                <a class="header__menu__item__link" href="#">Pages</a>
            </li>
            <li class="header__menu__item">
                <a class="header__menu__item__link" href="#">ShortCodes</a>
            </li>
            <li class="header__menu__item">
                <a class="header__menu__item__link" href="#">Post Types</a>
            </li>
            <li class="header__menu__item">
                <a class="header__menu__item__link" href="#"><i class="fas fa-heart"></i></a>
            </li>
            <li class="header__menu__item">
                <a class="header__menu__item__link" href="#"><i class="fas fa-cart-shopping"></i></a>
            </li>
            <li class="header__menu__item">
                <a class="header__menu__item__link" href="#"><i class="fas fa-search"></i></a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'MainHeader'
    }
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";
.banner1{
    background-color: $color-1;
    margin-top: 0px;
    height: 30px;
}
p {
 color: white;
 text-align: center;
 padding-top: 4px;
}
.banner{
    &__img{
        padding-left: 38%;
        padding-top: 2em;
        padding-bottom: 2em;
    }
}
.header{
    &__menu{
        display: flex;
        justify-content: center;
        list-style: none;
        &__item{
            margin: 10px;
            &__link{
                display: block;
                text-decoration: none;
                color: $color-2;
                font-family: $ff-1;
                font-size: 20px;
            }
        }
    }
}
</style>