<template>
  <div class="mb-20 lg:mb-0">
    <div class="w-full h-[29.125rem] relative overflow-hidden mb-10 lg:mb-0">
      <img
        src="../assets/tvet.png"
        class="w-full h-full object-cover object-center"
        alt=""
      />
      <div class="w-full h-full absolute top-0 bg-blue-500 bg-opacity-60 px-5">
        <div
          class="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-8 items-center w-full h-full justify-center max-w-2xl mx-auto"
        >
          <img src="../assets/tvetlogo.png" class="h-20 w-auto rounded-xl" alt="" />
          <h2 class="font-bold text-5xl text-white text-center">Digitizing TVET</h2>
        </div>
      </div>
    </div>
    <div class="w-full mt-20">
      <div class="max-w-screen-xl mx-auto px-5">
        <div
          class="w-full flex flex-col lg:flex-row items-center pt-10 lg:space-x-20 space-y-5 lg:space-y-0"
        >
          <div class="lg:w-1/2 bg-gray-700">
            <img src="../assets/tvetccontent1.png" class="w-full" alt="" />
          </div>
          <div class="w-full lg:w-1/2 pr-8">
            <p class="text-2xl font-semibold text-blue-500 leading-7">The Challenge:</p>
            <p class="text-lg font-normal text-gray-900 mt-5 leading-7 max-w-3xl">
              The fast pace of digitization Globally coupled with COVID-19 has created
              vast opportunities for Africans with relevant digital skills. However,
              digital skills shortages remain a huge gap for most African Youth which
              impact their ability to tap into the huge global job pool created as a
              result of digitization.
            </p>
            <p class="text-lg font-normal text-gray-900 mt-5 leading-7 max-w-3xl">
              According to the World Economic Forum, future of jobs report, Traditional
              jobs are getting replaced and giving rise to digital jobs or jobs requiring
              digital skills such as social media marketing, e-commerce, fintech, digital
              design etc.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-slate-900 py-20 mt-20">
      <div class="max-w-screen-xl mx-auto px-5">
        <div
          class="w-full flex flex-col lg:flex-row lg:space-x-20 space-y-5 lg:space-y-0"
        >
          <div class="w-full lg:w-1/2 pr-8">
            <p class="text-2xl font-semibold text-blue-500 leading-7">
              Digitizing TVET (Our Response )
            </p>
            <p class="text-lg font-normal text-slate-200 mt-5 leading-7 max-w-3xl">
              Equipping Apprentices or Trainees with FREE and relevant social business and
              digital skills such as social media marketing, e-commerce management,
              business computing etc. for the rapidly changing digital world.
            </p>
            <p class="text-lg font-semibold text-white mt-5 leading-7 max-w-3xl">
              Partnering TVET centres across Africa for regular updates in curricular and
              training to cover new digital skills and competencies as well as adjustments
              in how they are taught.
            </p>
          </div>
          <div class="w-full lg:w-1/2 relative">
            <img
              src="../assets/dressmaker.jpg"
              class="w-full h-full object-contain object-center"
              alt=""
            />
            <div
              class="w-full h-full bg-gradient-to-tr from-black bg-opacity-50 absolute top-0"
            >
              <div class="w-full h-full flex flex-col justify-end p-4 lg:p-8">
                <p
                  class="text-white text-base lg:text-xl font-semibold lg:leading-7 max-w-sm"
                >
                  Free Social Media Marketing Training and Business Computing
                </p>
                <p
                  class="text-sm lg:text-base font-medium leading-5 text-slate-200 max-w-sm mt-2"
                >
                  Apprentices or Trainees enjoy free training in social media marketing,
                  e-commerce and business computing Free.
                </p>
                <button
                  class="p-3 text-base font-normal uppercase mt-5 bg-blue-600 w-fit text-white"
                  @click="modal = true"
                >
                  Register for free
                </button>
              </div>
            </div>
          </div>
          <div>
            <!-- This example requires Tailwind CSS v2.0+ -->
            <div
              class="fixed z-50 inset-0 overflow-y-auto"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
              v-if="modal"
            >
              <div
                class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
              >
                <!--
      Background overlay, show/hide based on modal state.
      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
                <div
                  class="fixed inset-0 bg-blue-400 bg-opacity-75 transition-opacity"
                  @click.prevent="modal = false"
                  aria-hidden="true"
                ></div>

                <!-- This element is to trick the browser into centering the modal contents. -->
                <span
                  class="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                  >&#8203;</span
                >

                <!--
      Modal panel, show/hide based on modal state.
      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
                <div
                  class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm p-5 lg:p-0 md:max-w-5xl"
                >
                  <div class="w-full flex flex-col-reverse lg:flex-row">
                    <div class="w-full lg:w-1/2 m-0 lg:m-10">
                      <div class="w-full hidden lg:flex justify-end">
                        <button
                          class="p-3 hover:text-red-500 transition-all ease-linear transform hover:rotate-180 duration-300"
                          @click="modal = false"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                      <h2
                        class="text-gray-900 font-semibold text-2xl tracking-tight text-left mb-2"
                      >
                        Register for Free
                      </h2>
                      <form
                        action="submit"
                        @submit.prevent="sendform()"
                        id="contact_form"
                        class="w-full"
                      >
                        <div class="w-full">
                          <div class="w-full flex flex-col">
                            <label for="name" class="text-sm text-gray-700 mb-1"
                              >Your name <span class="text-red-500">*</span></label
                            ><input
                              type="text"
                              name="name"
                              placeholder="eg. John Doe"
                              class="rounded-none border-gray-200 p-3 border-2"
                              v-model="tvet.name"
                              required
                            />
                            <label for="email" class="text-sm text-gray-700 mb-1 mt-4"
                              >Your email <span class="text-red-500">*</span></label
                            ><input
                              type="email"
                              v-model="tvet.email"
                              name="email"
                              placeholder="eg. you@example.com"
                              class="rounded-none border-gray-200 p-3 border-2"
                              required
                            />
                            <label for="Phone" class="text-sm text-gray-700 mb-1 mt-4"
                              >Your phone number</label
                            ><input
                              type="tel"
                              v-model="tvet.contact"
                              name="contact"
                              placeholder=""
                              class="rounded-none border-gray-200 p-3 border-2"
                            />
                            <label for="School" class="text-sm text-gray-700 mb-1 mt-4"
                              >Your School</label
                            ><input
                              type="text"
                              name="school"
                              v-model="tvet.school"
                              placeholder="enter school name"
                              class="rounded-none border-gray-200 p-3 border-2"
                            />
                          </div>
                        </div>
                        <div class="w-full flex flex-row space-x-4 justify-center">
                          <button
                            type="submit"
                            class="w-full py-3 text-sm font-normal uppercase tracking-wide text-white bg-blue-600 rounded-none hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl transition-all duration-200 mx-auto mt-8"
                          >
                            register
                          </button>
                        </div>
                        <div
                          class="w-full flex flex-row space-x-4 justify-center lg:hidden"
                        >
                          <button
                            type="submit"
                            class="w-full py-3 text-sm font-normal uppercase tracking-wide text-gray-500 bg-white rounded-none hover:-translate-y-1 hover:shadow-xl transition-all duration-200 mx-auto mt-8"
                            @click="modal = false"
                          >
                            Close
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="w-full lg:w-1/2 mb-10 lg:mb-0 bg-black">
                      <div class="w-full h-full bg-red-100">
                        <img
                          src="../assets/dressmaker.jpg"
                          class="w-full h-full object-cover object-center"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-blue-50 py-20">
      <div class="max-w-screen-xl mx-auto px-5">
        <div
          class="w-full flex flex-col lg:flex-row items-center lg:space-x-20 space-y-5 lg:space-y-0"
        >
          <div class="w-full lg:w-1/2 bg-gray-700">
            <img src="../assets/tvetcontent2.png" class="w-full object-contain" alt="" />
          </div>
          <div class="w-full lg:w-1/2 pr-8">
            <p class="text-2xl font-semibold text-blue-500 leading-7">
              Digital Support Center
            </p>
            <p class="text-lg font-normal text-gray-900 mt-5 leading-7 max-w-3xl">
              Digital Support centers support Apprentices or Trainees to manage and
              promote their business online. Trainees get supported by a network of social
              media marketing and digital business specialists
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full bg-white mt-20 h-auto lg:h-[40rem]">
      <div class="w-full">
        <div
          class="w-full max-w-screen-xl mx-auto flex flex-col lg:justify-end lg:flex-row relative pt-12"
        >
          <div class="w-full hidden lg:flex lg:w-3/4">
            <img
              src="../assets/gift-habeshaw-kSTcz5gE018-unsplash.jpg"
              class="w-full h-[35rem] object-cover object-center"
              alt=""
            />
          </div>
          <div
            class="w-full lg:max-w-lg lg:absolute mb-0 lg:mb-0 top-0 left-0 px-5 lg:mt-0 lg:px-10 py-10 bg-slate-900"
          >
            <p class="text-3xl font-semibold text-white tracking-normal">
              Register your TVET school for free
            </p>
            <p class="text-base font-normal text-slate-300 leading-6 mt-2">
              Partner with us! Fill the form here
            </p>
            <form
              action="submit"
              @submit.prevent="registerschool()"
              class="w-full flex flex-col mt-12 0"
            >
              <div class="flex flex-col lg:flex-row lg:space-x-5 space-y-4 lg:space-y-0">
                <div class="w-full flex flex-col">
                  <label
                    for="first name "
                    class="text-slate-300 font-normal text-sm leading-5"
                    >Full name</label
                  >
                  <input
                    type="text"
                    required
                    v-model="school.name"
                    class="p-3 bg-white text-base mt-1 font-normal text-slate-800"
                  />
                </div>
              </div>
              <label
                for="email "
                class="text-slate-300 font-normal mt-5 text-sm leading-5"
                >Email</label
              >
              <input
                type="email"
                required
                v-model="school.email"
                class="p-3 bg-white text-base mt-1 font-normal text-slate-800"
              />

              <label
                for="school "
                class="text-slate-300 font-normal mt-5 text-sm leading-5"
                >School</label
              >
              <input
                type="text"
                v-model="school.school"
                class="p-3 bg-white text-base mt-1 font-normal text-slate-800"
              />
              <label
                for="contact "
                class="text-slate-300 font-normal mt-5 text-sm leading-5"
                >Contact Number</label
              >
              <input
                type="tel"
                required
                v-model="school.contact"
                class="p-3 bg-white text-base mt-1 font-normal text-slate-800"
              />
              <button
                class="w-full flex flex-row items-center justify-center space-x-2 text-base font-normal uppercase tracking-wider bg-blue-600 mt-10 text-white py-3"
              >
                Register
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clip-rule="evenodd"
                    /></svg
                ></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full my-10 lg:my-32 bg-gradient-to-t from-blue-50">
      <div class="max-w-screen-xl mx-auto px-5">
        <p
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight mb-10 text-gray-900 sm:text-4xl max-w-2xl mx-auto lg:text-center"
        >
          Case Studies
        </p>
        <div class="w-full overflow-hidden hidden lg:block">
          <swiper
            :modules="modules"
            :slides-per-view="4"
            :space-between="40"
            class="flex justify-between h-[20rem] mb-10 lg:mb-10 overflow-hidden"
            autoplay=""
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
    <div class="w-full my-10 lg:my-32">
      <div class="max-w-screen-xl mx-auto px-5">
        <p
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight mb-10 text-gray-900 sm:text-4xl max-w-2xl mx-auto lg:text-center"
        >
          Trusted by Ghana’s Best TVET Schools
        </p>
        <div class="grid grid-cols-3 lg:grid-cols-4 gap-10">
          <div class="flex justify-center" v-for="logo in logoimages" :key="logo.index">
            <img :src="'/images/tvet/' + logo" class="h-20 lg:h-32 w-auto" alt="" />
          </div>
        </div>
      </div>
      <errornotVue v-if="error" />
      <successnotificationVue
        v-if="submitted"
        header="Registration Successful"
        :message="
          'Thank you for registering for ' +
          selectedCourse +
          '. Our team will contact you for confirmation and guide you on your next steps to taking this course. Hurray 🎉🎉 to your new exciting journey'
        "
      />
    </div>
  </div>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import errornotVue from "./errornot.vue";
import successnotificationVue from "./successnotification.vue";

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
import axios from "axios";

export default {
  components: {
    Swiper,
    SwiperSlide,
    errornotVue,
    successnotificationVue,
  },
  setup() {
    const submitted = ref(false);
    const error = ref(false);
    const loading = ref(false);
    // const onSwiper = (swiper) => {
    //   console.log(swiper);
    const tvet = ref({});

    const selectedCourse = "Free Social Media Marketing Training and Business Computing";
    // };

    const sendform = () => {
      axios
        .post("https://getform.io/f/5b88ef6a-7f7e-4c21-8e99-21b454ceedea", {
          ...tvet.value,
          course: selectedCourse,
        })
        .then((res) => {
          console.log(res);
          modal.value = false;
          tvet.value = {};

          submitted.value = true;
          setTimeout(() => {
            submitted.value = false;
          }, 10000);
        })
        .catch((err) => {
          console.log(err);
          modal.value = false;
          error.value = true;
          setTimeout(() => {
            error.value = false;
          }, 5000);
        });
    };

    const school = ref({});

    const registerschool = () => {
      //console.log(school.value);
      axios
        .post("https://getform.io/f/5b88ef6a-7f7e-4c21-8e99-21b454ceedea", school.value)
        .then((res) => {
          console.log(res);
          school.value = {};
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const modal = ref(false);

    const logoimages = ref(["img1.jpeg", "img2.jpeg", "mg3.jpeg", "img4.jpeg"]);

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
    ]);

    // const onSlideChange = () => {
    //   console.log("slide change");
    // };
    return {
      images,
      modal,
      logoimages,
      submitted,
      error,
      loading,
      tvet,
      sendform,
      selectedCourse,
      school,
      registerschool,

      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
};
</script>
