<template>
  <div class="bg-white">
    <div class="flex flex-col md:flex-row justify-between mx-5 pt-10">
      <span class="text-3xl my-auto">Rewards Store</span>
      <div class="my-auto">You have [icon] RC 256.25 to redeem</div>
      <Sort />
    </div>



  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sort from './ui/Sort.vue'

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