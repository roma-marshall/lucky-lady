<template>
  <carousel :items-to-show="1" :autoplay="3000" :transition="1000">
    <slide v-for="slide in 10" :key="slide">
<!--      {{ slide }}-->
      <img class="rounded-lg" src="https://sweepstastic.blob.core.windows.net/uploads/assets/Desktop_50_Off_welcome_offer_min_1_189c8c9916.png" alt="">
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}
</script>
