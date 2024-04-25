<template>
  <div>
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 mx-5 my-10">

      <div class="space-y-5">
        <BuyCoins />
        <BonusCoins />
      </div>

      <!-- Collect more & faster  -->
      <div class="flex flex-col text-center p-4">
        <span class="text-3xl text-white font-bold mb-3">COLLECT More & Faster!</span>
        <span class="text-gray-300">
          Complete your profile to access MORE FREE gold coins & sweepstakes rewards bonuses daily!
        </span>

        <div class="my-5 space-y-5">
          <div class="relative bg-[#282E41] rounded-lg shadow w-full">
            <input type="text" id="username"
                   v-model="isUsername"
                   class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                   placeholder=" "/>
            <label for="username"
                   class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Username
            </label>
            <div class="absolute right-3 top-1/3 bg-[#3B4062] rounded-full">
              <Ok v-if="isUsername" />
              <Info v-else />
            </div>
          </div>

          <div class="flex space-x-4">
            <div class="relative bg-[#282E41] rounded-lg shadow w-full">
              <input type="text" id="name"
                     v-model="isName"
                     class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "/>
              <label for="name"
                     class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Name
              </label>
              <div class="absolute right-3 top-1/3 bg-[#3B4062] rounded-full">
                <Ok v-if="isName" />
                <Info v-else />
              </div>
            </div>

            <div class="relative bg-[#282E41] rounded-lg shadow w-full">
              <input type="text" id="surname"
                     v-model="isSurname"
                     class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "/>
              <label for="surname"
                     class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Surname
              </label>
              <div class="absolute right-3 top-1/3 bg-[#3B4062] rounded-full">
                <Ok v-if="isSurname" />
                <Info v-else />
              </div>
            </div>
          </div>

          <div class="flex space-x-4">
            <div class="relative bg-[#282E41] rounded-lg shadow w-full xl:w-[47%]">
              <input type="date" id="date"
                     class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "/>
              <label for="date"
                     class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Date of Birth
              </label>
            </div>

            <div @click="isCountryOpen = !isCountryOpen" class="relative bg-[#282E41] rounded-lg shadow w-full">
              <Country :isCountryOpen="isCountryOpen" />
              <label class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Country
              </label>
            </div>
          </div>

          <div class="flex space-x-4">
            <div class="relative bg-[#282E41] rounded-lg shadow w-full">
              <input type="text" id="address"
                     v-model="isAddress"
                     class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "/>
              <label for="address"
                     class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Address
              </label>
              <div class="absolute right-3 top-1/3 bg-[#3B4062] rounded-full">
                <Ok v-if="isAddress" />
                <Info v-else />
              </div>
            </div>

            <div class="relative bg-[#282E41] rounded-lg shadow w-full">
              <input type="text" id="zipcode"
                     v-model="isZipcode"
                     class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "/>
              <label for="zipcode"
                     class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Zip Code
              </label>
              <div class="absolute right-3 top-1/3 bg-[#3B4062] rounded-full">
                <Ok v-if="isZipcode" />
                <Info v-else />
              </div>
            </div>
          </div>

          <div class="flex space-x-4">
            <div class="relative bg-[#282E41] rounded-lg shadow w-full">
              <input type="text" id="City"
                     v-model="isCity"
                     class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "/>
              <label for="City"
                     class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                City
              </label>
              <div class="absolute right-3 top-1/3 bg-[#3B4062] rounded-full">
                <Ok v-if="isCity" />
                <Info v-else />
              </div>
            </div>

            <div @click="isStateOpen = !isStateOpen" class="relative bg-[#282E41] rounded-lg shadow w-full">
              <State :isStateOpen="isStateOpen" />
              <label class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                State
              </label>
            </div>
          </div>

          <div class="flex space-x-4">
            <div @click="isCodeOpen = !isCodeOpen" class="relative bg-[#282E41] rounded-lg shadow w-full md:w-1/3">
              <Code :isCodeOpen="isCodeOpen" />
              <label
                  class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Code
              </label>
            </div>

            <div class="relative bg-[#282E41] rounded-lg shadow w-full w-full">
              <input type="tel" id="phone"
                     v-model="isPhone"
                     class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "/>
              <label for="phone"
                     class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Phone
              </label>
              <div class="absolute right-3 top-1/3 bg-[#3B4062] rounded-full">
                <Ok v-if="isPhone" />
                <Info v-else />
              </div>
            </div>
          </div>
        </div>

        <button class="flex shadow max-w-fit mx-auto py-3 pl-2 pr-4 rounded-sm bg-[#84004D] hover:bg-[#84004D]/90 space-x-1 divide-x divide-white/30">
          <svg class="w-5 h-5" viewBox="0 0 64 64" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"> <path d="M30.051 45.6071L17.851 54.7401C17.2728 55.1729 16.5856 55.4363 15.8662 55.5008C15.1468 55.5652 14.4237 55.4282 13.7778 55.1049C13.1319 54.7817 12.5887 54.2851 12.209 53.6707C11.8293 53.0563 11.6281 52.3483 11.628 51.626V15.306C11.628 13.2423 12.4477 11.2631 13.9069 9.8037C15.3661 8.34432 17.3452 7.52431 19.409 7.52405H45.35C47.4137 7.52431 49.3929 8.34432 50.8521 9.8037C52.3112 11.2631 53.131 13.2423 53.131 15.306V51.625C53.1309 52.3473 52.9297 53.0553 52.55 53.6697C52.1703 54.2841 51.6271 54.7807 50.9812 55.1039C50.3353 55.4272 49.6122 55.5642 48.8928 55.4998C48.1734 55.4353 47.4862 55.1719 46.908 54.739L34.715 45.6071C34.0419 45.1031 33.2238 44.8308 32.383 44.8308C31.5422 44.8308 30.724 45.1031 30.051 45.6071V45.6071Z" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /> </svg>
          <span class="text-slate-300 px-2 text-sm w-40">Save</span>
        </button>
      </div>

      <div class="space-y-5">
        <InviteFriends />
        <FollowUs />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Code from './ui/Code.vue'
import Ok from './ui/Ok.vue'
import Info from './ui/Info.vue'
import State from './ui/State.vue'
import Country from './ui/Country.vue'
import BuyCoins from './BuyCoins.vue'
import BonusCoins from './BonusCoins.vue'
import FollowUs from './FollowUs.vue'
import InviteFriends from './InviteFriends.vue'

const isCountryOpen = ref(false)
const isStateOpen = ref(false)
const isCodeOpen = ref(false)

const isUsername = ref()
const isName = ref()
const isSurname = ref()
const isAddress = ref()
const isZipcode = ref()
const isCity= ref()
const isPhone= ref()
</script>