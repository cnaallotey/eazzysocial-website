<template>
  <div>
    <div class="w-full mt-5 hidden lg:block">
      <swiper
        :modules="modules"
        :slides-per-view="4"
        :space-between="40"
        class="flex justify-between items-center"
        autoplay=""
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="logo in logos" :key="logo.index">
          <div class="flex justify-center items-center h-full p-10">
            <img
              :src="'/images/campusclub/' + logo"
              class="h-20 lg:h-32 object-contain saturate-100 object-center"
              alt=""
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="w-full mt-5 block lg:hidden">
      <swiper
        :modules="modules"
        :slides-per-view="2"
        :space-between="40"
        class="flex justify-between items-center"
        autoplay=""
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="logo in logos" :key="logo.index">
          <div class="flex justify-center items-center h-full p-10">
            <img
              :src="'/immages/campusclub/' + logo"
              class="h-20 lg:h-32 object-contain saturate-100 object-center"
              alt=""
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// Import Swiper styles
import "swiper/css";
import { ref } from "@vue/reactivity";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const logos = ref([
      "ashesi.jpg",
      "knust.png",
      "ktu.jpg",
      "ucc.png",
      "uew.png",
      "ug.png",
    ]);
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      logos,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
};
</script>
