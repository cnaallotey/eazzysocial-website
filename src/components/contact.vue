<template>
  <div>
    <div class="w-full py-40 bg-slate-900">
      <div class="max-w-screen-xl mx-auto px-5">
        <div>
          <div class="w-full">
            <div class="w-full flex flex-col lg:flex-row">
              <div class="w-full lg:w-1/2">
                <p
                  class="mt-2 text-3xl leading-8 font-bold tracking-tight text-white md:text-4xl max-w-2xl mx-auto"
                >
                  Send us a message
                </p>
                <p class="text-sm text-slate-200 mt-5 max-w-xs">
                  Tell us what your business needs, and we'll find the best solution for
                  you.
                </p>
                <p class="text-sm text-slate-200 mt-5">
                  Or you can reach us on the following platforms.
                </p>
                <div class="mt-10 flex space-x-2 items-center">
                  <img src="../assets/facebook.png" class="w-8" alt="" />
                  <p class="text-base text-slate-200">eazzysocial</p>
                </div>
                <div class="mt-10 flex space-x-2 items-center">
                  <img src="../assets/whatsapp.png" class="w-8" alt="" />
                  <p class="text-base text-slate-200">+233 54 666 0320</p>
                </div>
                <div class="mt-10 max-w-sm flex flex-col">
                  <p class="text-base text-white font-medium">
                    or you can send us an email on
                    <span class="font-bold text-blue-500">info@eazzysocial.com </span>
                  </p>

                  <div class="w-fit mt-2">
                    <button
                      @click.prevent="mail()"
                      class="bg-blue-600 uppercase text-white font-normal text-sm tracking-wide px-5 py-3"
                    >
                      Send an email
                    </button>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-1/2">
                <form
                  action=""
                  class="bg-white p-10 flex flex-col w-full mt-10 lg:mt-0 lg:w-full"
                >
                  <label for="name" class="font-normal text-sm text-gray-700 mb-1"
                    >Full name</label
                  >
                  <input
                    type="text"
                    name="full name"
                    id="full-name"
                    placeholder="John Doe"
                    class="p-3 text-sm rounded-md font-normal text-gray-900 border-2 bg-gray-50 border-gray-200"
                  />
                  <label for="Company" class="font-normal text-sm text-gray-700 mb-1 mt-4"
                    >Company</label
                  >
                  <input
                    type="text"
                    name="company"
                    id="company"
                    placeholder=""
                    class="p-3 text-sm font-normal rounded-md text-gray-900 border-2 bg-gray-50 border-gray-200"
                  />
                  <label for="email" class="font-normal text-sm text-gray-700 mb-1 mt-4"
                    >Email address</label
                  >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@gmail.com"
                    class="p-3 text-sm font-normal rounded-md text-gray-900 border-2 bg-gray-50 border-gray-200"
                  />
                  <label for="number" class="font-normal text-sm text-gray-700 mb-1 mt-4"
                    >Contact Number</label
                  >
                  <input
                    type="tel"
                    name="Contact Number"
                    id="contact-number"
                    placeholder=""
                    class="p-3 text-sm font-normal rounded-md text-gray-900 border-2 bg-gray-50 border-gray-200"
                  />
                  <label for="country" class="font-normal text-sm text-gray-700 mb-1 mt-4"
                    >Country</label
                  >
                  <input
                    type="text"
                    name="Contact Numner"
                    id="contact-number"
                    placeholder=""
                    class="p-3 text-sm font-normal rounded-md text-gray-900 border-2 bg-gray-50 border-gray-200"
                  />
                  <label for="message" class="font-normal text-sm text-gray-700 mb-1 mt-4"
                    >How can Eazzysocial be of help to you?</label
                  >
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    class="bg-gray-50 border-2 rounded-md border-gray-200 p-3"
                    rows="10"
                  ></textarea>
                  <button
                    class="text-sm uppercase tracking-wider font-normal flex justify-center items-center space-x-2 text-white w-full py-3 bg-blue-600 mt-5"
                  >
                    Send message
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
</template>

<script>
export default {
  methods: {
    mail: function () {
      window.open("mailto:info@eazzysocial.com");
    },
  },
};
</script>
