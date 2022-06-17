<template>
  <div>
    <div class="w-full bg-slate-900 relative h-[40rem]">
      <img
        src="../assets/pexels-huseyn-kamaladdin-667838.jpg"
        class="w-full h-full object-cover object-center"
        alt=""
      />
      <div class="w-full absolute top-0">
        <div class="max-w-screen-xl mx-auto py-20 px-5 h-full">
          <div class="w-full flex flex-col lg:flex-row">
            <div class="w-full lg:w-1/2 bg-slate-900 p-5 lg:p-10 bg-opacity-90">
              <h2 class="font-bold text-5xl text-white mb-5">About Us</h2>
              <p class="text-slate-200 text-base font-normal leading-7 max-w-2xl">
                Eazzysocial delivers the standard in social media and digital education in
                Ghana and has trained more organizations onto a single standard social
                media and digital educational curriculum than any other.
              </p>
              <p
                class="text-slate-200 text-base font-normal leading-7 mt-5 max-w-2xl pb-20"
              >
                We are also involved in consulting and designing large enterprise wide
                digital transformation roadmaps for key Government agencies and
                corporations across Africa.
              </p>
            </div>
            >
          </div>
        </div>
      </div>
    </div>
    <div class="w-full my-10 lg:my-32 bg-gradient-to-t from-blue-50">
      <div class="max-w-screen-xl mx-auto px-5">
        <p
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight mb-10 text-gray-900 sm:text-4xl max-w-2xl mx-auto lg:text-center"
        >
          Events Gallery
        </p>
        <div class="w-full overflow-hidden hidden lg:block">
          <swiper
            :modules="modules"
            :slides-per-view="3"
            :space-between="40"
            class="flex justify-between h-[20rem] mb-10 lg:mb-10 overflow-hidden"
            autoplay=""
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide v-for="image in images" :key="image" class="overflow-hidden">
              <div class="flex flex-col items-center overflow-hidden">
                <img
                  :src="image.img"
                  class="h-20 lg:h-[15rem] object-contain object-center"
                  alt=""
                />
                <p class="text-center leading-5 px-5 mt-5">{{ image.caption }}</p>
              </div>
            </swiper-slide></swiper
          >
        </div>
        <div class="w-full overflow-hidden lg:hidden">
          <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="10"
            class="flex justify-between h-[20rem] mb-10 lg:mb-20 overflow-hidden"
            autoplay=""
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide v-for="image in images" :key="image" class="overflow-hidden">
              <div class="flex flex-col items-center overflow-hidden">
                <img
                  :src="image.img"
                  class="h-[15rem] object-contain object-center"
                  alt=""
                />
                <p class="text-center leading-5 px-5 mt-5">{{ image.caption }}</p>
              </div>
            </swiper-slide></swiper
          >
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

import { ref } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };

    const new_images = ref([
      {
        images: [
          "/images/gallery/img1.jpeg",
          "/images/gallery/img2.jpeg",
          "/images/gallery/img3.jpeg",
          "/images/gallery/img4.jpeg",
          "/images/gallery/img5.jpeg",
        ],
      },
      {
        images: [
          "/images/gallery/img6.jpeg",
          "/images/gallery/img7.jpeg",
          "/images/gallery/img8.jpeg",
          "/images/gallery/img9.jpeg",
          "/images/gallery/img10.jpeg",
        ],
      },
      {
        images: [
          "/images/gallery/img11.jpeg",
          "/images/gallery/img12.jpeg",
          "/images/gallery/img13.jpeg",
          "/images/gallery/img14.jpeg",
        ],
      },
    ]);

    const images = ref([
      {
        img: "/images/gallery/img1.jpeg",
        caption:
          "Social Media Marketing Training and Business Computing for student at Winglow Fashion Academy",
      },
      {
        img: "/images/gallery/img2.jpeg",
        caption:
          "Social Media Marketing Training and Business Computing for student at Winglow Fashion Academy",
      },
      {
        img: "/images/gallery/img3.jpeg",
        caption:
          "Social Media Marketing Training and Business Computing for students at FC Beauty Academy",
      },
      {
        img: "/images/gallery/img4.jpeg",
        caption:
          "Social Media Marketing Training and Business Computing for students at FC Beauty Academy",
      },
      {
        img: "/images/gallery/img5.jpeg",
        caption:
          "Executive Social Media Marketing and Digital Selling for Marketing and Sales professionals at  Peduase Valley Resort - Aburi, Ghana",
      },
      {
        img: "/images/gallery/img6.jpeg",
        caption:
          "Executive Social Media Marketing and Digital Selling for Marketing and Sales professionals at  Peduase Valley Resort - Aburi, Ghana",
      },
      {
        img: "/images/gallery/img7.jpeg",
        caption:
          "Executive Social Media Marketing and Digital Selling for Marketing and Sales professionals at Mantrac - Ghana.",
      },
      {
        img: "/images/gallery/img8.jpeg",
        caption:
          "Executive Social Media Marketing for Marketing and Sales professionals at Student Loan Trust Fund. Accra - Ghana",
      },
      {
        img: "/images/gallery/img9.jpeg",
        caption:
          "Executive Social Media Marketing training for some executives at the Parliament of Ghana.",
      },
      {
        img: "/images/gallery/img10.jpeg",
        caption:
          "Executive Social Media Marketing training for some executives at the Parliament of Ghana.",
      },
      {
        img: "/images/gallery/img11.jpeg",
        caption: "Free social media marketing launchpad program for SME’s at Kumasi",
      },
      {
        img: "/images/gallery/img12.jpeg",
        caption: "Free social media marketing launchpad program for SME’s at Kumasi",
      },
      {
        img: "/images/gallery/img13.jpeg",
        caption: "Free social media marketing launchpad program for SME’s at Kumasi",
      },
      {
        img: "/images/gallery/img14.jpeg",
        caption: "Free social media marketing launchpad program for SME’s at Kumasi",
      },
    ]);

    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      images,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
};
</script>

<!-- <script>
export default {
  data() {
    return {
      images: [
        "/public/images/expsocial/infantPro.jpeg",
        "/public/images/expsocial/greatspeed.jpeg",
        "/public/images/expsocial/scentall.jpeg",
        "/public/images/expsocial/tchi.jpeg",
        "/public/images/expsocial/mrright.jpeg",
      ],
    };
  },
};
</script> -->
