<template>
  <div class="flex my-10 mx-5">
    <div class="w-full">
      <TabGroup>
        <TabList class="flex space-x-1 rounded-xl bg-[#1F253E] p-1">
          <Tab
              v-for="(page, idx) in pages"
              as="template"
              :key="page"
              v-slot="{ selected }"
          >
            <div @click="active = idx" :class="{'bg-gradient-to-r from-[#FBF338] to-[#7738FB]' : selected}" class="h-fit p-px p-py rounded-lg max-w-fit outline-none">
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
            <div>
              <div @click="openModal" class="mx-auto w-40 h-40 shadow rounded-lg">
                <img class="rounded aspect-square" :src="avatar" alt="">
              </div>

              <div class="flex flex-col text-center text-white text-sm">
                <span class="mt-3">Select Profile Pic</span>
                <span>Create Avatar</span>
              </div>
            </div>

            <div class="flex flex-col">
              <span class="text-white font-semibold text-xl">Personal Details</span>
              <PersonalData />
            </div>

            <div class="flex flex-col">
              <span class="text-white font-semibold text-xl">Login Details</span>

              <!-- Email -->
              <div class="flex relative bg-[#191d32] rounded-lg shadow w-full mt-5">
                <input type="text" id="email"
                       disabled
                       value="sandra@luckyladygames.com"
                       class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-600 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                       placeholder=" "/>
                <label for="email"
                       class="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                  Email
                </label>
                <div class=" scale-75 my-auto mr-2 rounded-full">
                  <Locked />
                </div>
              </div>

              <div class="flex relative bg-[#191d32] rounded-lg shadow w-full mt-5">
                <button class="p-3 w-full text-sm text-gray-300 bg-transparent rounded-lg">
                  Change Password
                </button>
              </div>

              <span class="text-white text-xl font-semibold mt-5 mb-2">Bank details</span>
              <span class="text-white text-xs font-thin">
                Please add your bank details if you want to redeem your Sweeps Coins.
              </span>

              <div class="flex relative bg-[#191d32] rounded-lg shadow w-full mt-5">
                <button class="p-3 w-full text-sm text-gray-300 bg-transparent rounded-lg">
                  Add Bank Details
                </button>
              </div>

              <span class="text-white text-xl font-semibold mt-10 mb-2">Communication</span>
              <span class="text-white text-xs font-thin">
                Please select your preferred communication format.
              </span>

              <div class="flex space-x-20">
                <div class="flex mt-5">
                  <input type="checkbox">
                  <span class="text-white ml-2">Email</span>
                </div>

                <div class="flex mt-5">
                  <input type="checkbox">
                  <span class="text-white ml-2">SMS</span>
                </div>
              </div>

              <span class="text-white text-xl font-semibold mt-10 mb-2">Identity Verification</span>
              <span class="text-white text-xs font-thin">
                Complete identity verification if you want to redeem your Sweeps coins.
              </span>

              <div class="flex relative bg-[#191d32] rounded-lg shadow w-fit px-3 mt-5">
                <button class="p-3 w-full text-sm text-gray-300 bg-transparent rounded-lg">
                  Get Verified
                </button>
              </div>


            </div>
          </div>

          <div v-if="active === 1">
            {{ active }}
          </div>

          <div v-if="active === 2">
            {{ active }}
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



    <ModalComponent :isStateOpen="isModalOpened" @modal-close="closeModal" name="avatar-modal">
      <template #header>
        <span class="flex justify-center text-white text-xl mb-5">Pick avatar</span>
      </template>
      <template #content>
        <div class="flex flex-col">
          <div class="grid grid-cols-2 gap-4">
            <img @click="pickAvatar(1)" class="aspect-square rounded-lg shadow" src="/avatar1.png">
            <img @click="pickAvatar(2)" class="aspect-square rounded-lg shadow" src="/avatar2.png">
          </div>
        </div>
      </template>
      <template #footer>&nbsp;</template>
    </ModalComponent>


  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab } from '@headlessui/vue'
import ModalComponent from './ModalComponent.vue'
import PersonalData from './PersonalData.vue'
import Locked from './ui/Locked.vue'

const active = ref(0)
const pages = ref([
    'Account',
    'Game Play History',
    'Transaction History',
    'Sweeps Coins',
    'Responsible Gaming',
    'Referral Program'
])

const isModalOpened = ref(false)
const openModal = () => {
  isModalOpened.value = true
}

const closeModal = () => {
  isModalOpened.value = false
}

const avatar = ref('/avatar1.png')
const pickAvatar = (id) => {
  avatar.value = `/avatar${id}.png`
  isModalOpened.value = false
}
</script>