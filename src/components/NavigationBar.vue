<template>
  <div class="bg-[#191d32]">
    <div class="flex block sm:hidden pt-3">
      <button @click="showMobile()" data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>
      <img width="135" src="/casino-logo.png" alt="logo">
        <div class="flex flex-row absolute right-0">

          <div class="p-px p-py rounded-lg bg-gradient-to-r from-[#FBF338] to-[#7738FB] mr-2">
            <div class="bg-[#191d32] rounded-lg px-1 py-0.5">
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg group">
                <span class="flex-1 whitespace-nowrap text-white">Sign Up</span>
              </a>
            </div>
          </div>
          <div class="p-px p-py rounded-lg bg-gradient-to-r from-[#FBF338] to-[#7738FB] mr-2">
            <div class="bg-[#191d32] rounded-lg p-1">
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
    </div>

    <aside id="default-sidebar" class="bg-[#191d32] fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div class="flex flex-col h-full overflow-y-auto">
        <ul class="flex flex-col justify-center font-medium mx-auto mt-10">
          <img width="230" src="/casino-logo.png" alt="logo">
          <div class="mt-10 mb-3 p-px p-py rounded-lg bg-gradient-to-r from-[#FBF338] to-[#7738FB]">
            <li class="bg-[#191d32] rounded-lg px-6 py-1">
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg group">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <span class="flex-1 ms-3 whitespace-nowrap text-white">Sign Up</span>
              </a>
            </li>
          </div>
          <div class="p-px p-py rounded-lg bg-gradient-to-r from-[#FBF338] to-[#7738FB]">
            <li class="bg-[#191d32] rounded-lg px-6 py-1">
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg group">
                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap text-white">Login</span>
              </a>
            </li>
          </div>
          <li class="mt-16">
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img width="24" src="https://sweepstastic.blob.core.windows.net/uploads/assets/More_Grid_Big_2248a58b7d.svg" alt="">
              <span class="flex-1 ms-3 whitespace-nowrap text-[#7738fb]">Games</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img width="24" src="https://sweepstastic.blob.core.windows.net/uploads/assets/coin_83f9d98b9e.svg" alt="">
              <span class="flex-1 ms-3 whitespace-nowrap text-[#7738fb]">How it works</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img width="24" src="https://sweepstastic.blob.core.windows.net/uploads/assets/prize_8885aa3576.png" alt="">
              <span class="flex-1 ms-3 whitespace-nowrap text-[#7738fb]">Loyalty Program</span>
            </a>
          </li>
          <li class="mt-10">
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#a7a1f8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 9C10 8.60444 10.1173 8.21776 10.3371 7.88886C10.5568 7.55996 10.8692 7.30362 11.2346 7.15224C11.6001 7.00087 12.0022 6.96126 12.3902 7.03843C12.7781 7.1156 13.1345 7.30608 13.4142 7.58579C13.6939 7.86549 13.8844 8.22186 13.9616 8.60982C14.0387 8.99778 13.9991 9.39992 13.8478 9.76537C13.6964 10.1308 13.44 10.4432 13.1111 10.6629C12.7822 10.8827 12.3956 11 12 11V12M14.25 19L12.8 20.9333C12.4 21.4667 11.6 21.4667 11.2 20.9333L9.75 19H7C4.79086 19 3 17.2091 3 15V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V15C21 17.2091 19.2091 19 17 19H14.25Z" stroke="#a7a1f8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="12" cy="15" r="1" fill="#a7a1f8"></circle> </g></svg>
              <span class="flex-1 ms-3 whitespace-nowrap text-[#a7a1f8]">Help</span>
            </a>
          </li>
        </ul>
        <button @click="showMobile()" data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="absolute bottom-10 inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span class="sr-only">Open sidebar</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>
      </div>
    </aside>
  </div>
</template>

<script setup>
const showMobile = () => {
  document.querySelector('#default-sidebar').classList.toggle('-translate-x-full')
  document.querySelector('#default-sidebar').classList.toggle('w-full')
}
</script>