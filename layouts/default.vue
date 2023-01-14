<template>
  <div class="relative">
    <TopNav />
    <SideBar />
    <!-- <div class="flex ml-12 w-11/12 mt-16 justify-center">
    <div class="w-10/12 px-12"><Header /></div>
  </div> -->
    <!-- <div class="ml-12 mt-16"><Header /></div> -->
    <div class="flex ml-20 w-11/12 mt-16 justify-end">
      <div class="w-10/12 px-12"><slot /></div>
    </div>
  </div>
</template>
