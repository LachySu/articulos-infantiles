<template>
  <div class="home">
    <main-header/>
    <filterr/>
    <bodyy/>
    <card/>
    <footerr/>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import Filterr from '@/components/section/Filter.vue'
import Bodyy from '@/components/Body.vue'
import Card from '@/components/Card.vue'
import Footerr from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    MainHeader,
    Filterr,
    Bodyy,
    Card,
    Footerr
  }
}
</script>
