<template>
  <div>
    <Carousel />
    <MainMenu />
    <Slots />
  </div>
</template>

<script setup>
import Carousel from './Carousel.vue'
import MainMenu from './MainMenu.vue'
import Slots from './Slots.vue'
</script>