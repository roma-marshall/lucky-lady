<template>
  <div class="p-1 sm:p-2 sm:ml-64 bg-[#191d32]">
    <div class="p-0.5 sm:p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 min:h-screen">
      <Header />
<!--      <Carousel />-->
<!--      <MainMenu />-->
      <RewardStore />
<!--      <Slots />-->
    </div>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Carousel from './Carousel.vue'
import MainMenu from './MainMenu.vue'
import Slots from './Slots.vue'
import RewardStore from './RewardStore.vue'
</script>