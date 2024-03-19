<template>
  <div v-if="!isMobile">
    <div class="flex justify-center w-fit rounded-full h-fit">
      <span id="number1" class="border-2 border-r-0 border-yellow-400 rounded-l-full text-yellow-400 text-gray-500 pl-1 md:pl-10 pr-3 md:pr-5">GC 1,930,000</span>

      <label id="label" class="inline-flex border-y-2 border-yellow-400 items-center cursor-pointer py-0 -mx-2">
        <input type="checkbox" value="" class="sr-only peer">
        <div @click="toggleMe()" id="toggleMe" class="border-none relative w-12 h-6 logostar bg-yellow-400 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-none after:content-[''] after:absolute after:top-[0px] after:start-[0px] after:bg-white after:border-none border-2 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
      </label>

      <span id="number2" class="border-2 border-l-0 border-gray-500 rounded-r-full text-gray-500 pl-4 pr-1 md:pr-10 pl-6">SC 1.80</span>
    </div>
  </div>

  <div v-if="isMobile">
    <div class="flex justify-center w-fit rounded-full h-fit">

      <label id="mobilelabel" class="-mr-4 inline-flex border-2 border-r-0 rounded-full border-yellow-400 items-center cursor-pointer py-0 -mx-2">
        <input type="checkbox" value="" class="sr-only peer">
        <div @click="toggleMeMobile()" id="mobiletoggleMe" class="border-none relative w-[3.1rem] h-6 logostar bg-yellow-400 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-none after:content-[''] after:absolute after:top-[0px] after:start-[0px] after:bg-white after:border-none border-2 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
      </label>
      <span id="mobilenumber1" class="min-w-[130px] border-2 border-l-0 border-yellow-400 rounded-r-full text-yellow-400 pl-4 pr-1 md:pr-10 pl-6 whitespace-nowrap text-end">GC 1,930,000</span>
      <span id="mobilenumber2" class="hidden min-w-[130px] border-2 border-l-0 border-gray-500 rounded-r-full text-gray-500 pl-4 pr-1 md:pr-10 pl-6 whitespace-nowrap text-end">SC 1.80</span>
    </div>
  </div>


</template>

<script setup>
const props = defineProps(['isMobile'])

const toggleMe = () => {
  document.querySelector('#toggleMe').classList.toggle('logostar')
  document.querySelector('#toggleMe').classList.toggle('logousd')
  document.querySelector('#number1').classList.toggle('text-yellow-400')
  document.querySelector('#number1').classList.toggle('!border-gray-500')
  document.querySelector('#number2').classList.toggle('text-green-500')
  document.querySelector('#number2').classList.toggle('!border-green-500')
  document.querySelector('#label').classList.toggle('!border-green-500')

  document.querySelector('#gamesBackground').classList.toggle('from-yellow-700')
  document.querySelector('#gamesBackground').classList.toggle('to-yellow-400')

  document.querySelector('#gamesBackground').classList.toggle('from-green-800')
  document.querySelector('#gamesBackground').classList.toggle('to-green-600')
}

const toggleMeMobile = () => {
  document.querySelector('#mobiletoggleMe').classList.toggle('logostar')
  document.querySelector('#mobiletoggleMe').classList.toggle('logousd')
  document.querySelector('#mobilenumber1').classList.toggle('text-yellow-400')
  document.querySelector('#mobilenumber1').classList.toggle('border-gray-500')
  document.querySelector('#mobilenumber1').classList.toggle('hidden')
  document.querySelector('#mobilenumber2').classList.toggle('hidden')
  document.querySelector('#mobilenumber2').classList.toggle('text-green-500')
  document.querySelector('#mobilenumber2').classList.toggle('!border-green-500')
  document.querySelector('#mobilelabel').classList.toggle('!border-green-500')

  document.querySelector('#gamesBackground').classList.toggle('from-yellow-700')
  document.querySelector('#gamesBackground').classList.toggle('to-yellow-400')

  document.querySelector('#gamesBackground').classList.toggle('from-green-800')
  document.querySelector('#gamesBackground').classList.toggle('to-green-600')
}
</script>

<style scoped>
.logostar:after {
  content: "";
  width: 24px;
  height: 24px;
  /*top: -2px;*/
  /*left: -2px;*/
  background: url("/star-small.png");
  position: absolute;
  z-index: 40;
  display: inline-block;
}
.logousd:after {
  content: "";
  width: 25px;
  height: 25px;
  /*top: -2px;*/
  /*left: -2px;*/
  background: url("/dollar-small.png");
  position: absolute;
  z-index: 40;
  display: inline-block;
}

.logousd:before {
  content: "";
  width: 25px;
  height: 25px;
  /*top: -2px;*/
  left: 0px;
  opacity: 0.7;
  filter: saturate(.5);
  background: url("/star-small.png");
  position: absolute;
  z-index: 40;
  display: inline-block;
}

.logostar:before {
  content: "";
  width: 24px;
  height: 24px;
  /*top: -2px;*/
  left: 23px;
  opacity: 0.7;
  filter: saturate(.5);
  background: url("/dollar-small.png");
  position: absolute;
  z-index: 40;
  display: inline-block;
}
</style>