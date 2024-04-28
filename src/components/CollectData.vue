<template>
  <div class="my-5 space-y-5">
    <div class="relative bg-[#1F253E] rounded-lg shadow w-full">
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
      <div class="relative bg-[#1F253E] rounded-lg shadow w-full">
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

      <div class="relative bg-[#1F253E] rounded-lg shadow w-full">
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
      <div class="relative bg-[#1F253E] rounded-lg shadow w-[47%] sm:w-full">
        <input type="date" id="date"
               class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
               placeholder=" "/>
        <label for="date"
               class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
          Date of Birth
        </label>
      </div>

      <div @click="isCountryOpen = !isCountryOpen" class="relative bg-[#1F253E] rounded-lg shadow w-full">
        <Country :isCountryOpen="isCountryOpen" />
        <label class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
          Country
        </label>
      </div>
    </div>

    <div class="flex space-x-4">
      <div class="relative bg-[#1F253E] rounded-lg shadow w-full">
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

      <div class="relative bg-[#1F253E] rounded-lg shadow w-full">
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
      <div class="relative bg-[#1F253E] rounded-lg shadow w-full">
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

      <div @click="isStateOpen = !isStateOpen" class="relative bg-[#1F253E] rounded-lg shadow w-full">
        <State :isStateOpen="isStateOpen" />
        <label class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
          State
        </label>
      </div>
    </div>

    <div class="flex space-x-4">
      <div @click="isCodeOpen = !isCodeOpen" class="relative bg-[#1F253E] rounded-lg shadow w-full md:w-1/3">
        <Code :isCodeOpen="isCodeOpen" />
        <label
            class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
          Code
        </label>
      </div>

      <div class="relative bg-[#1F253E] rounded-lg shadow w-full w-full">
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
</template>

<script setup>
import { ref } from 'vue'
import Code from './ui/Code.vue'
import Ok from './ui/Ok.vue'
import Info from './ui/Info.vue'
import State from './ui/State.vue'
import Country from './ui/Country.vue'

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