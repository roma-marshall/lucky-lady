<template>
  <div>
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 mx-5 my-10">

      <div>
        <!-- Buy Coins -->
        <div
            class="flex flex-col text-center space-y-4 rounded-xl border-2 border-[#3C2550] shadow shadow-[#3C2550] p-4 min-h-80">
          <span class="text-3xl text-white font-bold">Buy Coins</span>
          <span class="text-lg text-gray-400 mx-auto">Pleas complete your profile details to access.</span>
          <div class="flex mx-auto">
            <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 3H12C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H13M17 8L21 12M21 12L17 16M21 12H9"
                    stroke="#DC117B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <span class="text-sm text-gray-600">
          Why to  I need to complete my profile to access the shop?
        </span>
          <span class="text-sm text-gray-600">
          All packages come with free sweepstakes rewards that have potential to win major prizes,
          so to maintain the security & integrity of our platform we need to know if you are a real person &
          where to send your wins if any occur.
        </span>
        </div>

        <div class="my-5"></div>

        <!-- Bonus Coins -->
        <div
            class="flex flex-col text-center space-y-4 rounded-xl border-2 border-[#3C2550] shadow shadow-[#3C2550] p-4 min-h-80">
          <span class="text-3xl text-white font-bold">Bonus Coins</span>
          <span class="text-lg text-gray-600 mx-auto">Claim FREE here every day!</span>
          <img src="/public/rewards.png" alt="">
        </div>
      </div>

      <!-- Collect more & faster  -->
      <div class="flex flex-col text-center p-4">
        <span class="text-3xl text-white font-bold mb-3">COLLECT More & Faster!</span>
        <span class="text-gray-300">
          Complete your profile to access MORE FREE gold coins & sweepstakes rewards bonuses daily!
        </span>

        <div class="my-5 space-y-5">
          <div class="relative bg-gray-600/30 rounded-lg shadow w-full">
            <input type="text" id="username"
                   class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                   placeholder=" "/>
            <label for="username"
                   class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Username
            </label>
            <div class="absolute right-3 top-1/3 bg-[#3B4062] rounded-full">
              <Ok/>
            </div>
          </div>

          <div class="flex space-x-4">
            <div class="relative bg-gray-600/30 rounded-lg shadow w-full">
              <input type="text" id="name"
                     class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "/>
              <label for="name"
                     class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Name
              </label>
              <div class="absolute right-3 top-1/3 bg-[#3B4062] rounded-full">
                <Ok/>
              </div>
            </div>

            <div class="relative bg-gray-600/30 rounded-lg shadow w-full">
              <input type="text" id="surname"
                     class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "/>
              <label for="surname"
                     class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Surname
              </label>
              <div class="absolute right-3 top-1/3 bg-[#3B4062] rounded-full">
                <Ok/>
              </div>
            </div>
          </div>

          <div class="flex space-x-4">
            <div class="relative bg-gray-600/30 rounded-lg shadow w-full xl:w-[47%]">
              <input type="date" id="date"
                     class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "/>
              <label for="date"
                     class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Date of Birth
              </label>
            </div>

            <div class="relative bg-gray-600/30 rounded-lg shadow w-full">
              <Country/>
              <label
                  class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Country
              </label>
            </div>
          </div>

          <div class="flex space-x-4">
            <div class="relative bg-gray-600/30 rounded-lg shadow w-full">
              <input type="text" id="address"
                     class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "/>
              <label for="address"
                     class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Address
              </label>
              <div class="absolute right-3 top-1/3 bg-[#3B4062] rounded-full">
                <Ok/>
              </div>
            </div>

            <div class="relative bg-gray-600/30 rounded-lg shadow w-full">
              <input type="text" id="zipcode"
                     class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "/>
              <label for="zipcode"
                     class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Zip Code
              </label>
              <div class="absolute right-3 top-1/3 bg-[#3B4062] rounded-full">
                <Ok/>
              </div>
            </div>
          </div>

          <div class="flex space-x-4">
            <div class="relative bg-gray-600/30 rounded-lg shadow w-full">
              <input type="text" id="City"
                     class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "/>
              <label for="City"
                     class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                City
              </label>
              <div class="absolute right-3 top-1/3 bg-[#3B4062] rounded-full">
                <Ok/>
              </div>
            </div>

            <div class="relative bg-gray-600/30 rounded-lg shadow w-full">
              <State/>
              <label
                  class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                State
              </label>
            </div>
          </div>

          <div class="flex space-x-4">
            <div class="relative bg-gray-600/30 rounded-lg shadow w-full w-1/3">
              <Code/>
              <label
                  class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Code
              </label>
            </div>

            <div class="relative bg-gray-600/30 rounded-lg shadow w-full w-full">
              <input type="tel" id="phone"
                     class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-300 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "/>
              <label for="phone"
                     class="absolute text-sm text-gray-300 duration-300 transform -translate-y-3 scale-75 top-0.5 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Phone
              </label>
              <div class="absolute right-3 top-1/3 bg-[#3B4062] rounded-full">
                <Ok/>
              </div>
            </div>
          </div>
        </div>

        <button class="flex shadow max-w-fit mx-auto py-3 pl-2 pr-4 rounded-sm bg-[#84004D] hover:bg-[#84004D]/90 space-x-1 divide-x divide-white/30">
          <svg class="w-5 h-5" viewBox="0 0 64 64" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"> <path d="M30.051 45.6071L17.851 54.7401C17.2728 55.1729 16.5856 55.4363 15.8662 55.5008C15.1468 55.5652 14.4237 55.4282 13.7778 55.1049C13.1319 54.7817 12.5887 54.2851 12.209 53.6707C11.8293 53.0563 11.6281 52.3483 11.628 51.626V15.306C11.628 13.2423 12.4477 11.2631 13.9069 9.8037C15.3661 8.34432 17.3452 7.52431 19.409 7.52405H45.35C47.4137 7.52431 49.3929 8.34432 50.8521 9.8037C52.3112 11.2631 53.131 13.2423 53.131 15.306V51.625C53.1309 52.3473 52.9297 53.0553 52.55 53.6697C52.1703 54.2841 51.6271 54.7807 50.9812 55.1039C50.3353 55.4272 49.6122 55.5642 48.8928 55.4998C48.1734 55.4353 47.4862 55.1719 46.908 54.739L34.715 45.6071C34.0419 45.1031 33.2238 44.8308 32.383 44.8308C31.5422 44.8308 30.724 45.1031 30.051 45.6071V45.6071Z" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /> </svg>
          <span class="text-white/70 px-2 text-sm w-40">Save</span>
        </button>
      </div>

      <div>
        <!-- Invite Friends -->
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
            <span class="text-gray-400 bg-gray-600/30 rounded-lg p-3 text-sm text-left w-full">IKOVG</span>
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
            <span class="text-gray-400 bg-gray-600/30 rounded-lg p-3 text-sm text-left w-full">https://</span>
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

        <div class="my-5">

          <!-- Follow Us -->
          <div
              class="flex flex-col text-center rounded-xl border-2 border-[#3C2550] shadow shadow-[#3C2550] p-4 min-h-80">
            <span class="text-3xl text-white font-bold mb-3">Follow Us!</span>
            <span class="text-lg text-gray-600 mx-auto">on there channels for sweet FREE bonus links!</span>

            <div class="flex mx-auto space-x-4 mt-7 mb-5">
              <!-- Facebook -->
              <svg width="58px" height="58px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7208)"/>
                <path
                    d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z"
                    fill="white"/>
                <linearGradient id="paint0_linear_87_7208" x1="16" y1="2" x2="16" y2="29.917"
                                gradientUnits="userSpaceOnUse">
                  <stop stop-color="#18ACFE"/>
                  <stop offset="1" stop-color="#0163E0"/>
                </linearGradient>
              </svg>

              <!-- Instagram -->
              <svg width="58px" height="58px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" fill="#C13584"/>
                <path
                    d="M24 14.1622C27.2041 14.1622 27.5837 14.1744 28.849 14.2321C30.019 14.2855 30.6544 14.481 31.0773 14.6453C31.6374 14.863 32.0371 15.123 32.457 15.5429C32.877 15.9629 33.137 16.3626 33.3547 16.9227C33.519 17.3456 33.7145 17.981 33.7679 19.1509C33.8256 20.4163 33.8378 20.7958 33.8378 23.9999C33.8378 27.2041 33.8256 27.5836 33.7679 28.849C33.7145 30.019 33.519 30.6543 33.3547 31.0772C33.137 31.6373 32.877 32.0371 32.4571 32.457C32.0371 32.8769 31.6374 33.1369 31.0773 33.3546C30.6544 33.519 30.019 33.7144 28.849 33.7678C27.5839 33.8255 27.2044 33.8378 24 33.8378C20.7956 33.8378 20.4162 33.8255 19.151 33.7678C17.981 33.7144 17.3456 33.519 16.9227 33.3546C16.3626 33.1369 15.9629 32.8769 15.543 32.457C15.1231 32.0371 14.863 31.6373 14.6453 31.0772C14.481 30.6543 14.2855 30.019 14.2321 28.849C14.1744 27.5836 14.1622 27.2041 14.1622 23.9999C14.1622 20.7958 14.1744 20.4163 14.2321 19.1509C14.2855 17.981 14.481 17.3456 14.6453 16.9227C14.863 16.3626 15.123 15.9629 15.543 15.543C15.9629 15.123 16.3626 14.863 16.9227 14.6453C17.3456 14.481 17.981 14.2855 19.151 14.2321C20.4163 14.1744 20.7959 14.1622 24 14.1622ZM24 12C20.741 12 20.3323 12.0138 19.0524 12.0722C17.7752 12.1305 16.9028 12.3333 16.1395 12.63C15.3504 12.9366 14.6812 13.3469 14.0141 14.0141C13.3469 14.6812 12.9366 15.3504 12.63 16.1395C12.3333 16.9028 12.1305 17.7751 12.0722 19.0524C12.0138 20.3323 12 20.741 12 23.9999C12 27.259 12.0138 27.6676 12.0722 28.9475C12.1305 30.2248 12.3333 31.0971 12.63 31.8604C12.9366 32.6495 13.3469 33.3187 14.0141 33.9859C14.6812 34.653 15.3504 35.0633 16.1395 35.3699C16.9028 35.6666 17.7752 35.8694 19.0524 35.9277C20.3323 35.9861 20.741 35.9999 24 35.9999C27.259 35.9999 27.6677 35.9861 28.9476 35.9277C30.2248 35.8694 31.0972 35.6666 31.8605 35.3699C32.6496 35.0633 33.3188 34.653 33.9859 33.9859C34.653 33.3187 35.0634 32.6495 35.37 31.8604C35.6667 31.0971 35.8695 30.2248 35.9278 28.9475C35.9862 27.6676 36 27.259 36 23.9999C36 20.741 35.9862 20.3323 35.9278 19.0524C35.8695 17.7751 35.6667 16.9028 35.37 16.1395C35.0634 15.3504 34.653 14.6812 33.9859 14.0141C33.3188 13.3469 32.6496 12.9366 31.8605 12.63C31.0972 12.3333 30.2248 12.1305 28.9476 12.0722C27.6677 12.0138 27.259 12 24 12Z"
                    fill="white"/>
                <path
                    d="M24.0059 17.8433C20.6026 17.8433 17.8438 20.6021 17.8438 24.0054C17.8438 27.4087 20.6026 30.1675 24.0059 30.1675C27.4092 30.1675 30.1681 27.4087 30.1681 24.0054C30.1681 20.6021 27.4092 17.8433 24.0059 17.8433ZM24.0059 28.0054C21.7968 28.0054 20.0059 26.2145 20.0059 24.0054C20.0059 21.7963 21.7968 20.0054 24.0059 20.0054C26.2151 20.0054 28.0059 21.7963 28.0059 24.0054C28.0059 26.2145 26.2151 28.0054 24.0059 28.0054Z"
                    fill="white"/>
                <path
                    d="M31.8507 17.5963C31.8507 18.3915 31.206 19.0363 30.4107 19.0363C29.6154 19.0363 28.9707 18.3915 28.9707 17.5963C28.9707 16.801 29.6154 16.1562 30.4107 16.1562C31.206 16.1562 31.8507 16.801 31.8507 17.5963Z"
                    fill="white"/>
              </svg>

              <!-- Twitter -->
              <svg width="58px" height="58px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" fill="#1DA1F2"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z"
                      fill="white"/>
              </svg>
            </div>

            <a href="#" class="text-sm text-blue-800 mt-7">@luckyladygames</a>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script setup>
import Code from './ui/Code.vue'
import Ok from './ui/Ok.vue'
import State from './ui/State.vue'
import Country from './ui/Country.vue'
</script>