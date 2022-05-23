<template>
  <div>
    <div class="w-full pb-20">
      <div class="max-w-screen-xl mx-auto px-5">
        <div>
          <div class="w-full">
            <h2
              class="text-base text-blue-500 font-semibold max-w-2xl mx-auto tracking-wide uppercase mt-2 lg:text-center"
            >
              Testimonials
            </h2>
            <p
              class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl max-w-2xl mx-auto lg:text-center"
            >
              What our clients say about us.
            </p>
            <div class="w-full mt-32">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-36">
                <test />
                <test />
                <test />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import test from "../components/test.vue";
export default {
  components: { test },
};
</script>
