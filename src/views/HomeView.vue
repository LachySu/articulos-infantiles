<template>
  <div class="home">
    <banner/>
    <main-header/>
    <card />
    <foote />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import MainHeader from '@/components/MainHeader.vue'
import Card from '@/components/Card.vue'
import Foote from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
    MainHeader,
    Card,
    Foote
  }
}
</script>
