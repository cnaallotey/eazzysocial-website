<template>
  <div>
    <div class="w-full">
      <div class="max-w-screen-xl mx-auto pb-20">
        <p
          class="mt-2 text-3xl px-4 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl max-w-2xl mx-auto lg:text-center mb-10"
        >
          Frequently Asked Questions
        </p>
        <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10">
          <div class="w-full">
            <img
              src="../assets/african-blogger-waving-audience-while-filming-podcast-air-production-internet-broadcast-host-streaming-live-content-recording-digital-social-media.jpg"
              class="w-full h-full object-cover object-center"
              alt=""
            />
          </div>
          <div class="w-full px-4">
            <div class="flex-1 mt-8 lg:mt-0">
              <div v-for="faq in faqs" :key="faq.index">
                <div>
                  <button
                    class="flex items-center text-left focus:outline-none"
                    @click="openque(faq)"
                  >
                    <svg
                      class="w-6 h-6 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 12H4"
                      ></path>
                    </svg>

                    <h1 class="mx-4 text-xl text-gray-900">
                      {{ faq.que }}
                    </h1>
                  </button>

                  <div class="flex mt-8 md:mx-10" v-if="faq.open">
                    <span class="border border-blue-500"></span>

                    <p class="max-w-3xl px-4 text-gray-500">
                      {{ faq.ans }}
                    </p>
                  </div>
                </div>

                <hr class="my-8 border-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  data() {
    return {
      faqs: [
        {
          que: "How do I register to become a member of Eazzysocial Campus Club? ",
          ans:
            "Registering is done by registering for free for any of the courses available. Once you register you will be engaged by a campus ambassador to keep you updated on our programs.",
          open: false,
        },
        {
          que: "Do I pay money to become a member of Eazzysocial Campus Club?  ",
          ans:
            "Eazzysocial Campus Club membership is free and open to University students across Africa.",
          open: false,
        },
        {
          que: "Are the courses free?  ",
          ans:
            "Courses are completely free. It comes at no cost and is open to students in the various universities across Africa",
          open: false,
        },
        {
          que: "Do I get a certificate after each course? ",
          ans:
            "Certificates are awarded after completion of each course. Certificates comes at a cost 50 cedis. ",
          open: false,
        },
        {
          que: "Do I get jobs and internships after each course?  ",
          ans:
            "Internships and job opportunities are available for job-ready courses. Students that enrol in courses tagged *Job-Ready will be interviewed for internship and job opportunities.  ",
          open: false,
        },
      ],
    };
  },
  methods: {
    openque: function (x) {
      var found = this.faqs.indexOf(x);
      this.faqs[found].open = !this.faqs[found].open;
    },
  },
};
</script>
