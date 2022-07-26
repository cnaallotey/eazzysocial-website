<script setup>
const props = defineProps({
  scrollup: Function,
});
</script>

<template>
  <div class="relative bg-white overflow-x-hidden">
    <div class="w-full absolute bottom-0 lg:bottom-0 flex justify-center">
      <div
        class="w-10 h-10 lg:w-16 lg:h-16 rounded-full flex items-center justify-center bg-blue-600 text-white animate-bounce bg-opacity-80 z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 lg:h-8 w-6 lg:w-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <div class="max-w-7xl mx-auto">
      <div
        class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <svg
          class="hidden absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div>
          <!--
          Mobile menu, show/hide based on menu open state.

          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        --></div>

        <main
          class="mt-10 mx-auto max-w-5xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="sm:text-center lg:text-left">
            <h1
              class="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl"
            >
              <span class="block xl:inline">Get hired and work for top companies</span>
              <span class="block text-blue-600 xl:inline"> Globally</span>
            </h1>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              For students looking for internships or contract work, and
              graduates/non-students seeking full-time work.
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <button
                  @click="props.scrollup"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </button>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3 hidden">
                <button
                  @click="props.scrollup"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                >
                  About Us
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:pl-10 lg:right-0 lg:w-1/2">
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="../assets/hap.jpg"
        alt=""
      />
    </div>
  </div>
</template>
