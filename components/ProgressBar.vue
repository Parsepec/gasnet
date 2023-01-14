<template>
  <div class="flex flex-row justify-between mb-2 py-3">
    <h1 class="font-[500] text-[16px] ">{{ title }}</h1>
    <div class="font-[500] text-[16px]">{{ volume }}</div>
  </div>
  <div class="flex flex-row rounded-xl w-full h-2 overflow-hidden bg-gray-200 z-0">
    <div class="z-20" :class="$attrs.class"></div>
    <!-- <div class="bg-gray-200 w-4/12"></div> -->
  </div>
</template>

<script setup>
defineProps({
  title: String,
  volume:String
});
</script>
