<template>
  <div>
    <div
      class="bg-white pb-8 h-full group hover:shadow-lg transition-all ease-linear duration-150 overflow-hidden shadow-md"
    >
      <div class="w-full h-full flex flex-col justify-between">
        <div class="w-full">
          <div class="w-full h-52 relative">
            <img :src="img" class="w-full h-full object-cover" alt="" />
            <div
              class="absolute w-full h-full top-0 bg-black bg-opacity-40 flex items-center justify-center invisible group-hover:visible transition-all ease-out duration-150"
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
                <span>Certificate upon completion</span>
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
        <p class="text-lg leading-6 font-bold text-gray-900 mt-4 mx-8">{{ price }}</p>
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
  },
};
</script>
