<template>
  <span class="text-white font-semibold text-xl mx-5">Bonuses</span>

  <div class="rounded-lg bg-[#191D32] text-gray-300 divide-y divide-slate-800">
    <div class="hidden lg:grid grid-cols-7 gap-4 mt-5 p-5 text-gray-300 text-center">
      <div class="truncate">TimeStamp</div>
      <div class="truncate">Transaction ID</div>
      <div class="truncate">Coins</div>
      <div class="truncate">Trigger</div>
      <div class="truncate">Status</div>
      <div class="truncate">Initial Playthrough</div>
      <div class="truncate">Remaining Playthrough</div>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-7 gap-x-2 gap-y-4 lg:gap-4 p-5 text-center text-sm lg:text-base" v-for="item in data">
      <div class="text-left lg:text-center lg:space-y-0">
        <span class="block lg:hidden mb-2">TimeStamp:</span>
        <span class="truncate">{{ item.time }}</span>
      </div>
      <div class="text-left lg:text-center lg:space-y-0">
        <span class="block lg:hidden mb-2">Transaction ID:</span>
        <div class="truncate">{{ item.txid }}</div>
      </div>
      <div class="text-left lg:text-center lg:space-y-0">
        <span class="block lg:hidden mb-2">Coins:</span>
        <span class="truncate">{{ item.coin }}</span>
      </div>
      <div class="text-left lg:text-center lg:space-y-0">
        <span class="block lg:hidden mb-2">Triggers:</span>
        <span class="truncate">{{ item.trigger }}</span>
      </div>
      <div class="text-left lg:text-center lg:space-y-0">
        <span class="block lg:hidden mb-2">Status:</span>
        <span class="truncate">{{ item.status }}</span>
      </div>
      <div class="text-left lg:text-center lg:space-y-0">
        <span class="block lg:hidden mb-2">Initial Playthrough:</span>
        <span class="truncate">{{ item.init }}</span>
      </div>
      <div class="text-left lg:text-center lg:space-y-0">
        <span class="block lg:hidden mb-2">Remaining Playthrough:</span>
        <span class="truncate">{{ item.remain }}</span>
      </div>
    </div>
  </div>

  <Pagination class="m-5" />

</template>

<script setup>
import { ref } from 'vue'
import Pagination from './Pagination.vue'

const data = ref([
  {
    time: '29.04.2024',
    txid: 'test',
    coin: 'test coin',
    trigger: 'test',
    status: 'approved',
    init: 'test',
    remain: 'test',
  }
])
</script>