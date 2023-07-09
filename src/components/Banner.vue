<template>
    <div class="banner">
       <p>20% off all kidswear + free shipping when you spend $60 or more</p>
    </div>
</template>

<script>
    export default {
        name: 'Banner'
    }
</script>

<style lang="scss" scoped>
@import "../scss/config.scss";
p {
 background-color: $color-1;
 color: white;
 text-align: center;
 padding-top: 15px;
 margin-top: 0px;
 height: 40px;
}
</style>