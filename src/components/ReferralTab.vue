<template>
  <div class="flex flex-col space-y-10 mx-5">
    <div>
      <span class="text-gray-400">Referral code:</span>
      <div class="flex justify-start space-x-3 mt-3">
        <span class="text-gray-400 bg-[#191D32] border border-gray-400/30 rounded-lg p-3 text-sm text-left w-2/3">IKOVG</span>
        <div class="bg-gradient-to-r from-[#FBF338] to-[#7738FB] h-fit p-px p-py mx-2 rounded-lg max-w-fit outline-none">
          <div class="bg-[#191d32] rounded-lg px-1 py-0.5">
          <span class="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg group flex-1 whitespace-nowrap text-white">
            Copy
          </span>
          </div>
        </div>
      </div>
    </div>

    <div>
      <span class="text-gray-400">Referral link:</span>
      <div class="flex justify-start space-x-3 mt-3">
        <span class="text-gray-400 bg-[#191D32] border border-gray-400/30 rounded-lg p-3 text-sm text-left w-2/3 truncate">https://sweeptastic.com/auth/sign-up?referralid=IKOVG</span>
        <div class="bg-gradient-to-r from-[#FBF338] to-[#7738FB] h-fit p-px p-py mx-2 rounded-lg max-w-fit outline-none">
          <div class="bg-[#191d32] rounded-lg px-1 py-0.5">
          <span class="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg group flex-1 whitespace-nowrap text-white">
            Copy
          </span>
          </div>
        </div>
      </div>
    </div>

    <div>
      <span class="text-white font-semibold text-xl mx-5">Referral program details</span>
      <div class="rounded-lg bg-[#191D32] text-gray-300 divide-y divide-slate-800">
        <div class="grid grid-cols-3 gap-4 mt-5 p-5 text-gray-300">
          <div class="truncate">Referred Users</div>
          <div class="truncate">Qualified Users</div>
          <div class="truncate">Rewards</div>
        </div>

        <div class="grid grid-cols-3 gap-4 p-5">
          <div class="truncate">0</div>
          <div class="truncate">0</div>
          <div class="truncate">0</div>
        </div>
      </div>
    </div>
  </div>
</template>