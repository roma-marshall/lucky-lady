<template>
  <div>

    <div class="my-5">
      <label for="isVerified" class="text-white mx-2">isVerified</label>
      <input name="isVerified" type="checkbox" @click="isVerified = !isVerified">
    </div>

    <div v-if="isVerified" class="bg-white">
      <div class="flex flex-col md:flex-row justify-between mx-5 pt-10">
        <span class="text-4xl my-auto">Rewards Store</span>
        <div class="flex my-auto space-x-2">
          <span class="my-auto">You have</span>
          <img class="rounded-full my-auto" src="https://placehold.co/32x32" alt="">
          <span class="my-auto text-orange-500 font-bold">RC 256.25</span>
          <span class="my-auto">to redeem</span>
        </div>
      </div>

      <div class="flex mx-5 justify-start md:justify-end mt-2 mb-5">
        <Sort />
      </div>

      <div class="pb-10">
        <div class="bg-gray-200 mx-5 rounded-sm shadow">
          <div class="flex justify-between shadow mb-3">
            <span class="text-2xl font-semibold text-gray-700 px-5 py-2">Most Popular (8)</span>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mx-5 pb-10">
            <div v-for="item in data" class="flex flex-col justify-center text-center shadow-xl rounded-lg p-5 bg-white">
              <img class="rounded-lg shadow aspect-video" :src="item.img" alt="">
              <span class="font-bold mt-5">{{ item.name }}</span>
              <span class="text-red-500 font-semibold mb-3">Qty: {{ item.qty }}</span>
              <div class="flex justify-center space-x-2 mb-4">
                <span class="text-sm my-auto">Cost:</span>
                <img class="rounded-full my-auto" src="https://placehold.co/24x24" alt="">
                <span class="text-xl my-auto">{{ item.cost }}</span>
              </div>
              <button class="border-2 border-gray-500 rounded-lg py-1 px-auto text-sm mb-3">Add to Cart</button>
              <button class="bg-green-700 text-white border-2 border-green-700 rounded-lg py-1 px-auto text-sm">WishList</button>
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mx-5 pb-10">
            <div v-for="item in data" class="flex flex-col justify-center text-center shadow-xl rounded-lg p-5 bg-white">
              <img class="rounded-lg shadow aspect-video" :src="item.img" alt="">
              <span class="font-bold mt-5">{{ item.name }}</span>
              <span class="text-red-500 font-semibold mb-3">Qty: {{ item.qty }}</span>
              <div class="flex justify-center space-x-2 mb-4">
                <span class="text-sm my-auto">Cost:</span>
                <img class="rounded-full my-auto" src="https://placehold.co/24x24" alt="">
                <span class="text-xl my-auto">{{ item.cost }}</span>
              </div>
              <button class="border-2 border-gray-500 rounded-lg py-1 px-auto text-sm mb-3">Add to Cart</button>
              <button class="bg-green-700 text-white border-2 border-green-700 rounded-lg py-1 px-auto text-sm">WishList</button>
            </div>
          </div>
        </div>

        <div class="my-10"></div>

        <div class="bg-gray-200 mx-5 rounded-sm shadow">
          <div class="flex justify-between shadow mb-3">
            <span class="text-2xl font-semibold text-gray-700 px-5 py-2">All in one (4)</span>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mx-5 pb-10">
            <div v-for="item in data" class="flex flex-col justify-center text-center shadow-xl rounded-lg p-5 bg-white">
              <img class="rounded-lg shadow aspect-video" :src="item.img" alt="">
              <span class="font-bold mt-5">{{ item.name }}</span>
              <span class="text-red-500 font-semibold mb-3">Qty: {{ item.qty }}</span>
              <div class="flex justify-center space-x-2 mb-4">
                <span class="text-sm my-auto">Cost:</span>
                <img class="rounded-full my-auto" src="https://placehold.co/24x24" alt="">
                <span class="text-xl my-auto">{{ item.cost }}</span>
              </div>
              <button class="border-2 border-gray-500 rounded-lg py-1 px-auto text-sm mb-3">Add to Cart</button>
              <button class="bg-green-700 text-white border-2 border-green-700 rounded-lg py-1 px-auto text-sm">WishList</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!isVerified" class="bg-[#191d32] text-white my-20 h-screen">
      <div class="flex flex-col text-center justify-between">
        <img src="https://placehold.co/300x200" class="flex mx-auto aspect-video mb-7" width="300" height="200" alt="">
        <span class="text-2xl mb-6">Verify your account</span>
        <span class="text-lg w-2/3 mx-auto mb-3">To be able to redeem rewards, please complete your identity verification</span>
        <button class="flex max-w-fit mx-auto py-3 pl-2 pr-4 rounded-sm bg-[#84004D] hover:bg-[#84004D]/90 space-x-1 divide-x divide-white/30">
          <CheckIcon class="h-5 w-5 text-white my-auto" aria-hidden="true" />
          <span class="text-white/70 px-2 text-sm">Start Verification</span>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid'

import { ref } from 'vue'
import Sort from './ui/Sort.vue'

const isVerified = ref(false)

const data = ref([
  {
    name: '$25 Amazon GiftCard',
    img: 'https://www.mygiftcardsupply.com/wp-content/uploads/2022/01/amazon-gift-card.png.webp',
    qty: 250,
    cost: 25
  },
  {
    name: '$25 AMC GiftCard',
    img: 'https://giftcards.cryptocart.cc/_next/image?url=https%3A%2F%2Fgift.wegift.io%2Fstatic%2Fproduct_assets%2FAMC-US%2FAMC-US-card.png&w=1080&q=75',
    qty: 250,
    cost: 25
  },
  {
    name: '$25 Burritoful GiftCard',
    img: 'https://c1.neweggimages.com/productimage/nb640/32-474-009-02.png',
    qty: 500,
    cost: 50
  },
  {
    name: '$25 Nike GiftCard',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8EJsAlLOCaOIm5hhGq3fYexZIN0wEPk1rDMvu5q7rqg&s',
    qty: 25,
    cost: 100
  }
])
</script>