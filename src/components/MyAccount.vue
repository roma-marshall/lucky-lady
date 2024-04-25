<template>
  <div class="flex my-10 mx-5">
    <div class="w-full">
      <TabGroup>
        <TabList class="flex overflow-x-auto overflow-hidden rounded-xl bg-[#1F253E] p-2">
          <Tab
              v-for="(page, idx) in pages"
              as="template"
              :key="page"
              v-slot="{ selected }"
          >
            <div @click="active = idx" :class="{'bg-gradient-to-r from-[#FBF338] to-[#7738FB]' : selected}" class="h-fit p-px p-py mx-2 rounded-lg max-w-fit outline-none">
              <div class="bg-[#191d32] rounded-lg px-1 py-0.5">
                <span class="flex items-center p-2 text-gray-900 rounded-lg group flex-1 whitespace-nowrap text-white">
                  {{ page }}
                </span>
              </div>
            </div>
          </Tab>
        </TabList>



        <div class="rounded-xl bg-[#1F253E] p-3 mt-5 py-10">

          <div v-if="active === 0" class="flex flex-col xl:flex-row xl:justify-center mx-5 space-y-5 xl:space-y-0 xl:space-x-12">
            <AccountTab />
          </div>

          <div v-if="active === 1" class="mx-5">
            <GameTab />
          </div>

          <div v-if="active === 2">
            <TransactionTab />
          </div>

          <div v-if="active === 3">
            {{ active }}
          </div>

          <div v-if="active === 4">
            {{ active }}
          </div>

          <div v-if="active === 5">
            {{ active }}
          </div>

        </div>
      </TabGroup>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab } from '@headlessui/vue'
import AccountTab from './AccountTab.vue'
import GameTab from './GameTab.vue'
import TransactionTab from './TransactionTab.vue'

const active = ref(0)
const pages = ref([
    'Account',
    'Game Play History',
    'Transaction History',
    'Sweeps Coins',
    'Responsible Gaming',
    'Referral Program'
])
</script>