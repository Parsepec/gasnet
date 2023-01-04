<template>
  <TabGroup>
    <TabList class="flex space-x-6 rounded-xl text-gray-600 p-1 w-9/12">
      <Tab
        v-for="category in Object.keys(categories)"
        as="template"
        :key="category"
        v-slot="{ selected }"
      >
        <button
          :class="[
            ' py-2.5 text-sm font-medium leading-5 text-gray-600 ring-0 ring-transparent ring-offset-0 ring-offset-transparent focus:outline-none focus:ring-2',
            selected
              ? 'bg-white shadow border-b-2 border-blue-600'
              : 'text-gray-600 hover:bg-white/[0.12] hover:text-gray-600',
          ]"
        >
          {{ category }}
        </button>
      </Tab>
    </TabList>

    <TabPanels class="mt-2 w-full">
      <TabPanel
        :class="[
          'rounded-xl bg-white p-3 w-full',
          'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
        ]"
      >
        <FuelReport/>
        <FuelReport/>
        <FuelReport/>

      </TabPanel>
      <TabPanel
        :class="[
          'rounded-xl bg-white p-3',
          'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
        ]"
      >
        <p>a</p>
      </TabPanel>
      <TabPanel
        :class="[
          'rounded-xl bg-white p-3',
          'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
        ]"
      >
        <p>a</p>
      </TabPanel>
      <TabPanel
        :class="[
          'rounded-xl bg-white p-3',
          'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
        ]"
      >
        <p>a</p>
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

const categories = ref({
  "Fuel Report": [
    {
      id: 1,
      title: "Does drinking coffee make you smarter?",
      date: "5h ago",
      commentCount: 5,
      shareCount: 2,
    },
    {
      id: 2,
      title: "So you've bought coffee... now what?",
      date: "2h ago",
      commentCount: 3,
      shareCount: 2,
    },
  ],
  "Sales Report": [
    {
      id: 1,
      title: "Is tech making coffee better or worse?",
      date: "Jan 7",
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: "The most innovative things happening in coffee",
      date: "Mar 19",
      commentCount: 24,
      shareCount: 12,
    },
  ],
  "Fuel Balance Chart": [
    {
      id: 1,
      title: "Ask Me Anything: 10 answers to your questions about coffee",
      date: "2d ago",
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: "4d ago",
      commentCount: 1,
      shareCount: 2,
    },
  ],
  "Forecast Sales Chart": [
    {
      id: 1,
      title: "Ask Me Anything: 10 answers to your questions about coffee",
      date: "2d ago",
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: "4d ago",
      commentCount: 1,
      shareCount: 2,
    },
  ],
});
</script>
