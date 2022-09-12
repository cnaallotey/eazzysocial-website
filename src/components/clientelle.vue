<template>
  <div>
    <div class="w-full py-20 lg:py-32">
      <div class="max-w-screen-xl mx-auto px-5">
        <div>
          <div class="w-full">
            <h2
              class="text-base text-blue-500 font-semibold max-w-2xl mx-auto tracking-wide uppercase mt-2 lg:text-center"
            >
              Our Proud Clientelle
            </h2>
            <p
              class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl max-w-2xl mx-auto lg:text-center"
            >
              Trusted by Ghana’s best companies
            </p>
            <div class="w-full mt-5 hidden lg:block">
              <swiper
                :modules="modules"
                :slides-per-view="5"
                :space-between="40"
                class="flex justify-between items-center"
                autoplay=""
                @swiper="onSwiper"
                @slideChange="onSlideChange"
              >
                <swiper-slide>
                  <div class="flex justify-center items-center h-full p-10">
                    <img
                      src="../assets/Ghana_Parliament_Emblem.png"
                      class="h-20 lg:h-32 object-contain saturate-100 object-center"
                      alt=""
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="flex justify-center items-center h-full p-10">
                    <img
                      src="../assets/mantrac.png"
                      class="h-20 lg:h-32 object-contain saturate-100 object-center"
                      alt=""
                    /></div
                ></swiper-slide>
                <swiper-slide>
                  <div class="flex justify-center items-center h-full p-10">
                    <img
                      src="../assets/denmarkembassy.png"
                      class="h-20 lg:h-32 object-contain saturate-100 object-center"
                      alt=""
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="flex justify-center items-center h-full p-10">
                    <img
                      src="../assets/castrol.png"
                      class="h-20 lg:h-32 object-contain saturate-100 object-center"
                      alt=""
                    /></div
                ></swiper-slide>
                <swiper-slide>
                  <div class="flex justify-center items-center h-full p-10">
                    <img
                      src="../assets/nadmo.png"
                      class="h-20 lg:h-32 object-contain saturate-100 object-center"
                      alt=""
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="flex justify-center items-center h-full p-10">
                    <img
                      src="../assets/peduase.png"
                      class="h-20 lg:h-32 object-contain saturate-100 object-center"
                      alt=""
                    /></div
                ></swiper-slide>
                <swiper-slide>
                  <div class="flex justify-center items-center h-full p-10">
                    <img
                      src="../assets/telesol.png"
                      class="h-20 lg:h-32 object-contain saturate-100 object-center"
                      alt=""
                    /></div
                ></swiper-slide>
                <swiper-slide>
                  <div class="flex justify-center items-center h-full p-10">
                    <img
                      src="../assets/pbl.png"
                      class="h-20 lg:h-32 object-contain saturate-100 object-center"
                      alt=""
                    />
                  </div>
                </swiper-slide>
                <swiper-slide
                  ><div class="flex justify-center items-center h-full p-10">
                    <img
                      src="../assets/sltf-logo.jpg"
                      class="h-20 lg:h-32 object-contain object-center"
                      alt=""
                    /></div
                ></swiper-slide>
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
                <swiper-slide>
                  <div class="flex justify-center items-center h-full p-10">
                    <img
                      src="../assets/Ghana_Parliament_Emblem.png"
                      class="h-20 lg:h-32 object-contain saturate-100 object-center"
                      alt=""
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="flex justify-center items-center h-full p-10">
                    <img
                      src="../assets/mantrac.png"
                      class="h-20 lg:h-32 object-contain saturate-100 object-center"
                      alt=""
                    /></div
                ></swiper-slide>
                <swiper-slide>
                  <div class="flex justify-center items-center h-full p-10">
                    <img
                      src="../assets/denmarkembassy.png"
                      class="h-20 lg:h-32 object-contain saturate-100 object-center"
                      alt=""
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="flex justify-center items-center h-full p-10">
                    <img
                      src="../assets/castrol.png"
                      class="h-20 lg:h-32 object-contain saturate-100 object-center"
                      alt=""
                    /></div
                ></swiper-slide>
                <swiper-slide>
                  <div class="flex justify-center items-center h-full p-10">
                    <img
                      src="../assets/nadmo.png"
                      class="h-20 lg:h-32 object-contain saturate-100 object-center"
                      alt=""
                    />
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="flex justify-center items-center h-full p-10">
                    <img
                      src="../assets/peduase.png"
                      class="h-20 lg:h-32 object-contain saturate-100 object-center"
                      alt=""
                    /></div
                ></swiper-slide>
                <swiper-slide>
                  <div class="flex justify-center items-center h-full p-10">
                    <img
                      src="../assets/telesol.png"
                      class="h-20 lg:h-32 object-contain saturate-100 object-center"
                      alt=""
                    /></div
                ></swiper-slide>
                <swiper-slide>
                  <div class="flex justify-center items-center h-full p-10">
                    <img
                      src="../assets/pbl.png"
                      class="h-20 lg:h-32 object-contain saturate-100 object-center"
                      alt=""
                    />
                  </div>
                </swiper-slide>
                <swiper-slide
                  ><div class="flex justify-center items-center h-full p-10">
                    <img
                      src="../assets/sltf-logo.jpg"
                      class="h-20 lg:h-32 object-contain object-center"
                      alt=""
                    /></div
                ></swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
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

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      //console.log(swiper);
    };
    const onSlideChange = () => {
      //console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
};
</script>
