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
                            </div>
                            <div class="w-full px-8 pt-8">
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
                          <div class="w-fit">
                            <button
                              @click="openmodal(course.name, course.img)"
                              class="text-lg leading-6 font-medium text-blue-500 mt-4 mx-8"
                            >
                              Register For Free
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <!-- This example requires Tailwind CSS v2.0+ -->
              <div
                class="fixed z-40 inset-0 overflow-y-auto"
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
                    class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm p-5 lg:p-0 md:max-w-5xl sm:w-full"
                  >
                    <div class="w-full flex">
                      <div class="w-full lg:w-1/2 m-0 lg:m-10">
                        <h2
                          class="text-gray-900 font-semibold text-2xl tracking-tight text-left mb-2"
                        >
                          Register for Free
                        </h2>
                        <form action="submit" id="contact_form" class="w-full">
                          <div class="w-full">
                            <div class="w-full flex flex-col">
                              <label for="name" class="text-sm text-gray-700 mb-1"
                                >Your name <span class="text-red-500">*</span></label
                              ><input
                                type="text"
                                name="name"
                                placeholder="eg. John Doe"
                                class="rounded-none border-gray-200 p-3 border-2"
                                required
                              />
                              <label for="email" class="text-sm text-gray-700 mb-1 mt-4"
                                >Your email <span class="text-red-500">*</span></label
                              ><input
                                type="email"
                                name="email"
                                placeholder="eg. you@example.com"
                                class="rounded-none border-gray-200 p-3 border-2"
                                required
                              />
                              <label for="Phone" class="text-sm text-gray-700 mb-1 mt-4"
                                >Your phone number</label
                              ><input
                                type="tel"
                                name="contact"
                                placeholder=""
                                class="rounded-none border-gray-200 p-3 border-2"
                              />
                              <label for="School" class="text-sm text-gray-700 mb-1 mt-4"
                                >Your School</label
                              ><input
                                type="text"
                                name="school"
                                placeholder="enter school name"
                                class="rounded-none border-gray-200 p-3 border-2"
                              />
                            </div>
                            <div class="w-full mt-4 flex flex-col">
                              <label for="course" class="text-sm text-gray-700 mb-1"
                                >Course <span class="text-red-500">*</span></label
                              ><select
                                name="course"
                                class="p-3 border-2 text-base font-normal appearance-none border-gray-200 text-gray-800"
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
                              class="w-full py-3 text-sm font-normal uppercase tracking-wide text-white bg-blue-600 rounded-none hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl transition-all duration-200 mx-auto mt-8"
                            >
                              register
                            </button>
                          </div>
                        </form>
                      </div>
                      <div class="w-1/2 bg-black">
                        <div class="w-full h-full bg-red-100">
                          <img
                            :src="selectedimg"
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
    </div>
  </div>
</template>

<script>
import course from "./course.vue";
export default {
  components: { course },
  data() {
    return {
      courses: [
        {
          name: "Social Media Marketing (Community Management) ",
          content:
            "Acquire relevant skills needed in starting a career in social media marketing. Gain and jobs and internships with companies globally. Earn monthly stipends while in school.",
          img:
            "https://images.unsplash.com/photo-1537731121640-bc1c4aba9b80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
          name: "E-commerce Management and SEO ",
          content:
            "Acquire relevant skills in e-commerce and search engine optimization. Gain jobs and internships with companies globally. Earn monthly stipends while in school.",
          img:
            "https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZWNvbW1lcmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          name: "Business Blogging ",
          content:
            "Turn your passion for writing into a profitable venture writing articles and stories for businesses and while learning the secret of blogging.",
          img:
            "https://images.unsplash.com/photo-1604933762023-7213af7ff7a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ2dpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          name: "Data Science and Analytics",
          content:
            "Start a journey with data science and business analytics. Gain jobs and internships with companies globally. Earn monthly stipends while in school. ",
          img:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          name: "UX and UI Design Fundamentals",
          content:
            "Learn the basics of designing websites and apps through human-centred interaction design. Gain jobs and internships with companies globally. Earn monthly stipends while in school.",
          img:
            "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dWklMjBkZXNpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          name: "LinkedIn for Jobs and Personal Branding ",
          content:
            "Build an effective personal brand for your career as a student. Increases your chances of getting jobs through Social Media and LinkedIn. ",
          img:
            "https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlua2VkaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          name: "CV Writing ",
          content:
            "Learn advanced techniques in writing an effective CV that increases your chances of landing a job. Gain support in re-writing your CV.",
          img:
            "https://images.unsplash.com/photo-1602407294553-6ac9170b3ed0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Z8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          name: "Business Computing (Microsoft Word, Excel, PowerPoint…)",
          content:
            "Strengthen your skills in using ICT for business. Gain advanced knowledge in Excel, Microsoft Word etc. ",
          img:
            "https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
      ],
      modal: false,
      selectedCourse: "",
      selectedimg: "",
    };
  },
  methods: {
    openmodal: function (x, y) {
      this.modal = true;
      this.selectedCourse = x;
      this.selectedimg = y;
    },
  },
};
</script>
