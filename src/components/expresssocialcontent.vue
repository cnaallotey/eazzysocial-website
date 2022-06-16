<template>
  <div>
    <div class="w-full -mt-10">
      <div class="w-full">
        <div
          class="max-w-5xl mx-auto bg-slate-50 grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
        >
          <div class="p-8 space-y-5 bg-gradient-to-tl from-green-50">
            <p class="text-base font-medium text-slate-500">
              Get your social media page managed for as low as
            </p>
            <p class="text-9xl bg-semibold text-green-900">$25</p>
            <p class="text-base font-medium text-green-500">per Month</p>
            <div class="w-fit">
              <button
                class="text-white bg-green-900 text-sm py-3 px-5 font-medium shadow-lg uppercase tracking-wide"
                @click="goto('/contact')"
              >
                Get in Touch
              </button>
            </div>
          </div>
          <div class="w-full h-full bg-slate-900 overflow-hidden hidden lg:block">
            <img
              src="../assets/portrait-young-african-woman-standing-cafe.jpg"
              class="w-full h-full object-contain object-center transform scale-125"
              alt=""
            />
          </div>
        </div>
        <div class="w-full mt-20">
          <h2
            class="text-base px-5 text-green-500 font-semibold max-w-2xl mx-auto tracking-wide uppercase mt-2 lg:text-center"
          >
            Express Social for Enterprise
          </h2>
          <p
            class="mt-2 px-5 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl max-w-2xl mx-auto lg:text-center"
          >
            Choose a package thats suits you
          </p>
          <div class="max-w-screen-xl mx-auto px-5 relative">
            <div
              class="w-full flex flex-col lg:flex-row items-center pt-10 lg:space-x-20"
            >
              <div
                class="w-full lg:w-1/2 h-auto lg:h-[20rem] overflow-hidden bg-gray-700"
              >
                <img
                  src="../assets/laptopimage.png"
                  class="w-full object-cover object-center"
                  alt=""
                />
              </div>
              <div class="w-full lg:w-1/2 pr-8 relative mt-10 lg:mt-0">
                <div class="flex items-center space-x-2">
                  <div class="w-1 h-10 bg-green-400"></div>
                  <p class="text-2xl font-semibold text-green-500 leading-7">
                    Online Business Outsourcing
                  </p>
                </div>
                <p
                  class="text-lg font-normal text-gray-500 mt-5 ml-3 leading-7 max-w-3xl"
                >
                  Our online business outsourcing program is designed to help small
                  business owners manage their online business operations. It involves
                  transforming your current business into an online business, outsourcing
                  your online shop operations to us or hiring a trained professional to
                  manage your online business operations.
                </p>
                <div class="mt-5 w-fit ml-3">
                  <button
                    class="text-green-500 text-base font-medium uppercase tracking-wide flex space-x-2 items-center"
                    @click="goto('/contact')"
                  >
                    <span>Learn More</span>
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
            </div>
          </div>
          <div class="w-full bg-slate-900 py-20 mt-20">
            <div class="max-w-screen-xl mx-auto px-5">
              <div
                class="w-full flex flex-col lg:flex-row items-start pt-10 space-x-0 lg:space-x-20 select-none"
              >
                <div class="lg:w-1/2">
                  <img src="../assets/chefimage.png" class="w-full" alt="" />
                  <div class="w-full py-8 pr-8">
                    <div class="flex items-center space-x-2">
                      <div class="w-1 h-10 bg-green-400"></div>
                      <p class="text-2xl font-semibold text-green-500 leading-7">
                        Vocational School Owner or Principal
                      </p>
                    </div>

                    <p
                      class="text-lg font-normal text-white mt-5 ml-3 leading-7 max-w-3xl"
                    >
                      Add express social small business social media marketing course to
                      the courses you run. Become current and stand out among your
                      competitors. Attract more students who can sell using social media
                      and digital channels. No cost to the school.
                    </p>
                    <div class="mt-5 w-fit ml-3">
                      <button
                        class="text-green-100 text-base font-medium uppercase tracking-wide flex space-x-2 items-center"
                        @click="goto('/contact')"
                      >
                        <span>Learn More</span>
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
                </div>
                <div class="lg:w-1/2">
                  <img src="../assets/businessman.png" class="w-full" alt="" />
                  <div class="w-full py-8 pr-8">
                    <div class="flex items-center space-x-2">
                      <div class="w-1 h-10 bg-green-400"></div>
                      <p class="text-2xl font-semibold text-green-500 leading-7">
                        Large Organizations or Enterprises
                      </p>
                    </div>

                    <p
                      class="text-lg font-normal ml-3 text-white mt-5 leading-7 max-w-3xl"
                    >
                      Add express social media and digital marketing programs to your
                      service offering; address their pain points; deepen existing
                      relationships, increase loyalty and attract new SME clients.
                    </p>
                    <div class="mt-5 ml-3 w-fit">
                      <button
                        class="text-green-100 text-base font-medium uppercase tracking-wide flex space-x-2 items-center"
                        @click="goto('/contact')"
                      >
                        <span>Learn More</span>
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
                </div>
              </div>
            </div>
            <div class="w-full flex justify-center mt-10">
              <button class="appearance-none hidden bg-white text-slate-800 px-5 py-2">
                Book a meeting
              </button>
            </div>
          </div>
          <div class="w-full mt-10 lg:mt-32">
            <div class="max-w-screen-xl mx-auto px-5">
              <p
                class="mt-2 px-5 text-3xl leading-8 font-extrabold tracking-tight mb-10 text-gray-900 sm:text-4xl max-w-2xl mx-auto lg:text-center"
              >
                Small Business Spotlight
              </p>
              <div class="grid grid-flow-col grid-cols-3 gap-4 h-[51rem]">
                <div class="row-span-2 bg-green-400 p-8">1</div>
                <div class="bg-green-400 row-span-1 p-8">2</div>
                <div class="bg-green-400 row-span-1 col-span-2 p-8">3</div>
                <div class="bg-green-400 row-span-1 p-8">4</div>
              </div>
            </div>
          </div>
          <div class="w-full my-10 lg:my-32">
            <div class="max-w-screen-xl mx-auto px-5">
              <p
                class="mt-2 text-3xl leading-8 font-extrabold tracking-tight mb-10 text-gray-900 sm:text-4xl max-w-2xl mx-auto lg:text-center"
              >
                Join a growing list of digital forward SMEs and organizations that trust
                our service
              </p>
              <div class="grid grid-cols-3 lg:grid-cols-5 gap-10">
                <div class="flex justify-center" v-for="image in images" :key="image">
                  <img :src="image" class="h-20 lg:h-32 w-auto" alt="" />
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
export default {
  data() {
    return {
      images: [
        "/images/expsocial/infantPro.jpeg",
        "/images/expsocial/greatspeed.jpeg",
        "/images/expsocial/scentall.jpeg",
        "/images/expsocial/tchi.jpeg",
        "/images/expsocial/mrright.jpeg",
      ],
    };
  },
  methods: {
    goto: function (x) {
      this.$router.push(x);
    },
  },
};
</script>
