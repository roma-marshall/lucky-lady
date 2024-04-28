<template>
  <div id="mainheader" class="" v-if="isLogged">
    <div class="hidden sm:flex flex-row justify-between mb-2 text-white">
      <div class="flex items-center space-x-4">
        <Toggle :isMovile="false" />
        <div class="hidden lg:block p-px p-py rounded-full bg-gradient-to-b from-amber-600 to-yellow-400 max-w-fit mr-4 h-fit">
          <div class="bg-[#191d32] rounded-full">
            <router-link to="/account" class="flex items-center p-2 rounded-full group">
              <button type="button" class="flex-1 whitespace-nowrap text-xs text-white uppercase">My Account</button>
            </router-link>
          </div>
        </div>
        <div class="hidden lg:block p-px p-py rounded-full bg-gradient-to-b from-amber-600 to-yellow-400 max-w-fit mr-4 h-fit">
          <div class="bg-[#191d32] rounded-full">
            <router-link to="/coins" class="flex items-center p-2 rounded-full group">
              <button type="button" class="flex-1 whitespace-nowrap text-xs text-white uppercase">Buy Coins</button>
            </router-link>
          </div>
        </div>
        <div class="hidden lg:block p-px p-py rounded-full bg-gradient-to-b from-amber-600 to-yellow-400 max-w-fit mr-4 h-fit">
          <div class="bg-[#191d32] rounded-full">
            <router-link to="/rewards" class="flex items-center p-2 rounded-full group">
              <button type="button" class="flex-1 whitespace-nowrap text-xs text-white uppercase">Rewards</button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="flex">
        <router-link to="/account">
          <div class="flex flex-col">
              <span class="text-xs text-yellow-500 mb-0.5">Lv.12 SANDRA</span>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div class="border-2 border-yellow-500 bg-green-600 h-2.5 rounded-full" :style="`width: ${bar}`"></div>
            </div>
          </div>
        </router-link>
        <div class="ml-2 mt-0.5">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle opacity="1" cx="12" cy="9" r="3" stroke="#ffffff" stroke-width="1.5"></circle> <circle cx="12" cy="12" r="10" stroke="#ffffff" stroke-width="1.5"></circle> <path opacity="1" d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Toggle from './ui/Toggle.vue'

const isLogged = ref(true)
const bar = ref('45%')
</script>