<template>
  <div>
    <section class="h-full flex flex-col">
      <div class="flex-1 grid grid-cols-1 lg:grid-cols-2">
        <div
          class="w-full flex justify-end py-12 px-4 sm:px-4 items-end lg:px-10 xl:px-10"
        >
          <div class="w-full md:w-[500px] mx-auto lg:mx-0">
            <h2
              class="text-gray-900 font-semibold text-2xl tracking-tight text-left mb-2"
            >
              Register for {{ found.name }}
            </h2>
            <p class="text-sm font-normal text-blue-500 bg-blue-50 my-5 p-3 leading-5">
              <span class="text-black">Please note:</span>
              <span class="text-bold underline decoration-blue-500 decoration-4 relative"
                ><span class="">Tuition is free.</span></span
              >
              However, to assist with job transition at the end of the course, a mandatory
              certification fee of 50 Ghana cedis or its equivalent in your country’s
              currency will be required after the first week of training.
            </p>
            <form
              action="submit"
              @submit.prevent="sendform()"
              id="contact_form"
              class="w-full"
            >
              <div class="w-full">
                <div class="w-full flex flex-col">
                  <label for="name" class="text-sm text-gray-700 mb-1">Your name </label
                  ><input
                    type="text"
                    name="name"
                    placeholder="eg. John Doe"
                    v-model="name"
                    class="rounded-none border-gray-200 px-3 py-2 border-2"
                    required
                  />
                  <label for="email" class="text-sm text-gray-700 mb-1 mt-4"
                    >Your email </label
                  ><input
                    type="email"
                    name="email"
                    v-model="email"
                    placeholder="eg. you@example.com"
                    class="rounded-none border-gray-200 px-3 py-2 border-2"
                    required
                  />
                  <label for="country" class="text-sm text-gray-700 mb-1 mt-4"
                    >Select Country</label
                  >
                  <country-select
                    v-model="country"
                    :country="country"
                    topCountry="US"
                    class="rounded-none border-gray-200 px-3 py-2 border-2 text-sm"
                  />
                  <label for="Phone" class="text-sm text-gray-700 mb-1 mt-4"
                    >Your phone number</label
                  ><input
                    type="tel"
                    name="contact"
                    v-model="contact"
                    required
                    placeholder=""
                    class="rounded-none hidden border-gray-200 px-3 py-2 border-2"
                  />
                  <vue-tel-input
                    v-model="contact"
                    mode="'international'"
                    inputOptions="{required:true}"
                    v-on:country-changed="(n) => checkcountry(n)"
                  ></vue-tel-input>
                  <label for="whatsapp" class="text-sm text-gray-700 mb-0 mt-4"
                    >Your whatsapp number</label
                  ><input
                    type="tel"
                    name="whatsapp"
                    v-model="whatsapp"
                    required
                    placeholder=""
                    class="rounded-none hidden border-gray-200 p-3 border-2"
                  />
                  <p class="text-xs mb-2 font-light text-gray-400" v-if="alert">
                    Please ensure whatsapp number is active. Eazzysocial will contact you
                    to provide further information via whatsapp
                  </p>
                  <vue-tel-input
                    v-model="whatsapp"
                    mode="'international'"
                    inputOptions="{required:true}"
                    @focusin="alert = true"
                    @focusout="alert = false"
                  ></vue-tel-input>

                  <label for="School" class="text-sm text-gray-700 mb-1 mt-4"
                    >Your School</label
                  ><input
                    type="text"
                    name="school"
                    v-model="school"
                    required
                    placeholder="enter school name"
                    class="rounded-none border-gray-200 px-3 py-2 border-2"
                  />
                  <label for="level" class="text-sm text-gray-700 mb-1 mt-4"
                    >Currently studying for a Postgraduate Degree?</label
                  ><select
                    type="text"
                    name="school"
                    v-model="postgrad"
                    required
                    placeholder="enter school name"
                    class="rounded-none border-gray-200 px-3 py-2 border-2"
                  >
                    <option value="No" selected>No</option>
                    <option value="Yes">Yes</option>
                  </select>
                  <label for="completion" class="text-sm text-gray-700 mb-1 mt-4"
                    >Year of completion</label
                  ><select
                    type="text"
                    name="school"
                    v-model="year"
                    required
                    placeholder="enter school name"
                    class="rounded-none border-gray-200 px-3 py-2 border-2"
                  >
                    <option v-for="year in years" :value="year" selected>
                      {{ year }}
                    </option>
                  </select>
                </div>
                <div class="w-full mt-4 flex flex-col hidden">
                  <label for="course" class="text-sm text-gray-700 mb-1"
                    >Course <span class="text-red-500">*</span></label
                  ><select
                    name="course"
                    class="px-3 py-2 border-2 text-base font-normal appearance-none border-gray-200 text-gray-800"
                    id=""
                    v-model="selectedCourse"
                  >
                    <option
                      v-for="course in courses"
                      :key="course.name"
                      :value="course.name"
                    >
                      {{ course.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="w-full flex flex-row space-x-4 justify-center">
                <button
                  type="submit"
                  class="w-full flex items-center justify-center space-x-2 py-3 text-sm font-normal uppercase tracking-wide text-white bg-blue-600 rounded-none hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl transition-all duration-200 mx-auto mt-8"
                >
                  <span>Register</span>
                  <span v-if="loading"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
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
                      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                    </svg>
                  </span>
                  <span v-else
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
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
            </form>
          </div>
        </div>
        <div class="hidden lg:block relative w-full">
          <img
            class="absolute inset-0 h-full w-full object-cover object-center"
            :src="found.img"
            alt=""
          />
        </div>
      </div>
    </section>
    <errornotVue v-if="error" />
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
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Registration Successful
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Congratulations 🎉 ! You've been accepted into the
                  {{ this.selectedCourse }} course. Please download your admission letter.
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
  </div>
</template>

<script>
import { VueTelInput } from "vue-tel-input";
import errornotVue from "./errornot.vue";
import successnotificationVue from "./successnotification.vue";
import { courses } from "../assets/campusclubcourses.json";
import axios from "axios";
import { router } from "../main";
export default {
  components: { VueTelInput, successnotificationVue, errornotVue },
  data() {
    return {
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
      found: {},
    };
  },
  methods: {
    sendform() {
      this.loading = true;
      const token = "LRIp0GUh5X";
      axios
        .post(`https://app.headlessforms.cloud/api/v1/form-submission/${token}`, {
          name: this.name,
          email: this.email,
          contact: this.contact,
          school: this.school,
          course: this.found.name,
          whatsapp: this.whatsapp,
          postgrad: this.postgrad,
          CompletionYear: this.year,
          country: this.country,
          code: this.dialCode,
          affiliate: this.$route.query.affiliate,
        })
        .then((res) => {
          this.modal = false;

          this.submitted = true;
          this.loading = false;
        })
        .catch((err) => {
          this.modal = false;
          this.loading = false;
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 5000);
        });
    },
    checkcountry(n) {
      //console.log(n);
      this.dialCode = n.dialCode;
    },
    downloadLetter() {
      //console.log(pdf);
      const letter = `/brochures/campusclub/${this.found.letter}`;
      window.open(letter, "Download");
    },
  },
  computed: {
    years() {
      const year = new Date().getFullYear() + 10;
      return Array.from({ length: year - 2010 }, (value, index) => 2011 + index);
    },
  },
  mounted() {
    this.found = this.courses.find((element) => element.link === this.$route.params.id);
    if (this.found !== undefined) return;
    this.$router.push("/campusclub");
  },
};
</script>
