<template>
  <div class="space-y-5">
    <span class="text-white font-semibold text-xl mx-5">Transaction History</span>

    <div class="rounded-lg bg-[#191D32] text-gray-300 divide-y divide-slate-800">
      <div class="hidden lg:grid grid-cols-7 gap-4 mt-5 p-5 text-gray-300 text-center">
        <div class="truncate">Date</div>
        <div class="truncate">Type</div>
        <div class="truncate">Amount</div>
        <div class="truncate">Transaction ID</div>
        <div class="truncate">Coins</div>
        <div class="truncate">Payment Method</div>
        <div class="truncate">Status</div>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-7 gap-x-2 gap-y-4 lg:gap-4 p-5 text-center text-sm lg:text-base" v-for="item in data">
        <div class="text-left lg:text-center lg:space-y-0">
          <span class="block lg:hidden mb-2">Date:</span>
          <span class="truncate">{{ item.date }}</span>
        </div>
        <div class="text-left lg:text-center lg:space-y-0">
          <span class="block lg:hidden mb-2">Type:</span>
          <span class="truncate">{{ item.type }}</span>
        </div>
        <div class="text-left lg:text-center lg:space-y-0">
          <span class="block lg:hidden mb-2">Amount:</span>
          <span class="truncate">{{ item.amount }}</span>
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
          <span class="block lg:hidden mb-2">Payment Method:</span>
          <span class="truncate">{{ item.payment }}</span>
        </div>
        <div class="text-left lg:text-center lg:space-y-0">
          <span class="block lg:hidden mb-2">Status:</span>
          <span class="truncate text-green-500">{{ item.status }}</span>
        </div>
      </div>
    </div>

    <Pagination class="m-5" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Pagination from './Pagination.vue'

const data = ref([
  {
    date: '2024-03-18',
    type: 'Bonus',
    amount: '$0.00',
    txid: 'JYLQTFPILUICQMXJ',
    coin: 'LC 1000',
    payment: 'System',
    status: 'Success',
  },
  {
    date: '2024-03-16',
    type: 'Bonus',
    amount: '$0.00',
    txid: 'UMPQTFPILUICQAXW',
    coin: 'LC 1000',
    payment: 'System',
    status: 'Success',
  },
  {
    date: '2024-03-29',
    type: 'Bonus',
    amount: '$0.00',
    txid: 'ELROTFPILUICQFHD',
    coin: 'LC 1000',
    payment: 'System',
    status: 'Success',
  },
  {
    date: '2024-03-26',
    type: 'Bonus',
    amount: '$0.00',
    txid: 'POLDEFPILUICQMXJ',
    coin: 'LC 1000',
    payment: 'System',
    status: 'Success',
  },
  {
    date: '2024-03-18',
    type: 'Bonus',
    amount: '$0.00',
    txid: 'JFOETFPILUEDNED',
    coin: 'LC 1000',
    payment: 'System',
    status: 'Success',
  },
  {
    date: '2024-03-14',
    type: 'Bonus',
    amount: '$0.00',
    txid: 'QQERTFPILUIERLS',
    coin: 'LC 1000',
    payment: 'System',
    status: 'Success',
  },
])
</script>