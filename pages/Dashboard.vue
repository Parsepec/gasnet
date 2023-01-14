<template>
  <Heading />
  <div class="py-5 flex flex-row justify-around">
    <Tiles /><Tiles /><Tiles /><Tiles />
  </div>
  <TotalIncome />
  <!-- <Bar id="my-chart-id" :options="chartOptions" :data="chartData" /> -->
  
  <div class="flex flex-row space-x-4 h-auto w-full mt-6">
    <div class="w-2/3">    <LineChart /></div>
    <div class="w-1/3">
      <DispenceReport />
    </div>

  </div>
  <div class="flex w-full mt-6 space-x-3">
    <BarChart title="Fuel Sales by Hour(L)" /><BarChart
      title="Total Revenue by Hour(N)"
    />
  </div>
</template>
<script setup>
import { Bar, Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
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
  BarElement,
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale
);

const chartData = ref({
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
  ],
  datasets: [
    {
      label: "",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
});
const lineData = ref({
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
  ],
  datasets: [
    {
      label: "",
      data: range(12, 51),
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
});

const chartOptions = ref({
  responsive: true,
});
</script>
