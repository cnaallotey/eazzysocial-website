<template>
  <div>
    <div
      class="bg-white h-full group hover:shadow-lg transition-all ease-linear duration-150 overflow-hidden shadow-md"
    >
      <div class="w-full h-full flex flex-col justify-between">
        <div class="w-full">
          <div class="w-full h-52 relative">
            <img :src="img" class="w-full h-full object-cover" alt="" />
            <div
              class="absolute w-full h-full top-0 bg-gradient-to-t from-black opacity-50 flex items-end justify-start p-4 lg:p-8 transition-all ease-out duration-150"
            ></div>
            <div>
              <div
                class="flex absolute bottom-8 right-4 lg:right-8 items-center"
                v-if="discounted_price != 'Free'"
              >
                <p class="text-sm font-normal mr-2 text-white">
                  Certificate from <span class="font-bold">KTU</span>
                </p>
                <img
                  src="../../public/images/campusclub/ktu.jpg"
                  class="w-6 h-6"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="w-full px-4 md:px-8 pt-8">
            <div class="w-fit">
              <p
                class="text-sm font-semibold space-x-1 text-orange-600 p-2 bg-orange-100 flex items-center"
              >
                <span><img src="../assets/badge.png" class="w-4 hidden" alt="" /></span>
                <span>{{
                  discounted_price == "Free" ? "Virtual" : "In-person / Virtual"
                }}</span>
              </p>
            </div>
            <div class="mt-4 w-full">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  {{ name }}
                </h3>
                <p class="text-sm text-gray-500 mt-2">
                  {{ content }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full mt-4 px-4 md:px-8">
          <div class="w-full flex items-center justify-between">
            <div class="flex items-center space-x-1" v-if="store.country != 'GH'">
              <p class="text-sm leading-6 font-medium text-gray-400 line-through">
                {{ price_usd }} USD
              </p>
              <p class="text-lg leading-6 font-bold text-gray-900">
                {{ price_discount_usd }} {{ price_discount_usd == "free" ? "" : "USD" }}
              </p>
            </div>

            <div class="flex items-center space-x-1" v-else>
              <p class="text-sm leading-6 font-medium text-gray-400 line-through">
                {{ price }}
              </p>
              <p class="text-lg leading-6 font-bold text-gray-900">
                {{ discounted_price }}
              </p>
            </div>

            <p class="w-fit inline-flex text-sm font-normal text-gray-600">
              <span class="mr-2"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-orange-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clip-rule="evenodd"
                  /></svg
              ></span>
              <span>{{ duration }}</span>
            </p>
          </div>

          <div class="mt-4">
            <button
              class="text-blue-500 text-xs hidden font-semibold uppercase tracking-wide flex space-x-1 items-center"
            >
              <span>Register</span>
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  /></svg
              ></span>
            </button>
          </div>
        </div>
        <button
          class="w-full text-center bg-blue-600 py-3 text-sm font-semibold text-white"
          @click="goto(link)"
        >
          Download Brochure
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { router } from "../main";
import { useStore } from "../store";
const props = defineProps({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  content: {
    type: String,
  },
  img: {
    type: String,
  },
  link: {
    type: String,
  },
  type: {
    type: String,
  },
  duration: {
    type: String,
  },
  discounted_price: {
    type: String,
  },
  price_usd: {
    type: String,
  },
  price_discount_usd: {
    type: String,
  },
});

const store = useStore();

const goto = (x) => {
  router.push(`/registercourse/${x}`);
};
</script>
