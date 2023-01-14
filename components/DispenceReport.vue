<template>
  <div class="py-4 px-3 border border-gray-200 rounded-lg min-h-full">
    <div class="flex flex-row justify-between">
      <h1 class="text-lg font-bold text-gray-900">
        Dispense Reports<br /><span class="text-sm text-gray-500 font-medium"
          >By Tank</span
        >
      </h1>
      <Menu as="div" class="relative">
        <div class="flex flex-row items-center px-4 py-2">
          <MenuButton class=""
            >7 Days <Icon name="heroicons:chevron-down"
          /></MenuButton>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute left-0 top-6 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-blue-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  5 Hrs
                </button>
              </MenuItem>
            </div>
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-blue-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  24 Hrs
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
    <div class="mt-12 px-3">
      <ProgressBar title="PMS 1" volume="13,130" class="bg-yellow-500 w-9/12" />
      <ProgressBar title="PMS 2" volume="7,974" class="bg-yellow-500 w-8/12" />
      <ProgressBar title="DPK" volume="4,211" class="bg-blue-500 w-6/12" />
      <ProgressBar title="AGO" volume="1,893" class="bg-blue-500 w-3/12" />
    </div>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>
