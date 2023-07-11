<template>
  <main-header/>
  <p class="title">Printed Blouse</p>
  <div class="content">
    <div class="content__image">
      <img class="content__image__img" src="../../assets/recursos/for-girls/girls-10-580x870.jpg">
    </div>
    <div class="content__info">
      <p class="content__info__price">$ 23.00</p>
      <p class="content__info__star">Star</p>
      <p class="content__info_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus asperiores corporis quisquam veritatis pariatur quos aliquid quia explicabo tenetur perspiciatis voluptas illo, laudantium a officia odit, possimus quas incidunt totam.</p>
      <p class="content__info__icon">Like-Icon</p>
      <ul class="content__info__table">
        <li>SKU</li>
        <li>Category</li>
        <li>Tags</li>
      </ul>
    </div>
  </div>
  <div class="description">
    <p class="description__title">DESCRIPTION</p>
    <p class="description__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, recusandae incidunt. Aut odio consectetur placeat praesentium laudantium eius animi ullam alias quo? Sint atque repellat nemo illo eius voluptate soluta? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum quas ipsum obcaecati quos aliquam voluptate! Aspernatur, odit molestias quas sed quod asperiores, ad at, ratione optio vero minima nihil tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quos dignissimos aperiam corporis repudiandae expedita quidem magnam dolores ducimus doloremque, soluta impedit consequuntur placeat reprehenderit. Recusandae laborum deserunt facere ipsum?</p>
    <br>    
    <p class="description__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, recusandae incidunt. Aut odio consectetur placeat praesentium laudantium eius animi ullam alias quo? Sint atque repellat nemo illo eius voluptate soluta? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum quas ipsum obcaecati quos aliquam voluptate! Aspernatur, odit molestias quas sed quod asperiores, ad at, ratione optio vero minima nihil tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quos dignissimos aperiam corporis repudiandae expedita quidem magnam dolores ducimus doloremque, soluta impedit consequuntur placeat reprehenderit. Recusandae laborum deserunt facere ipsum?</p>    
  </div>
  <related/>
  <footerr/>
</template>

<script>
import apiProductos from '@/api/productos';
import MainHeader from '../MainHeader.vue';
import Footerr from '../Footer.vue';
import Related from '../Related.vue'

  export default {
    name: 'Girls',
    components: {
      MainHeader,
      Related,
      Footerr
    },
  }
</script>

<style lang="scss" scoped>
@import "../../scss/config.scss";
  .title{
    padding-top: 2em;
    padding-bottom: 100px;
    margin-top: 15px;
    margin-bottom: 50px;
    color: $color-2;
    font-size: 25px;
    border: 1px dashed gray;
    text-align: center;

  }
  .content{
    display: flex;
    &__image{
      padding-left: 150px;
      &__img{
        width: 300px;
        height: 450px;
      }
    }
    &__info{
      margin-left: 60px;
      padding-left: 40px;
    }
  }
  .description{
    padding: 3em;
    &__title{
      padding: 1em;
      text-align: center;
      font-family: $ff-1;
      font-size: 20px;
      color: $color-2;
    }
    &__text{
      font-family: $ff-2;
    }
  }
</style>