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

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-4 mx-2">
        <div v-for="item in topSlots" class="relative cursor-pointer" @click="openModal(item.name, item.imgScr)">
          <div class="absolute right-1 top-1 z-50"><svg width="24" height="24" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="favouriteIconTitle" stroke="wheat" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="red" color="#9f4c4c"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="favouriteIconTitle">Favourite</title> <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"></path> </g></svg></div>
          <img class="aspect-square rounded-lg" :src="item.imgScr" alt="games">
          <span class="text-white text-sm text-center">{{ item.name }}</span>
        </div>
      </div>


      <div class="flex justify-between mx-2 mt-10">
        <span class="text-lg text-[#e7f3f3] font-semibold">Popular Games</span>
        <button type="button" class="bg-[#3a4065] text-white px-4 py-2 rounded-lg text-sm">Show All</button>
      </div>

      <div class="grid grid-cols-6 gap-4 my-4 mx-2">
        <div v-for="item in popularGames" class="relative">
          <div class="absolute right-1 top-1 z-50"><svg width="24" height="24" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="favouriteIconTitle" stroke="wheat" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="red" color="#9f4c4c"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="favouriteIconTitle">Favourite</title> <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"></path> </g></svg></div>
          <img class="aspect-square rounded-lg" :src="item.imgScr" alt="games">
          <span class="text-white text-sm text-center">{{ item.name }}</span>
        </div>
      </div>

      <div class="flex justify-between mx-2 mt-10">
        <span class="text-lg text-[#e7f3f3] font-semibold">New Games</span>
        <button type="button" class="bg-[#3a4065] text-white px-4 py-2 rounded-lg text-sm">Show All</button>
      </div>

      <div class="grid grid-cols-6 gap-4 my-4 mx-2">
        <div v-for="item in newGames" class="relative">
          <div class="absolute right-1 top-1 z-50"><svg width="24" height="24" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="favouriteIconTitle" stroke="wheat" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="red" color="#9f4c4c"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="favouriteIconTitle">Favourite</title> <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"></path> </g></svg></div>
          <img class="aspect-square rounded-lg" :src="item.imgScr" alt="games">
          <span class="text-white text-sm text-center">{{ item.name }}</span>
        </div>
      </div>



      <ModalComponent :isOpen="isModalOpened" @modal-close="closeModal" @submit="submitHandler" name="first-modal">
        <template #header>&nbsp;</template>
        <template #content>
          <div class="flex flex-col">
            <div class="absolute right-1 top-1 z-50"><svg width="24" height="24" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="favouriteIconTitle" stroke="wheat" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="red" color="#9f4c4c"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="favouriteIconTitle">Favourite</title> <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"></path> </g></svg></div>
            <img class="aspect-square rounded-lg" :src="img" alt="games">
            <span class="text-white text-lg text-center mt-4">{{ name }}</span>
            <span class="text-white text-sm text-center mt-4">Some descriptions</span>
            <div class="p-0.5 mt-4 rounded-lg bg-gradient-to-b from-amber-600 to-yellow-400">
              <div class="bg-[#191d32] rounded-lg">
                <a href="#" class="flex items-center p-3 rounded-lg group">
                  <button type="button" class="flex-1 whitespace-nowrap text-xs text-white uppercase">Play</button>
                </a>
              </div>
            </div>
          </div>
        </template>
        <template #footer>&nbsp;</template>
      </ModalComponent>


    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import ModalComponent from './ModalComponent.vue'
import Header from './Header.vue'
import Carousel from './Carousel.vue'
import MainMenu from './MainMenu.vue'

const isModalOpened = ref(false)
const name = ref('default')
const img = ref('default')

const openModal = (gameName, gameImg) => {
  isModalOpened.value = true
  name.value = gameName
  img.value = gameImg
};
const closeModal = () => {
  isModalOpened.value = false
};

const submitHandler = ()=>{
  //here you do whatever
}



const topSlots = ref([
  {
    name: 'Wild Tiger',
    imgScr: 'https://sweepstastic.blob.core.windows.net/uploads/assets/Wild_Tiger_296c54216c.png',
  },
  {
    name: 'Pho Sho',
    imgScr: 'https://sweepstastic.blob.core.windows.net/uploads/assets/pho_sho_logo_1bc4757a1e.webp',
  },
  {
    name: 'Classic Fantastic',
    imgScr: 'https://sweepstastic.blob.core.windows.net/uploads/assets/Classic_Fantastic_ce45d10045.png',
  },
  {
    name: 'Tycoons Billionaire',
    imgScr: 'https://sweepstastic.blob.core.windows.net/uploads/assets/Tycoons_Billionaire_Bucks_e95cfed39c.png',
  },
  {
    name: 'Wish granted',
    imgScr: 'https://sweepstastic.blob.core.windows.net/uploads/assets/wish_granted_ea8c02fda1.jpg',
  },
  {
    name: 'Wild Cash',
    imgScr: 'https://sweepstastic.blob.core.windows.net/uploads/assets/Wild_Cash_x9990_9c3ad271a3.png',
  }
])

const popularGames = ref([
  {
    name: 'Gemhalla',
    imgScr: 'https://sweepstastic.blob.core.windows.net/uploads/assets/Gemhalla_min_a1e6ae9dbc.png',
  },
  {
    name: 'Fruit Million',
    imgScr: 'https://sweepstastic.blob.core.windows.net/uploads/assets/Fruit_Million_5b7100ff04.png',
  },
  {
    name: 'Smoking Pistols',
    imgScr: 'https://sweepstastic.blob.core.windows.net/uploads/assets/Smoking_Pistols_6aa24af8a8.png',
  },
  {
    name: 'Lucky 8',
    imgScr: 'https://sweepstastic.blob.core.windows.net/uploads/assets/Lucky_8_190x190_e23f35a547.png',
  },
  {
    name: 'Book of Panda',
    imgScr: 'https://sweepstastic.blob.core.windows.net/uploads/assets/Book_of_Panda_Megaways_min_6ba0cc6a0d.png',
  },
  {
    name: 'Hottest 666',
    imgScr: 'https://sweepstastic.blob.core.windows.net/uploads/assets/Hottest_666_b38eedba0f.png',
  }
])

const newGames = ref([
  {
    name: 'TNT Bonanza',
    imgScr: 'https://sweepstastic.blob.core.windows.net/uploads/assets/TNT_Bonanza_5bd7a7b223.png',
  },
  {
    name: 'Thai Blossom',
    imgScr: 'https://sweepstastic.blob.core.windows.net/uploads/assets/Thai_Blossom_ce761ccb40.png',
  },
  {
    name: 'Flaming Fruits',
    imgScr: 'https://sweepstastic.blob.core.windows.net/uploads/assets/Flaming_Fruits_552a60d486.png',
  },
  {
    name: 'Gemzagame',
    imgScr: 'https://sweepstastic.blob.core.windows.net/uploads/assets/gemzagame_2576e05af4.png',
  },
  {
    name: 'Holly Bonanza',
    imgScr: 'https://sweepstastic.blob.core.windows.net/uploads/assets/Holly_Jolly_Bonanza_c0482422b5.png',
  },
  {
    name: '88 Riches',
    imgScr: 'https://sweepstastic.blob.core.windows.net/uploads/assets/88_Riches_dfb46287d7.png',
  }
])

</script>