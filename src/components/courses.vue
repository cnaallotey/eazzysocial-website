<template>
  <div>
    <div class="w-full bg-blue-50 py-20 my-10 lg:my-32">
      <div class="max-w-screen-xl mx-auto px-5">
        <div>
          <div class="w-full">
            <h2
              class="text-base text-blue-500 font-semibold max-w-2xl mx-auto tracking-wide uppercase mt-2 lg:text-center"
            >
              courses
            </h2>
            <p
              class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl max-w-2xl mx-auto lg:text-center"
            >
              Master new social media and digital marketing tools taught by experts
            </p>
            <div class="w-full mt-10">
              <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10"
              >
                <course />
                <course />
                <course />
                <course />
                <course />
                <course />
              </div>
            </div>
            <div class="mt-10 flex justify-center">
              <button
                class="text-blue-500 border-2 border-blue-500 bg-transparent px-5 py-3 text-base font-medium"
              >
                Explore our courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import course from "./course.vue";
export default {
  components: { course },
};
</script>
