<template>
  <span class="text-white font-semibold text-xl mx-5">Game Plan History</span>

  <div class="rounded-lg bg-[#191D32] text-gray-300 divide-y divide-slate-800">
    <div class="grid grid-cols-6 gap-4 mt-5 p-5 text-gray-300 text-center">
      <div>Date</div>
      <div>Game</div>
      <div>Amount</div>
      <div>Type</div>
      <div>ID</div>
      <div>Status</div>
    </div>

    <div class="grid grid-cols-6 gap-4 p-5 text-center" v-for="item in data">
      <div>{{ item.date }}</div>
      <div>{{ item.game }}</div>
      <div>{{ item.amount }}</div>
      <div>{{ item.type }}</div>
      <div>{{ item.id }}</div>
      <div>{{ item.status }}</div>
    </div>


  </div>

</template>

<script setup>
import { ref } from 'vue'

const data = ref([
  {
    date: '2024-03-14',
    game: 'MoneyInc',
    amount: 'LC 100',
    type: 'Bet',
    id: 'VONRLUWZK2LPHHDY',
    status: 'Lost',
  },
  {
    date: '2024-03-14',
    game: 'MoneyInc',
    amount: 'LC 100',
    type: 'Bet',
    id: 'VONRLUWZK2LPHHDY',
    status: 'Lost',
  },
  {
    date: '2024-03-14',
    game: 'MoneyInc',
    amount: 'LC 100',
    type: 'Bet',
    id: 'VONRLUWZK2LPHHDY',
    status: 'Lost',
  }
])
</script>