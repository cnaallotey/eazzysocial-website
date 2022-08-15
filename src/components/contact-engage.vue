<template>
  <div>
    <section class="relative pb-20 lg:pb-40 overflow-hidden">
      <div class="container max-w-screen-xl mx-auto px-4">
        <div class="flex flex-wrap -m-6">
          <div class="w-full lg:w-1/2 p-6">
            <div class="lg:max-w-lg">
              <h2
                class="mb-6 font-heading font-semibold text-3xl lg:text-4xl text-gray-900"
              >
                Dont have the time to send sms
              </h2>
              <p class="mb-20 text-base text-gray-600 hidden">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation veniam
                consequat.
              </p>
              <p
                class="mb-16 lg:mb-20 text-base lg:text-lg mt-3 leading-relaxed font-heading font-medium"
              >
                Let's take the hurdle from you. Contact us!
              </p>
              <ul>
                <li
                  class="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900"
                >
                  <img src="../assets/whatsapp.png" class="w-8 h-auto mr-2" alt="" />
                  <p>+233-24-811-9530</p>
                </li>
                <li
                  class="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900"
                >
                  <img src="../assets/email.png" class="w-8 h-auto mr-2" alt="" />
                  <p>info@eazzysocial.com</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full lg:w-1/2 p-6">
            <div class="bg-gradient-orange mx-auto max-w-lg h-96 rounded-3xl">
              <div class="max-w-2xl rounded-lg relative">
                <div
                  class="w-full h-full p-4 lg:p-8 rounded-3xl bg-slate-800 relative overflow-hidden"
                >
                  <div
                    class="h-[400px] w-[400px] bg-orange-500 bg-opacity-40 -mr-[320px] -mb-[200px] rounded-full absolute bottom-0 right-0"
                  ></div>
                  <div
                    class="h-[220px] w-[220px] bg-blue-500 rounded-full bg-opacity-75 -mr-[100px] -mb-[140px] absolute bottom-0 right-0"
                  ></div>
                  <p class="text-blue-500 text-lg font-semibold text-center leading-7">
                    Calculate how much you will pay for your SMS
                  </p>
                  <div class="flex items-end my-4 w-fit mx-auto text-white">
                    <p class="text-3xl lg:text-5xl font-semibold">GHC 0.03</p>
                    <p class="text-sm font-normal">per sms</p>
                  </div>
                  <input
                    type="number"
                    id="large-input"
                    v-model="amount"
                    class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div class="flex items-center my-4 w-fit mx-auto">
                    <p class="text-sm font-normal text-white">you pay:</p>
                    <p class="text-2xl lg:text-2xl ml-2 font-semibold text-orange-500">
                      GHC {{ amountPaid }}
                    </p>
                  </div>
                  <p
                    class="text-center font-normal text-xs leading-5 text-gray-200 mt-10"
                  >
                    Sending over 100,000 sms?
                  </p>
                  <button
                    class="text-blue-500 font-medium text-sm w-full mx-auto text-center py-3"
                  >
                    Contact us for a discount!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

const amount = ref(1);

const amountPaid = computed(() => {
  return amount.value * 0.03;
});
</script>
