<template>
  <div
    class=" py-4 px-4 border border-gray-200 rounded-lg min-h-full"
  >
    <div class="flex flex-row justify-between mt-6">
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
    <div class="grid grid-auto-row content-between min-h-full  mt-12 px-3 h-[24rem]">
      <div>
        <ProgressBar
          title="PMS 1"
          volume="13,130"
          class="bg-blue-500 w-9/12"
        />
        <ProgressBar
          title="PMS 2"
          volume="7,974"
          class="bg-blue-500 w-8/12"
        />
        <ProgressBar title="DPK" volume="4,211" class="bg-yellow-500 w-6/12" />
        <ProgressBar title="AGO" volume="1,893" class="bg-yellow-500 w-3/12" />
      </div>
      <div class="flex flex-row justify-between ">
        <div>
          <h1 class="text-gray-800 text-lg font-medium">Total volume</h1>
        </div>
        <div><p class="text-md text-green-600 font-bold">27,460</p></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>
