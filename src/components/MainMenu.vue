<template>
  <div class="flex flex-row justify-around my-10 bg-[#0e1122] py-2 rounded-lg">
    <div v-for="item in menu" class="p-px p-py rounded-lg bg-gradient-to-r from-[#FBF338] to-[#7738FB] max-w-fit">
      <div class="bg-[#191d32] rounded-lg px-1 py-0.5">
        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <span class="flex-1 whitespace-nowrap text-white">{{ item }}</span>
        </a>
      </div>
    </div>
    <div class="flex">
      <input type="search" placeholder="Search games" class="bg-[#191d32] outline-none text-white px-5 py-0.5 rounded-l-lg">
      <button class="-ml-1 bg-[#7738fb] px-3 py-1 rounded-lg">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </button>
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


</script>