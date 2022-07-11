<template>
  <div>
    <div class="w-full -mt-10">
      <div class="w-full">
        <div
          class="max-w-5xl mx-auto bg-slate-50 grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
        >
          <div class="p-8 space-y-5 bg-gradient-to-tl from-green-50">
            <p class="text-sm font-medium text-slate-500">
              Get your social media page managed for as low as
            </p>
            <p class="text-9xl bg-semibold text-green-900">$25</p>
            <p class="text-sm font-medium text-green-500">per Month</p>
            <div class="w-fit">
              <button
                class="text-white bg-green-900 text-sm py-3 px-5 font-medium shadow-lg uppercase tracking-wide"
                @click="whatsapp('https://wa.me/+233551590388')"
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
        <div
          class="max-w-6xl mx-auto bg-slate-50 grid-cols-12 lg:grid-cols-12 hidden overflow-hidden mt-10"
        >
          <div
            class="p-8 space-y-5 bg-slate-900 col-span-12 flex flex-col justify-center lg:col-span-4 order-3 lg:order-2"
          >
            <p class="text-2xl font-medium text-white">
              Get Our express Social Content Strategy Workbook today!
            </p>
            <p class="text-9xl bg-semibold text-green-900 hidden">$25</p>
            <p class="text-sm font-medium text-green-500 hidden">per Month</p>
            <div class="w-fit">
              <button
                class="text-white bg-green-900 text-sm py-3 px-5 font-medium shadow-lg uppercase tracking-wide"
                @click="whatsapp('https://wa.me/+233551590388')"
              >
                Buy Now
              </button>
            </div>
          </div>
          <div
            class="w-full h-full bg-slate-900 overflow-hidden col-span-6 lg:col-span-4 block order-1 lg:order-1"
          >
            <img
              src="/public/images/book/expresssocialbook.jpg"
              class="w-full h-full object-contain transform"
              alt=""
            />
          </div>
          <div
            class="w-full h-full bg-slate-900 overflow-hidden col-span-6 lg:col-span-4 block order-2 lg:order-3"
          >
            <img
              src="/public/images/book/expresssocialbook2.jpg"
              class="w-full h-full object-cover transform"
              alt=""
            />
          </div>
        </div>

        <div class="max-w-screen-lg mx-auto hidden">
          <div class="w-full flex">
            <div class="w-1/2">
              <img src="/public/images/book/expresssocialbook.jpg" alt="" />
            </div>
            <div class="w-1/2">
              <img src="/public/images/book/expresssocialbook2.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="w-full mt-20">
          <h2
            class="text-sm px-5 text-green-500 font-semibold max-w-2xl mx-auto tracking-wide uppercase mt-2 lg:text-center"
          >
            Express Social for Enterprise
          </h2>
          <p
            class="mt-2 px-5 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl max-w-2xl mx-auto lg:text-center"
          >
            Choose a package that suits you
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
                    class="text-green-500 text-sm font-medium uppercase tracking-wide flex space-x-2 items-center"
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
                      competitors. Train more students who can sell using social media and
                      digital channels. No cost to the school.
                    </p>
                    <div class="mt-5 w-fit ml-3">
                      <button
                        class="text-green-100 text-sm font-medium uppercase tracking-wide flex space-x-2 items-center"
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
                        Large Organization or Enterprise
                      </p>
                    </div>

                    <p
                      class="text-lg font-normal ml-3 text-white mt-5 leading-7 max-w-3xl"
                    >
                      Add express social media and digital marketing programs to your
                      service offering for SMEs; address their pain points; deepen
                      existing relationships, increase loyalty and attract new SME
                      clients.
                    </p>
                    <div class="mt-5 ml-3 w-fit">
                      <button
                        class="text-green-100 text-sm font-medium uppercase tracking-wide flex space-x-2 items-center"
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
              <div
                class="grid lg:grid-flow-col grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-[51rem]"
              >
                <div
                  class="row-span-1 col-span-1 lg:row-span-2 bg-black relative overflow-hidden group"
                >
                  <img
                    src="https://miro.medium.com/max/1400/1*MygmRLQxzKnlJI-O1oQyTQ.jpeg"
                    class="w-full h-full object-cover scale-110 group-hover:scale-100 transition-all duration-700 ease-linear object-center absolute top-0"
                    alt=""
                  />
                  <div
                    class="w-full h-full flex items-end p-8 relative z-10 bg-gradient-to-tr from-slate-900"
                  >
                    <div class="w-full pt-20">
                      <p class="text-base font-semibold text-white">
                        Infant Prodigy Group
                      </p>
                      <p
                        class="text-2xl lg:text-3xl font-bold mt-4 max-w-md leading-8 text-white"
                      >
                        Fruit, Taste and Love; a Perfect Combination.
                      </p>
                      <a
                        href="https://medium.com/@eazzysocial/small-business-spotlight-fruit-taste-and-love-a-perfect-combination-fd1cdf85b370"
                        target="_blank"
                        class="mt-4 text-sm flex space-x-2 w-fit font-semibold text-blue-500 group-hover:text-blue-600 transition-all ease-linear duration-200"
                      >
                        <span>Read Article</span
                        ><span
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
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-black col-span-1 row-span-1 relative overflow-hidden group"
                >
                  <img
                    src="https://miro.medium.com/max/1400/1*a9LjXAQIC1qq1OvDnt7b5g.jpeg"
                    class="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform ease-linear duration-700 absolute top-0"
                    alt=""
                  />
                  <div
                    class="w-full h-full flex items-end p-8 relative z-10 bg-gradient-to-tr from-slate-900"
                  >
                    <div class="w-full pt-20">
                      <p class="text-base font-semibold text-white">Relics and Ribbons</p>
                      <p
                        class="text-2xl lg:text-3xl font-bold mt-4 max-w-md leading-8 text-white"
                      >
                        Style, Personality and Culture
                      </p>
                      <a
                        href="https://medium.com/@eazzysocial/small-business-spotlight-402687feaaf2"
                        target="_blank"
                        class="mt-4 text-sm flex space-x-2 w-fit font-semibold text-blue-500 group-hover:text-blue-600 transition-all ease-linear duration-200"
                      >
                        <span>Read Article</span
                        ><span
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
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-black row-span-1 col-span-1 lg:col-span-2 relative overflow-hidden group"
                >
                  <img
                    src="https://miro.medium.com/max/1400/1*gBW0SqfrSyoaiKppX0yVvQ.jpeg"
                    class="w-full h-full object-cover object-center group-hover:scale-100 scale-110 transition-transform ease-linear duration-700 absolute top-0"
                    alt=""
                  />
                  <div
                    class="w-full h-full p-8 flex items-end relative z-10 bg-gradient-to-tr from-slate-900"
                  >
                    <div class="w-full pt-20">
                      <p class="text-base font-semibold text-white">
                        Great Speed Enterprise
                      </p>
                      <p
                        class="text-2xl lg:text-3xl font-bold mt-4 max-w-md leading-8 text-white"
                      >
                        Luxury and Safety in One Package.
                      </p>
                      <a
                        href="https://medium.com/@eazzysocial/small-business-spotlight-luxury-and-safety-in-one-package-the-story-of-great-speed-enterprise-90a0bfc6d48e"
                        target="_blank"
                        class="mt-4 text-sm flex space-x-2 w-fit font-semibold text-blue-500 group-hover:text-blue-600 transition-all ease-linear duration-200"
                      >
                        <span>Read Article</span
                        ><span
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
                      </a>
                    </div>
                  </div>
                </div>
                <div class="bg-black row-span-1 relative overflow-hidden group">
                  <img
                    src="https://miro.medium.com/max/1400/1*tLi2GyxzLCq5gcs0j4Pzkw.jpeg"
                    class="w-full h-full object-cover object-center absolute top-0 scale-110 group-hover:scale-100 transition-transform ease-linear duration-700"
                    alt=""
                  />
                  <div
                    class="w-full h-full flex items-end p-8 relative z-10 bg-gradient-to-tr from-slate-900"
                  >
                    <div class="w-full pt-20">
                      <p class="text-base font-semibold text-white">SCENTitALL</p>
                      <p
                        class="text-2xl lg:text-3xl font-bold mt-4 max-w-md leading-8 text-white"
                      >
                        The Beauty in Fragrance.
                      </p>
                      <a
                        href="https://medium.com/@eazzysocial/small-business-spotlight-dcc19755a095"
                        target="_blank"
                        class="mt-4 text-sm flex space-x-2 w-fit font-semibold text-blue-500 group-hover:text-blue-600 transition-all ease-linear duration-200"
                      >
                        <span>Read Article</span
                        ><span
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
                      </a>
                    </div>
                  </div>
                </div>
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
      book: ["/images/book/expresssocialbook.jpg", "/images/book/expresssocialbook2.jpg"],

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
    whatsapp: function (x) {
      window.open(x, "_blank");
    },
  },
};
</script>
