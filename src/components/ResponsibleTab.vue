<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
    <div v-for="item in data" class="h-fit mx-auto w-full max-w-md rounded bg-[#191D32] p-2 shadow-xl">
      <Disclosure v-slot="{ open }">
        <DisclosureButton
            class="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm"
        >
          <div class="flex flex-col">
            <span class="font-medium text-gray-300">{{ item.title }}</span>
            <span class="text-[0.65rem] text-gray-300">{{ item.subtitle }}</span>
            <span v-if="item.subtitle2" class="text-[0.65rem] text-gray-300 leading-none">{{ item.subtitle2 }}</span>
          </div>
          <ChevronUpIcon
              :class="!open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-gray-300 my-auto"
          />
        </DisclosureButton>
        <DisclosurePanel class="z-50 bg-[#191D32] left-0 w-full px-4 pb-2 pt-4 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'

const data = ref([
  {
    title: 'Purchase limit',
    subtitle: 'Not set'
  },
  {
    title: 'Activity check',
    subtitle: 'Not set',
  },
  {
    title: 'Play limit',
    subtitle: 'SC Not set',
    subtitle2: 'LC Not set'
  },
  {
    title: 'Timeout',
    subtitle: 'Not set'
  },
  {
    title: 'Time limit',
    subtitle: 'Not set'
  },
  {
    title: 'Self-exclusion',
    subtitle: 'If you need to take a break for at least six mounth.'
  }
])
</script>
