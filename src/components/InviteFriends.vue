<template>
  <div
      class="flex flex-col text-center rounded-xl border-2 border-[#3C2550] shadow shadow-[#3C2550] p-4 min-h-80">
    <span class="text-3xl text-white font-bold mb-3">Invite Friends</span>
    <div class="space-x-1 mb-6">
      <span class="text-gray-600">Get</span>
      <span class="text-yellow-400">1M FREE Coins</span>
      <span class="text-gray-600">& entry to win $1,000 Sweepstakes Credits for every successful invite.</span>
    </div>

    <span class="text-gray-400 text-left mb-2">Referral code:</span>
    <div class="flex justify-between space-x-3">
      <span class="text-gray-400 bg-[#282E41] rounded-lg p-3 text-sm text-left w-full">IKOVG</span>
      <div class="flex flex-col justify-center">
        <svg viewBox="0 -0.5 25 25" class="text-gray-400" width="24" height="24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M17.676 14.248C17.676 15.8651 16.3651 17.176 14.748 17.176H7.428C5.81091 17.176 4.5 15.8651 4.5 14.248V6.928C4.5 5.31091 5.81091 4 7.428 4H14.748C16.3651 4 17.676 5.31091 17.676 6.928V14.248Z"
                stroke="#9cafa3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.252 20H17.572C19.1891 20 20.5 18.689 20.5 17.072V9.75195" stroke="#9cafa3"
                stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="text-gray-400 text-[0.65rem]">COPY</span>
      </div>
    </div>

    <span class="text-gray-400 text-left my-2">Referral link:</span>
    <div class="flex justify-between space-x-3">
      <span class="text-gray-400 bg-[#282E41] rounded-lg p-3 text-sm text-left w-full">https://</span>
      <div class="flex flex-col justify-center">
        <svg viewBox="0 -0.5 25 25" class="text-gray-400" width="24" height="24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M17.676 14.248C17.676 15.8651 16.3651 17.176 14.748 17.176H7.428C5.81091 17.176 4.5 15.8651 4.5 14.248V6.928C4.5 5.31091 5.81091 4 7.428 4H14.748C16.3651 4 17.676 5.31091 17.676 6.928V14.248Z"
                stroke="#9cafa3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.252 20H17.572C19.1891 20 20.5 18.689 20.5 17.072V9.75195" stroke="#9cafa3"
                stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="text-gray-400 text-[0.65rem]">COPY</span>
      </div>
    </div>
    <span class="mt-7 text-gray-700 text-[0.65rem]">Terms & Conditions</span>
  </div>
</template>

<script>
import Copy from './ui/Copy.vue'
</script>