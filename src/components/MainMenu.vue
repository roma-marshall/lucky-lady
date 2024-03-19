<template>
  <div class="flex flex-row justify-around my-2 sm:my-6 bg-[#0e1122] py-3 rounded-lg">
    <div class="flex overflow-x-scroll overflow-hidden pb-5 lg:pb-0 mx-2">
      <div v-for="item in menu" class="p-px p-py rounded-lg bg-gradient-to-r from-[#FBF338] to-[#7738FB] max-w-fit mr-4">
        <div class="bg-[#191d32] rounded-lg px-1 py-0.5">
          <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg group">
            <span class="flex-1 whitespace-nowrap text-white">{{ item }}</span>
          </a>
        </div>
      </div>
    </div>
    <div class="relative hidden md:flex pb-5 lg:pb-0 mx-2">
      <input type="search" v-model="searchQ" placeholder="Search games" class="peer bg-[#191d32] outline-none text-white px-5 py-0.5 rounded-l-lg">
      <button class="-ml-1 bg-[#7738fb] px-3 py-1 rounded-lg">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </button>
      <div v-if="searchQ" class="peer-focus:grid hidden grid-cols-3 px-2 py-3 absolute w-full top-full shadow rounded-lg bg-[#0E1121] text-white w-full z-50">
        <div v-for="item in keywords" class="cursor-pointer">
          <div class="flex flex-col px-1 py-2" v-if="item.includes(searchQ) && searchQ">
            <img class="aspect-square rounded-lg" src="https://sweepstastic.blob.core.windows.net/uploads/assets/Mega_Lucky_Pot_65b2bac9ff.png" alt="">
            <span class="text-center mt-1">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menu = ref([
    'Explore',
    'Game Types',
    'Game Studios',
    'All Games'
])

const searchQ = ref()
const keywords = ref([
    'mega lucky',
    'mega cube',
    'mega win',
    'savage spirit',
    'blockchain 777',
])

</script>