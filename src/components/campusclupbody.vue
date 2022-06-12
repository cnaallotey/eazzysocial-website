<template>
  <div>
    <div class="w-full">
      <div class="w-full">
        <div class="w-full">
          <div class="max-w-screen-xl mx-auto px-5">
            <div
              class="w-full flex flex-col lg:flex-row items-center pt-10 lg:space-x-20 space-y-5 lg:space-y-0"
            >
              <div class="w-full md:1/2 bg-gray-700">
                <img
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  class="w-full h-full"
                  alt=""
                />
              </div>
              <div class="w-full lg:w-1/2 pr-8">
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
              <div class="w-full flex flex-col lg:flex-row lg:space-x-20">
                <div class="w-full lg:w-1/2 pr-8">
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
              </div>
            </div>
          </div>
          <div class="w-full bg-blue-50 py-20">
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
                      <course />
                      <course />
                      <course />
                      <course />
                      <course />
                      <course />
                    </div>
                  </div>
                  <div class="mt-10 flex justify-center">
                    <button
                      class="text-blue-500 border-2 border-blue-500 bg-transparent px-5 py-3 text-base font-medium"
                    >
                      Explore our courses
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full bg-white mt-20 h-[50rem]">
            <div class="w-full">
              <div class="w-full flex flex-col lg:flex-row">
                <div class="w-full hidden lg:flex lg:w-1/2">
                  <img
                    src="../assets/pexels-pixabay-207691.jpg"
                    class="w-full h-[50rem] object-cover object-center"
                    alt=""
                  />
                </div>
                <div class="w-full lg:w-1/2 flex items-center relative overflow-visible">
                  <div
                    class="w-full lg:max-w-xl lg:absolute top-20 p-5 mt-10 lg:mt-0 lg:p-10 bg-slate-900 lg:-translate-x-32"
                  >
                    <p
                      class="text-3xl font-semibold text-white leading-7 tracking-normal"
                    >
                      Register for free
                    </p>
                    <p class="text-base font-normal text-slate-300 leading-6 mt-2">
                      Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
                      massa dictumst amet. Sapien tortor lacus arcu.
                    </p>
                    <form action="submit" class="w-full flex flex-col mt-12 0">
                      <div
                        class="flex flex-col lg:flex-row lg:space-x-10 space-y-4 lg:space-y-0"
                      >
                        <div class="w-full lg:w-1/2 flex flex-col">
                          <label
                            for="first name "
                            class="text-slate-300 font-normal text-sm leading-5"
                            >First name</label
                          >
                          <input
                            type="text"
                            class="p-3 bg-white text-base mt-1 font-normal text-slate-800"
                          />
                        </div>
                        <div class="w-full lg:w-1/2 flex flex-col">
                          <label
                            for="Last name "
                            class="text-slate-300 font-normal text-sm leading-5"
                            >Last name</label
                          >
                          <input
                            type="text"
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
                        class="p-3 bg-white text-base mt-1 font-normal text-slate-800"
                      />

                      <label
                        for="school "
                        class="text-slate-300 font-normal mt-5 text-sm leading-5"
                        >School</label
                      >
                      <input
                        type="text"
                        class="p-3 bg-white text-base mt-1 font-normal text-slate-800"
                      />
                      <label
                        for="contact "
                        class="text-slate-300 font-normal mt-5 text-sm leading-5"
                        >Contact Number</label
                      >
                      <input
                        type="tel"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import course from "./course.vue";
export default {
  components: { course },
};
</script>
