<template>
  <span class="text-white font-semibold text-xl mx-5">Bonuses</span>

  <div class="rounded-lg bg-[#191D32] text-gray-300 divide-y divide-slate-800">
    <div class="grid grid-cols-7 gap-4 mt-5 p-5 text-gray-300 text-center">
      <div class="truncate">TimeStamp</div>
      <div class="truncate">Transaction ID</div>
      <div class="truncate">Coins</div>
      <div class="truncate">Trigger</div>
      <div class="truncate">Status</div>
      <div class="truncate">Initial Playthrough</div>
      <div class="truncate">Remaining Playthrough</div>
    </div>

    <div class="grid grid-cols-7 gap-4 p-5 text-center" v-for="item in data">
      <div class="truncate">{{ item.time }}</div>
      <div class="truncate">{{ item.txid }}</div>
      <div class="truncate">{{ item.coin }}</div>
      <div class="truncate">{{ item.trigger }}</div>
      <div class="truncate">{{ item.status }}</div>
      <div class="truncate">{{ item.init }}</div>
      <div class="truncate">{{ item.remain }}</div>
    </div>
  </div>

  <Pagination class="m-5" />

</template>

<script setup>
import { ref } from 'vue'
import Pagination from './Pagination.vue'

const data = ref([
  {
    time: '',
    txid: '',
    coin: '',
    trigger: '',
    status: '',
    init: '',
    remain: '',
  }
])
</script>