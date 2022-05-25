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
                  class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 slate-50 absolute transition duration-200 delay-500 shadow-xl ease-out origin-center -translate-x-5 w-72 cursor-pointer mt-8 text-gray-700 font-semibold"
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
            <router-link
              to="/contact"
              class="text-white font-normal text-sm px-5 py-3 hidden lg:block bg-blue-600 tracking-narmal transform"
            >
              Get in touch
            </router-link>
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
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    gohome: function () {
      $router.push("/");
    },
  },
};
</script>
