<template>
  <div class="p-1 sm:p-2 sm:ml-64 bg-[#191d32]">
    <div class="p-0.5 sm:p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 min:h-screen">
      <Header />
      <main class="container mx-auto mt-5 mb-auto">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import Header from './Header.vue'

import RewardStore from './RewardStore.vue'
import GetCoins from './GetCoins.vue'
import MyAccount from './MyAccount.vue'
</script>