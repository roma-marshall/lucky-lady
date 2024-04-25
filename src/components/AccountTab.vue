<template>
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
</template>

<script setup>
import { ref } from 'vue'

import Locked from './ui/Locked.vue'
import PersonalData from './PersonalData.vue'
import ModalComponent from './ModalComponent.vue'

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