<template>
  <div class="">
    <Listbox v-model="selectedCode">
      <div class="relative mt-1">
        <ListboxButton
            class="relative w-full cursor-default rounded-lg text-gray-300 py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
        >
          <span class="flex block truncate">
            <IconUS />
            <span class="ml-2">{{ selectedCode.name }}</span>
          </span>
          <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <ChevronDownIcon
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
            />
          </span>
        </ListboxButton>

        <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
          <ListboxOptions
              class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#282E41] py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
                v-slot="{ active, selected }"
                v-for="person in code"
                :key="person.name"
                :value="person"
                as="template"
            >
              <li
                  :class="[
                  active ? 'bg-gray-600 text-gray-300' : 'text-gray-300',
                  'relative cursor-default select-none py-2 pl-2 pr-4',
                ]"
              >
                <span
                    :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                >{{ person.name }}</span
                >
                <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center text-amber-600"
                >

                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IconUS from './IconUS.vue'

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const code = [
  {name: 'US'},
  {name: 'US'},
  {name: 'US'},
  {name: 'US'},
  {name: 'US'},
]
const selectedCode = ref(code[0])
</script>
