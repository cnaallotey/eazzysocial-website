<template>
  <div>
    <div
      class="bg-white h-full group hover:shadow-lg transition-all ease-linear duration-150 overflow-hidden shadow-md"
    >
      <div class="w-full h-full flex flex-col justify-between">
        <div class="w-full">
          <div class="w-full h-52 relative">
            <img :src="img" class="w-full h-full object-cover" alt="" />
            <div
              class="absolute w-full h-full hidden top-0 bg-black bg-opacity-40 flex items-center justify-center invisible group-hover:visible transition-all ease-out duration-150"
            >
              <div>
                <button class="p-2 text-white text-sm font-normal border border-white">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
          <div class="w-full px-8 pt-8">
            <div class="w-fit">
              <p
                class="text-sm font-semibold space-x-1 text-orange-600 p-2 bg-orange-100 flex items-center"
              >
                <span><img src="../assets/badge.png" class="w-4 hidden" alt="" /></span>
                <span>{{ type }}</span>
              </p>
            </div>
            <div class="mt-4 w-full">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  {{ name }}
                </h3>
                <p class="text-sm text-gray-500 mt-2">
                  {{ content }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full mt-4 px-8">
          <p class="text-lg leading-6 font-bold text-gray-900">{{ price }}</p>
          <div class="mt-4">
            <button
              class="text-blue-500 text-xs hidden font-semibold uppercase tracking-wide flex space-x-1 items-center"
            >
              <span>Register</span>
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  /></svg
              ></span>
            </button>
          </div>
        </div>
        <button
          class="w-full text-center bg-blue-600 py-2 text-base font-normal text-white uppercase"
          @click="goto(link)"
        >
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    price: {
      type: String,
    },
    content: {
      type: String,
    },
    img: {
      type: String,
    },
    link: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  methods: {
    goto: function (x) {
      this.$router.push(`/registercourse/${x}`);
    },
  },
};
</script>
