<template>
  <div>
    <div class="w-full">
      <div class="w-full">
        <div class="w-full">
          <div class="max-w-screen-xl mx-auto px-5">
            <div
              class="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-20 lg:flex-row"
            >
              <div class="w-full bg-gray-700 overflow-hidden">
                <img
                  src="https://img.freepik.com/free-photo/black-people-having-video-call-via-digital-tablet_53876-141610.jpg?size=626&ext=jpg&uid=R9744136&ga=GA1.2.1187962965.1621546722"
                  class="w-full h-full"
                  alt=""
                />
              </div>
              <div class="w-full pr-8">
                <p class="text-2xl font-semibold text-blue-500 leading-7">
                  Digital Economic Opportunities for African Youth.
                </p>
                <p class="text-lg font-normal text-gray-900 mt-5 leading-7 max-w-3xl">
                  The fast pace of digitization Globally coupled with COVID-19 has created
                  vast opportunities for Africans with relevant digital skills. However,
                  digital skills shortages remain a huge gap for most African Youth which
                  impact their ability to tap into the huge global job pool created as a
                  result of digitization.
                </p>
                <p class="text-lg font-normal text-gray-900 mt-5 leading-7 max-w-3xl">
                  According to the World Economic Forum, future of jobs report,
                  Traditional jobs are getting replaced and giving rise to digital jobs or
                  jobs requiring digital skills such as social media marketing,
                  e-commerce, fintech, digital design etc.
                </p>
              </div>
            </div>
          </div>
          <div class="w-full bg-slate-900 py-20 mt-20">
            <div class="max-w-screen-xl mx-auto px-5">
              <div
                class="w-full flex flex-col lg:flex-row lg:space-x-20 lg:items-center space-y-10 lg:space-y-0"
              >
                <div class="w-full lg:w-1/2 pr-8 h-full flex flex-col lg:justify-center">
                  <p class="text-2xl font-semibold text-blue-500 leading-7">
                    Eazzysocial Campus Club (Our Response)
                  </p>
                  <p class="text-lg font-normal text-slate-200 mt-5 leading-7 max-w-3xl">
                    The Eazzysocial Campus Club is designed to equip African Youth
                    starting first with students in various Universities across Africa
                    with relevant digital skills in the rea of social media marketing,
                    e-commerce, data science, Search Engine Optimization, Digital Content,
                    Product Design (UX/UI), digital advertising etc.
                  </p>
                  <p class="text-lg font-semibold text-white mt-5 leading-7 max-w-3xl">
                    Eazzysocial will provide free and functional digital skills to any
                    students studying in any African University at no cost and link them
                    to internships and jobs.
                  </p>
                </div>
                <div class="w-full lg:w-1/2 flex justify-center">
                  <img src="../assets/framwork.png" class="w-2/3" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="w-full bg-blue-50 py-20" id="view">
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
                    Access to job ready courses to help you gain functional skills
                  </p>
                  <div class="w-full mt-10">
                    <div
                      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10"
                    >
                      <div
                        class="bg-white pb-8 h-full group hover:shadow-lg transition-all ease-linear duration-150 overflow-hidden shadow-md"
                        v-for="course in courses"
                        :key="course.name"
                      >
                        <div class="w-full h-full flex flex-col justify-between">
                          <div class="w-full">
                            <div class="w-full h-52 relative">
                              <img
                                :src="course.img"
                                class="w-full h-full object-cover"
                                alt=""
                              />
                              <p
                                v-if="course.job_ready"
                                class="px-3 py-2 bg-black text-sm text-orange-600 bg-opacity-80 font-medium absolute bottom-5 left-8"
                              >
                                Job-Ready
                              </p>
                              <p
                                v-if="course.opened"
                                class="px-3 py-2 bg-yellow-600 text-sm text-white bg-opacity-80 font-medium absolute top-5 right-8"
                              >
                                Admissions Open
                              </p>
                            </div>
                            <div class="w-full px-8 pt-8">
                              <div class="w-fit">
                                <p
                                  class="text-sm font-semibold space-x-1 text-orange-600 p-2 bg-orange-100 flex items-center"
                                >
                                  <span
                                    ><img
                                      src="../assets/badge.png"
                                      class="w-4 hidden"
                                      alt=""
                                  /></span>
                                  <span>Certificate upon completion</span>
                                </p>
                              </div>
                              <div class="mt-4 w-full">
                                <div>
                                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                                    {{ course.name }}
                                  </h3>
                                  <p class="text-sm text-gray-500 mt-2">
                                    {{ course.content }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="w-full flex items-center space-x-20 mt-4 mx-8">
                            <Router-link
                              :to="`/campusclub/` + course.link"
                              class="text-lg leading-6 font-medium text-blue-500 w-fit"
                            >
                              Register For Free
                            </Router-link>
                            <p
                              class="w-fit inline-flex text-sm font-normal text-gray-600"
                            >
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
                              <span>1 Month</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full my-10 lg:my-32">
            <div class="max-w-screen-xl mx-auto px-5">
              <p
                class="mt-2 text-3xl leading-8 font-extrabold tracking-tight mb-10 text-gray-900 sm:text-4xl max-w-2xl mx-auto lg:text-center"
              >
                Trusted by Students in Africa's Best Tertiary Institutions
              </p>
              <tvetslide />
            </div>
          </div>
        </div>
        <div
          class="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
          v-if="submitted"
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
              @click="submitted = false"
              class="fixed inset-0 bg-blue-500 bg-opacity-75 transition-opacity"
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
              class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
            >
              <div>
                <div
                  class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
                >
                  <!-- Heroicon name: outline/check -->
                  <svg
                    class="h-6 w-6 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <h3
                    class="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Registration Successful
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Congratulations 🎉 ! You've been accepted into the
                      {{ this.selectedCourse }} course. Please download your admission
                      letter.
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <button
                  @click="downloadLetter()"
                  type="button"
                  class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                >
                  Download Admission Letter
                </button>
              </div>
            </div>
          </div>
        </div>
        <errornotVue v-if="error" />
      </div>
    </div>
  </div>
</template>

<script>
import vueCountryRegionSelect from "vue3-country-region-select";
import { courses } from "../assets/campusclubcourses.json";
import course from "./course.vue";
import tvetslide from "../components/tvetslide.vue";
import errornotVue from "./errornot.vue";
import successnotificationVue from "./successnotification.vue";
import axios from "axios";
import { VueTelInput } from "vue-tel-input";
export default {
  components: { course, tvetslide, errornotVue, successnotificationVue, VueTelInput },
  props: {
    scrollto: {
      type: Boolean,
    },
  },
  data() {
    return {
      logos: ["ashesi.jpg", "knust.png", "ktu.jpg", "ucc.png", "uew.png", "ug.png"],
      courses,
      modal: false,
      selectedCourse: "",
      selectedimg: "",
      submitted: false,
      error: false,
      loading: false,
      name: "",
      email: "",
      contact: null,
      postgrad: "No",
      year: "",
      completion: "",
      school: "",
      whatsapp: null,
      country: null,
      dialCode: null,
      alert: false,
    };
  },
  watch: {
    // whenever question changes, this function will run
    scrollto(newValue) {
      if (newValue) {
        this.scrollstocontent();
        this.$emit("changeval", false);
      }
    },
  },
  methods: {
    openmodal: function (name, img) {
      this.modal = true;
      this.selectedCourse = name;
      this.selectedimg = img;
    },

    forceFileDownload(response, title) {
      //console.log(title);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", title);
      document.body.appendChild(link);
      link.click();
    },
    downloadWithAxios(url, title) {
      axios({
        method: "get",
        url,
        responseType: "arraybuffer",
      })
        .then((response) => {
          this.forceFileDownload(response, title);
        })
        .catch(() => console.log("error occured"));
    },
    downloadLetter() {
      const pdf = this.courses.findIndex(
        (element) => element.name === this.selectedCourse
      );
      //console.log(pdf);
      const letter = `/brochures/campusclub/${this.courses[pdf].letter}`;
      window.open(letter, "Download");
    },
    scrollstocontent() {
      //console.log("hello");
      const el = document.getElementById("view");
      el.scrollIntoView({ behavior: "smooth" });
    },
  },
  computed: {
    years() {
      const year = new Date().getFullYear() + 10;
      return Array.from({ length: year - 2010 }, (value, index) => 2011 + index);
    },
  },
};
</script>
