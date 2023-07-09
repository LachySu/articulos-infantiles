<template>
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
    <div class="body">
        <div class="body__item">
            <img src="../assets/recursos/main/girl.png">
            <a class="body__item__link" href="#">For Girls</a>
        </div>
        <div class="body__item">
            <img src="../assets/recursos/main/boy.png">
            <a class="body__item__link" href="#">For Boys</a>
        </div>
        <div class="body__item">
            <img src="../assets/recursos/main/baby.png">
            <a class="body__item__link" href="#">For Babies</a>
        </div>
        <div class="body__item">
            <img src="../assets/recursos/main/toys.png">
            <a class="body__item__link" href="#">Home & Toys</a>
        </div>
        <div class="body__item">
            <img class="body__item__img" src="../assets/recursos/main/play.jpg">
            <a class="body__item__link" href="#">For Play</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MainHeader'
    }
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";

.banner{
    &__img{
        padding-left: 43%;
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