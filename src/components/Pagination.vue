<template>
  <div class="flex items-center justify-between bg-transparent">
    <div class="flex items-center justify-between">
      <div class="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-5">
        <div class="flex space-x-5">
          <span class="text-sm text-gray-400">
            Items per page
          </span>
          <div class="flex text-gray-700 my-auto lg:space-x-5">
            <span class="text-sm">10</span>
            <ChevronDownIcon
                class="h-5 w-5"
                aria-hidden="true"
            />
          </div>
        </div>
        <div class="flex text-gray-700 my-auto lg:space-x-5">
          <span class="text-sm">1 - 3 of 3</span>
          <ChevronLeftIcon
              class="h-5 w-5"
              aria-hidden="true"
          />
          <ChevronRightIcon
              class="h-5 w-5"
              aria-hidden="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from '@heroicons/vue/20/solid'

const items = [
  { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]
</script>