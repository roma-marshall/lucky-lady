<template>
  <div class="p-1 sm:p-2 sm:ml-64 bg-[#191d32]">
    <div class="p-0.5 sm:p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 min:h-screen">
      <Header />
      <Carousel />
      <MainMenu />

      <div class="flex justify-between mx-2">
        <span class="text-lg text-[#e7f3f3] font-semibold">Top slots</span>
        <button type="button" class="bg-[#3a4065] text-white px-4 py-2 rounded-lg text-sm">Show All</button>
      </div>

      <div class="grid grid-cols-6 gap-4 my-4 mx-2">
        <div v-for="item in 6" class="relative">
          <div class="absolute right-1 top-1 z-50"><svg width="24" height="24" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="favouriteIconTitle" stroke="wheat" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="red" color="#9f4c4c"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="favouriteIconTitle">Favourite</title> <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"></path> </g></svg></div>
          <img class="aspect-square rounded-lg" src="https://sweepstastic.blob.core.windows.net/uploads/assets/Wild_Tiger_296c54216c.png" alt="games">
          <span class="text-white text-sm text-center">Wild Tiger</span>
        </div>
      </div>


      <div class="flex justify-between mx-2 mt-10">
        <span class="text-lg text-[#e7f3f3] font-semibold">Popular Games</span>
        <button type="button" class="bg-[#3a4065] text-white px-4 py-2 rounded-lg text-sm">Show All</button>
      </div>

      <div class="grid grid-cols-6 gap-4 my-4 mx-2">
        <div v-for="item in 6" class="relative">
          <div class="absolute right-1 top-1 z-50"><svg width="24" height="24" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="favouriteIconTitle" stroke="wheat" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="red" color="#9f4c4c"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="favouriteIconTitle">Favourite</title> <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"></path> </g></svg></div>
          <img class="aspect-square rounded-lg" src="https://sweepstastic.blob.core.windows.net/uploads/assets/pho_sho_logo_1bc4757a1e.webp" alt="games">
          <span class="text-white text-sm text-center">Pho Sho</span>
        </div>
      </div>

      <div class="flex justify-between mx-2 mt-10">
        <span class="text-lg text-[#e7f3f3] font-semibold">New Games</span>
        <button type="button" class="bg-[#3a4065] text-white px-4 py-2 rounded-lg text-sm">Show All</button>
      </div>

      <div class="grid grid-cols-6 gap-4 my-4 mx-2">
        <div v-for="item in 6" class="relative">
          <div class="absolute right-1 top-1 z-50"><svg width="24" height="24" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="favouriteIconTitle" stroke="wheat" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="red" color="#9f4c4c"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="favouriteIconTitle">Favourite</title> <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"></path> </g></svg></div>
          <img class="aspect-square rounded-lg" src="https://sweepstastic.blob.core.windows.net/uploads/assets/Classic_Fantastic_ce45d10045.png" alt="games">
          <span class="text-white text-sm text-center">Classic Fantastic</span>
        </div>
      </div>


    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Header from './Header.vue'
import Carousel from './Carousel.vue'
import MainMenu from './MainMenu.vue'
</script>