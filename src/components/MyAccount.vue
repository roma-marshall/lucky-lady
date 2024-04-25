<template>
  <div class="flex my-10 mx-5">
    <div class="w-full">
      <TabGroup>
        <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          <Tab
              v-for="(category, idx) in categories"
              as="template"
              :key="category"
              v-slot="{ selected }"
          >
            <button @click="active = idx"
                :class="[
            'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
            'focus:outline-none focus:ring-0',
            selected
              ? 'bg-white text-blue-700 shadow'
              : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
          ]"
            >
              {{ category }} {{ idx }}
            </button>
          </Tab>
        </TabList>

        <div class="rounded-xl bg-white p-3 mt-5">

          <div v-if="active === 0" >
            {{ active }}
          </div>

          <div v-if="active === 1" >
            {{ active }}
          </div>

          <div v-if="active === 2" >
            {{ active }}
          </div>

          <div v-if="active === 3" >
            {{ active }}
          </div>

          <div v-if="active === 4" >
            {{ active }}
          </div>

          <div v-if="active === 5" >
            {{ active }}
          </div>

        </div>
      </TabGroup>
    </div>



  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const active = ref(0)
const categories = ref([
    'Account',
    'Game Play History',
    'Transaction History',
    'Sweeps Coins',
    'Responsible Gaming',
    'Referral Program'
])
</script>