<template>
  <div
    class="flex flex-col justify-center content-center place-content-center m-auto font-bold px-6 py-4 h-screen bg-gray-100" 
  >
    <div class="m-auto text-center place-self-center align-middle">
      <h1 class="text-5xl font-bold text-gray-700">Gasnet Fuel</h1>
      <p class="mt-10 text-gray-500 font-[400] text-sm">
        Welcome back. Enter your credentials to access your<br />
        dashboard
      </p>
      <form action="" class="flex flex-col text-left mt-16">
        <label for="email" class="text-gray-600 text-xs">Email Address</label>
        <input
          type="email"
          name="email"
          id=""
          class="w-full rounded-lg px-4 py-2 border"
        />
        <div class="mt-6 mb-1 text-xs flex justify-between">
          <label for="password" class="text-gray-600 "
            >Password</label
          >
          <span class="text-blue-600">Forgot Password?</span>
        </div>
        <input
          type="password"
          name="password"
          id=""
          class="w-full rounded-lg px-4 py-2 border"
        />
        <span class="text-red-500 font-medium text-xs">Please enter correct password</span>
        <button
          class="bg-blue-600 py-3 text-center font-medium text-sm text-white rounded-md mt-10"
        >
          Continue
        </button>
      </form>
    </div>
  </div>
</template>

<script>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "",
});
</script>