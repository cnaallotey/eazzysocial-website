<template>
  <div>
    <section class="bg-gray-900 dark:bg-gray-900 border-t-8 border-blue-500">
      <div
        class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pt-20 lg:px-6"
      >
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2
            class="mb-4 text-2xl lg:text-4xl tracking-tight font-semibold text-white dark:text-white"
          >
            How our platform works
          </h2>
          <div class="mt-10">
            <div class="space-y-8">
              <div class="flex items-start space-x-5">
                <div class="p-4 bg-blue-600 rounded-full text-white">
                  <p class="text-base font-semibold">01</p>
                </div>
                <div class="space-y-2">
                  <p class="text-lg font-semibold text-white">
                    Acquire job-ready digital skills
                  </p>
                  <p class="text-base font-normal text-gray-400 max-w-md">
                    Acquire free job-ready digital skills from eazzysocial as a student.
                    <span class="text-blue-500 hover:underline font-semibold"
                      ><router-link to="/campusclub">Click here</router-link></span
                    >
                    to view courses
                  </p>
                </div>
              </div>
              <div class="flex items-start space-x-5">
                <div class="p-4 bg-blue-600 rounded-full text-white">
                  <p class="text-base font-semibold">02</p>
                </div>
                <div class="space-y-2">
                  <p class="text-lg font-semibold text-white">Build your profile</p>
                  <p class="text-base font-normal text-gray-400 max-w-md">
                    Get help in building your CV, list your skills and build valuable
                    projects with skills acquired
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 mt-8">
          <img src="../assets/Assistant_bot.png" class="w-full" alt="" />
        </div>
      </div>
      <div
        class="gap-10 items-center py-8 px-4 mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 lg:pb-20 lg:px-6"
      >
        <div class="mt-8 order-2 lg:order-1">
          <img src="../assets/Nice_to_meet_you.png" class="w-full" alt="" />
        </div>
        <div
          class="font-light text-gray-500 sm:text-lg dark:text-gray-400 order-1 lg:order-2"
        >
          <div class="space-y-8">
            <div v-for="step in steps" :key="step.id">
              <div
                class="flex items-start space-x-5"
                v-if="step.id === 3 || step.id == 4"
              >
                <div class="p-4 bg-blue-600 rounded-full text-white">
                  <p class="text-base font-semibold">0{{ step.id }}</p>
                </div>
                <div class="space-y-2">
                  <p class="text-lg font-semibold text-white">{{ step.step }}</p>
                  <p class="text-base font-normal text-gray-400 max-w-md">
                    {{ step.disc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const steps = ref([
  {
    id: 1,
    step: "Acquire job-ready digital skills ",
    disc:
      "Acquire free job-ready digital skills from eazzysocial as a student. Click here to view courses ",
  },
  {
    id: 2,
    step: "Build your profile ",
    disc:
      "Get help in building your CV, list your skills and build valuable projects with skills acquired",
  },
  {
    id: 3,
    step: "Get found by companies ",
    disc:
      "Get shortlisted for job interviews, apply to job postings and mark yourself as open to work",
  },
  {
    id: 4,
    step: "Build your soft skills and start work ",
    disc:
      "Receive interviews, build your soft skills ie. Communication, Team Work, Time Management etc and find a great internship or full-time and part-time job!",
  },
]);
</script>
