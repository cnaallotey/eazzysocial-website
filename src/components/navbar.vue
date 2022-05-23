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
              class="text-white font-normal text-base lg:inline-flex tracking-wide space-x-8 cursor-pointer hidden"
            >
              <li>Express Social</li>
              <li>Campus Club</li>
              <li>Courses</li>
              <li>Programmes</li>
              <li>About</li>
            </ul>
            <router-link
              to="/contact"
              class="text-white font-medium text-sm px-5 py-3 hidden lg:block bg-blue-600 tracking-wide"
            >
              Get in Touch
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
