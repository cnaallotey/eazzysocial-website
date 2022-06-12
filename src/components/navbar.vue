<template>
  <div>
    <nav>
      <div class="w-full bg-slate-900">
        <div class="max-w-screen-xl mx-auto">
          <div
            class="w-full flex items-center justify-between px-5 pb-5 pt-6 select-none"
          >
            <router-link to="/">
              <img src="../assets/logo.png" class="h-8 select-none" alt="logo" />
            </router-link>
            <ul
              class="text-white font-semibold text-sm lg:inline-flex tracking-wide space-x-8 cursor-pointer hidden"
            >
              <router-link
                to="/expressSocial"
                class="px-2 hover:text-blue-500 border-b-0 duration-200 border-blue-500 hover:border-b transform"
              >
                Express Social
              </router-link>
              <router-link
                to="/campusclub"
                class="px-2 hover:text-blue-500 border-b-0 duration-200 border-blue-500 hover:border-b transform"
              >
                Campus Club
              </router-link>
              <router-link
                to="/courses"
                class="px-2 hover:text-blue-500 border-b-0 duration-200 border-blue-500 hover:border-b transform"
              >
                Courses
              </router-link>

              <div class="group inline-block">
                <button
                  class="outline-none focus:outline-none flex items-center hover:text-blue-500 border-b-0 duration-200 border-blue-500 hover:border-b transform"
                >
                  <span class="pr-1 font-semibold flex-1">Programmes</span>

                  <span>
                    <svg
                      class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-200 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </span>
                </button>
                <ul
                  class="bg-white border rounded-sm transform z-20 scale-0 group-hover:scale-100 slate-50 absolute transition duration-200 delay-500 shadow-xl ease-out origin-center -translate-x-5 w-72 cursor-pointer mt-8 text-gray-700 font-semibold"
                >
                  <li class="rounded-sm px-3 py-3 hover:bg-gray-100 bg-slate-50">
                    <router-link to="/digitizing-TVET" class="flex items-center">
                      <div class="flex items-center space-x-2">
                        <div class="w-12 h-12 bg-blue-500"></div>
                        <span>Digitizing TVET</span>
                      </div></router-link
                    >
                  </li>
                </ul>
              </div>
              <router-link
                class="px-2 hover:text-blue-500 border-b-0 duration-200 border-blue-500 hover:border-b transform"
                to="/about"
                >About</router-link
              >
            </ul>
            <div class="flex items-center">
              <router-link
                to="/contact"
                class="text-white uppercase tracking-wider font-normal text-sm px-5 py-3 hidden lg:block bg-blue-600 tracking-narmal transform"
              >
                Get in touch
              </router-link>
              <button @click="modal = true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-auto text-white border border-white lg:hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="fixed z-40 inset-0 overflow-y-auto lg:hidden"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        v-if="modal"
      >
        <div
          class="flex items-start justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
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
            class="fixed inset-0 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span class="hidden sm:inline-block sm:align-top sm:h-screen" aria-hidden="true"
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
            class="inline-block align-bottom w-full bg-white rounded-lg text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          >
            <div class="relative bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="absolute top-0 right-0 p-5" @click="modal = false">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h3
                class="text-lg leading-6 font-bold text-purple-800 text-center uppercase mt-10"
              >
                Menu
              </h3>
              <div class="mt-5">
                <div class="flex flex-col space-y-5 text-center text-lg font-medium">
                  <router-link to="/expressSocail">Express Social</router-link>
                  <router-link to="/campusclub">Campus Club</router-link>
                  <router-link to="/courses">Courses</router-link>
                  <div>
                    <div class="w-full">
                      <button
                        class="w-full space-x-4 flex font-medium items-center justify-center"
                        @click="submenu = !submenu"
                      >
                        Programmes
                        <span
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            /></svg
                        ></span>
                      </button>
                      <div class="text-blue-600 mt-5" v-if="submenu">
                        <router-link to="/digitizng-TVET"> DIgitizing TVET </router-link>
                      </div>
                    </div>
                  </div>
                  <router-link to="/about">About</router-link>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <router-link
                to="/contact"
                class="w-full rounded-md uppercase flex justify-center py-4 bg-blue-600 text-lg font-normal text-white hover:bg-blue-900"
              >
                Get in touch
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
      submenu: false,
    };
  },
  methods: {
    gohome: function () {
      $router.push("/");
    },
  },
};
</script>
