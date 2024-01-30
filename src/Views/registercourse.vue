<template>
  <div class="bg-slate-900 relative">
    <!-- <waves class="absolute top-0 z-0 w-full h-screen" /> -->
    <div class="w-full h-screen relative z-10">
      <div class="bg-slate-900 h-screen">
        <div class="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-y-10">
          <div class="w-full h-screen hidden lg:flex relative">
            <img
              :src="
                course.img
                  ? course.img
                  : '../assets/african-blogger-waving-audience-while-filming-podcast-air-production-internet-broadcast-host-streaming-live-content-recording-digital-social-media.jpg'
              "
              class="w-full h-full object-cover object-center"
              alt=""
            />
            <p
              class="text-2xl font-bold bg-opacity-80 text-slate-900 max-w-sm p-16 bg-white absolute bottom-0 left-0"
            >
              Join the winning Digital Marketing Training Team
            </p>
            <!-- <img
              src="../assets/dark-skinned-woman-colleagues-corporate-start-up-office-working-finish-project-diverse-team-business-people-analyzing-company-financial-reports-from-computer.jpg"
              class="w-full h-full object-cover object-center"
              alt=""
            /> -->
          </div>
          <div
            class="w-full h-screen overflow-y-auto overflow-x-hidden flex flex-col items-start p-4 lg:p-20 relative"
          >
            <div class="lg:max-w-xl py-10 lg:py-0">
              <router-link to="/">
                <div class="flex items-center space-x-2">
                  <img src="../assets/logohalf.png" class="h-12" alt="" />
                  <p class="text-3xl font-bold text-white tracking-wide">eazzysocial</p>
                </div></router-link
              >

              <p class="text-3xl font-semibold mt-2 text-white tracking-normal">
                {{ course.name }}
              </p>
              <div class="w-full flex flex-wrap items-center space-x-3 mt-5">
                <Price
                  :price="course.price"
                  :price_discount="course.price_discount"
                  :price_usd="course.price_usd"
                  :discount_price_usd="course.price_discount_usd"
                />
                <p
                  class="px-4 py-1 border-l inline-flex items-center space-x-1 border-gray-200 text-white font-normal text-lg"
                >
                  <span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-orange-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      /></svg
                  ></span>
                  <span>{{ course.duration }}</span>
                </p>
              </div>

              <p
                class="text-base font-normal text-slate-300 leading-6 mt-2"
                v-if="!submited"
              >
                Fill the form here
              </p>
              <p
                class="text-sm font-normal hidden text-white px-10 py-1 leading-6 mt-2 absolute top-6 right-0 -mr-12 rotate-45 bg-amber-500"
                v-if="!submited"
              >
                Discount Available
              </p>
              <p
                class="text-sm font-normal hidden text-white px-5 py-1 leading-6 mt-2 w-fit bg-amber-500"
                v-if="!submited"
              >
                Discount Available
              </p>
              <div
                class="w-full space-y-4 flex flex-col items-start mt-12"
                v-if="submited"
              >
                <lottie-player
                  src="https://assets4.lottiefiles.com/packages/lf20_fbwbq3um.json"
                  background="transparent"
                  speed="1"
                  style="width: 300px; height: 300px"
                  autoplay
                ></lottie-player>
                <p class="text-3xl font-semibold text-white leading-7">
                  Registration Successful
                </p>
                <p class="text-base font-normal text-gray-100 leading-6">
                  You have registered for {{ course.name }}. Your details have been saved.
                  Our Team will reach you for confirmation and provide further details on
                  your training. Hurray on your new Journey 🎉🎉
                </p>
                <button
                  class="w-full flex flex-row items-center justify-center space-x-2 text-base font-normal uppercase tracking-wider bg-blue-600 mt-10 text-white py-3"
                  v-if="course.brochure != ''"
                  @click="download(course.brochure)"
                >
                  Download Brochure
                  <span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 ml-2 rotate-90"
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
              </div>
              <form
                action="submit"
                v-if="!submited"
                @submit.prevent="formsubmit()"
                class="w-full flex flex-col mt-12 0"
              >
                <div
                  class="flex flex-col lg:flex-row lg:space-x-5 space-y-4 lg:space-y-0"
                >
                  <div class="w-full flex flex-col">
                    <label
                      for="first name "
                      class="text-slate-300 font-normal text-sm leading-5"
                      >Full name</label
                    >
                    <input
                      type="text"
                      required
                      v-model="name"
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
                  v-model="email"
                  class="p-3 bg-white text-base mt-1 font-normal text-slate-800"
                />

                <label
                  for="Contact "
                  class="text-slate-300 font-normal mt-5 text-sm leading-5"
                  >Contact Number</label
                >
                <input
                  type="tel"
                  required
                  v-model="contact"
                  class="p-3 bg-white text-base mt-1 font-normal text-slate-800"
                />
                <label for="Phone" class="text-sm text-slate-300 mb-1 mt-4"
                  >Whatsapp number</label
                ><input
                  type="tel"
                  name="whatsapp"
                  v-model="whatsapp"
                  placeholder=""
                  class="rounded-none border-gray-200 p-3 border-2"
                />
                <label
                  for="course "
                  class="text-slate-300 font-normal mt-5 text-sm leading-5"
                  >Course</label
                >
                <input
                  type="text"
                  v-model="course.name"
                  class="p-3 bg-white text-base mt-1 font-normal text-slate-800"
                  disabled="true"
                />
                <button
                  type="submit"
                  class="w-full flex flex-row items-center justify-center space-x-2 text-sm font-semibold tracking-wider bg-blue-600 mt-10 text-white py-3"
                >
                  Download Brochure
                  <span
                    ><svg
                      v-if="!loading"
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
                  <span v-if="loading"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-loader animate-spin"
                    >
                      <line x1="12" y1="2" x2="12" y2="6"></line>
                      <line x1="12" y1="18" x2="12" y2="22"></line>
                      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                      <line x1="2" y1="12" x2="6" y2="12"></line>
                      <line x1="18" y1="12" x2="22" y2="12"></line>
                      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg
                  ></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <errornotvue v-if="error" />
    </div>
  </div>
</template>

<script>
import waves from "../components/waves.vue";
import errornotVue from "../components/errornot.vue";
import axios from "axios";
import Errornot from "../components/errornot.vue";
import Price from "../components/price.vue";
import { courses } from "../assets/courses.json";
export default {
  components: { waves, errornotVue, Price },
  data() {
    Errornot;
    return {
      course: [],
      courses,
      loading: false,
      submited: false,
      error: false,
      registrationForm: {},
      name: "",
      email: "",
      contact: "",
      whatsapp: "",
    };
  },
  methods: {
    download: function (x) {
      window.open(x, "Download");
    },
    formsubmit: function () {
      this.loading = true;
      const token = "DdL3uxnOUd";
      const url = "https://getform.io/f/8f7f6104-d92d-46f0-89f9-a3576c50e5f6";
      axios
        .post(
          url,
          {
            name: this.name,
            email: this.email,
            contact: this.contact,
            course: this.course.name,
            whatsapp: this.whatsapp,
          },
          { headers: { Accept: "application/json" } }
        )
        .then((res) => {
          console.log(res);
          this.submited = true;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 3000);
        });
    },
  },
  created() {
    const isFound = this.courses.some((element) => {
      if (element.params === this.$route.params.id) {
        return true;
      }

      return false;
    });
    //this.course = this.$route.params.id;
    if (!isFound) {
      this.$router.push("/");
    } else {
      const searchIndex = this.courses.findIndex(
        (car) => car.params == this.$route.params.id
      );
      this.course = this.courses[searchIndex];
    }
  },
};
</script>

<style scoped>
body {
  background-color: green;
}
</style>
