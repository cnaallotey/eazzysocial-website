<template>
  <div>
    <div class="w-full py-40 bg-slate-900">
      <div class="max-w-screen-xl mx-auto px-5">
        <div>
          <div class="w-full">
            <div class="w-full flex">
              <div class="w-1/2">
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
                  <img src="../assets/facebook.svg" class="w-8" alt="" />
                  <p class="text-base text-slate-200">facebook.com</p>
                </div>
              </div>
              <div class="w-1/2">
                <form action="" class="bg-white p-10 flex flex-col w-fit lg:w-3/4">
                  <label for="name" class="font-normal text-sm text-gray-700 mb-1"
                    >Full name</label
                  >
                  <input
                    type="text"
                    name="full name"
                    id="full-name"
                    placeholder="John Doe"
                    class="p-3 text-sm font-normal text-gray-900 border-2 bg-gray-50 border-gray-200"
                  />
                  <label for="Company" class="font-normal text-sm text-gray-700 mb-1 mt-4"
                    >Company</label
                  >
                  <input
                    type="text"
                    name="company"
                    id="company"
                    placeholder=""
                    class="p-3 text-sm font-normal text-gray-900 border-2 bg-gray-50 border-gray-200"
                  />
                  <label for="number" class="font-normal text-sm text-gray-700 mb-1 mt-4"
                    >Contact Number</label
                  >
                  <input
                    type="tel"
                    name="Contact Number"
                    id="contact-number"
                    placeholder=""
                    class="p-3 text-sm font-normal text-gray-900 border-2 bg-gray-50 border-gray-200"
                  />
                  <label for="country" class="font-normal text-sm text-gray-700 mb-1 mt-4"
                    >Country</label
                  >
                  <input
                    type="text"
                    name="Contact Numner"
                    id="contact-number"
                    placeholder=""
                    class="p-3 text-sm font-normal text-gray-900 border-2 bg-gray-50 border-gray-200"
                  />
                  <label for="message" class="font-normal text-sm text-gray-700 mb-1 mt-4"
                    >How can Eazzysocial be of help to you?</label
                  >
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    class="bg-gray-50 border-2 border-gray-200"
                    rows="10"
                  ></textarea>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
