<template>
  <div v-if="isLogged">
    <div class="hidden sm:flex flex-row justify-between mb-2 text-white items-center">
      <div class="flex">
        <img width="150" src="/public/img1.png" alt="coins">
        <img width="150" class="mx-2" src="/public/img2.png" alt="coins">
        <div class="p-px p-py rounded-lg bg-gradient-to-r from-[#FBF338] to-[#7738FB] max-w-fit mr-4">
          <div class="bg-[#191d32] rounded-lg">
            <a href="#" class="flex items-center p-2 rounded-lg group">
              <button type="button" class="flex-1 whitespace-nowrap text-xs text-white uppercase">Buy Coins</button>
            </a>
          </div>
        </div>
      </div>


      <div class="flex"><button type="button" class="uppercase">Rewards</button>
        <div class="flex flex-col">
          <span>Lv.12 SANDRA</span>
          <span>progress bar</span>
        </div>
        <span>user icon</span></div>


    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isLogged = ref(true)
</script>