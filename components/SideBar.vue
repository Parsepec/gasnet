<template>
  <div
    class="w-2/12 px-10 bg-gray-50 h-full fixed top-14 left-0 z-10 overflow-x-hidden hidden md:block"
  >
    <div class="flex flex-col justify-center outline-blue-500 py-10">
      <Listbox v-model="selectedPerson">
        <ListboxButton
          class="bg-white flex flex-row py-2 px-4 mb-2 outline-blue-500 outline border-blue-600 rounded-lg justify-between content-center"
          ><span class="justify-self-center">{{ selectedPerson.name }}</span
          ><ArrowDownIcon
            class="w-4 h-4 text-blue-600 self-center justify-self-end"
        /></ListboxButton>
        <ListboxOptions class="text-center bg-gray-100 py-2 rounded-lg mb-4">
          <ListboxOption
            v-for="person in people"
            class="py-2 cursor-pointer"
            :key="person.id"
            :value="person"
            :disabled="person.unavailable"
          >
            {{ person.name }}
          </ListboxOption>
        </ListboxOptions>
      </Listbox>
      <button
        class="bg-blue-600 px-4 py-2 text-white flex justify-center content-center rounded-lg"
      >
        <Icon name="line-md:plus" class="self-center self-center mr-2" /><span
          >New Station</span
        >
      </button>
    </div>
    <div class="mx-auto my-4 flex flex-col justify-center">
      <ul class="justify-self-center">
        <li
          class="text-gray-600 hover:text-blue-600 flex flex-row items-center text-center"
        >
          <Icon name="line-md:home" class="mr-4" /><span>
            <NuxtLink to="/Dashboard"> Dashboard </NuxtLink></span
          >
        </li>
      </ul>
      <h3
        class="uppercase font-[500] text-gray-400 text-xs tracking-wid mt-6 mb-4"
      >
        analytics
      </h3>

      <ul class="justify-self-center">
        <li
          class="text-gray-600 hover:text-blue-600 flex flex-row items-center text-center mb-3"
        >
          <Icon name="line-md:document-report" class="mr-4" /><span
            ><NuxtLink to="/Reports"> Reports </NuxtLink></span
          >
        </li>
        <li
          class="text-gray-600 hover:text-blue-600 flex flex-row items-center text-center"
        >
          <Icon name="line-md:laptop" class="mr-4" /><span>Expenses</span>
        </li>
      </ul>
      <h3
        class="uppercase font-[500] text-gray-400 text-xs tracking-wid mt-6 mb-4"
      >
        support
      </h3>
      <ul class="justify-self-center">
        <li
          class="text-gray-600 hover:text-blue-600 flex flex-row items-center text-center"
        >
          <Icon name="line-md:check-list-3-filled" class="mr-4" /><span
            >Catalogue</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ArrowDownIcon } from "@heroicons/vue/24/solid/esm/index.js";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
];
const selectedPerson = ref(people[0]);
</script>
