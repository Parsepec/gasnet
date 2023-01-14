<template>
  <div class="mx-auto h-auto w-full pt-22 border border-gray-200 rounded-xl">
    <TabGroup>
      <TabList
        class="flex justify-around rounded-xl text-gray-600 py-6 w-full"
      >
        <div class="text-lg font-semibold text-gray-700 my-auto">Sales Report</div>

        <div
          class="flex justify-end space-x-6 rounded-xl text-gray-600 p-1 w-12/12"
        >
          <Tab
            v-for="category in Object.keys(categories)"
            as="template"
            :key="category"
            v-slot="{ selected }"
          >
            <button
              :class="[
                ' py-2.5 text-xs px-4 font-bold leading-5 text-gray-600 ring-0 ring-transparent ring-offset-0 ring-offset-transparent focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white text-gray-800 shadow border border-gray-600 rounded-md'
                  : 'text-gray-500 hover:bg-white/[0.12] hover:text-gray-600',
              ]"
            >
              {{ category }}
            </button>
          </Tab>
        </div>
      </TabList>

      <TabPanels class=" w-full">
        <TabPanel
          :class="[
            'rounded-xl bg-white p-3 w-full',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]"
        >
          <Line
            id="line-id"
            :options="chartOptions"
            :data="lineData"
            class=""
          />
        </TabPanel>
        <TabPanel
          :class="[
            'rounded-xl bg-white p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]"
        >
        <Line
            id="line-id"
            :options="chartOptions"
            :data="lineData"
            class=""
          />
        </TabPanel>
        <TabPanel
          :class="[
            'rounded-xl bg-white p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]"
        >
        <Line
            id="line-id"
            :options="chartOptions"
            :data="lineData"
            class=""
          />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { range } from "rambda";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale
);
const categories = ref({
  "12 Months": [

  ],
  "30 Days": [

  ],
  "7 Days": [

  ],
});
const lineData = ref({
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
  ],
  datasets: [
    {
      label: "",
      data: range(12, 51),
      fill: false,
      borderColor: "#2563eb",
      tension: 0.1,
    },
  ],
});

const chartOptions = ref({
  responsive: true,
});
</script>
