<template>
  <div>
    <div class="w-full bg-gradient-to-t from-blue-50 pb-20 my-10 lg:my-32">
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
              Master new social media and digital marketing skills taught by experts
            </p>
            <div class="w-full mt-10">
              <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10"
              >
                <course
                  v-for="course in courses"
                  :key="course.name"
                  :name="course.name"
                  :price="course.price"
                  :discounted_price="course.price_discount"
                  :content="course.content"
                  :img="course.img"
                  :link="course.params"
                  :type="course.type"
                  :duration="course.duration"
                  :price_usd="course.price_usd"
                  :price_discount_usd="course.price_discount_usd"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import course from "./course.vue";
import coursesjson from "../assets/courses.json";
export default {
  components: { course },
  data() {
    return {
      courses: coursesjson.courses,
    };
  },
};
</script>
