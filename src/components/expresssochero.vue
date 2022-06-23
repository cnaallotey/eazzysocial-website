<template>
  <div>
    <div class="w-full h-[29.125rem] relative overflow-hidden">
      <img
        src="../assets/group-afro-americans-working-together.jpg"
        class="w-full h-full object-cover object-top"
        alt=""
      />
      <div class="w-full h-full absolute top-0 bg-green-500 bg-opacity-60 px-5">
        <div class="flex flex-col items-center mt-20 lg:mt-32 max-w-2xl mx-auto">
          <h2
            class="font-bold text-5xl text-white flex flex-col lg:flex-row items-center text-center lg:text-left"
          >
            <span
              ><img src="../assets/expsocialimg.png" class="w-20 mr-4 rounded-2xl" alt=""
            /></span>
            Express Social
          </h2>
          <p class="text-lg font-normal text-center max-w-4xl mt-6 text-white">
            A community of small business owners breaking barriers and impacting their
            community positively
          </p>
        </div>
      </div>
    </div>
    <div class="w-full relative z-10 -translate-y-24 md:-translate-y-32">
      <div class="max-w-4xl mx-auto bg-slate-900">
        <div class="w-full p-5 lg:p-8">
          <p class="text-sm text-green-300 leading-5 font-normal">
            How we help you grow as a small business owner
          </p>
          <p class="font-semibold text-2xl max-w-xl text-white leading-normal mt-4">
            {{ text }}
          </p>
          <div class="mt-8 flex justify-between items-center">
            <div class="flex items-center space-x-2 hidden">
              <p class="text-sm text-white leading-5 font-normal">As low as</p>
              <p class="text-green-500 font-semibold text-2xl leading-7">$25</p>
              <p class="text-sm text-white leading-5 font-normal">/ Month</p>
            </div>
            <div class="flex items-center space-x-2">
              <div
                class="w-2 h-2 rounded-full"
                :class="[this.offset == 0 ? 'bg-green-500' : 'bg-slate-200']"
              ></div>
              <div
                class="w-2 h-2 rounded-full"
                :class="[this.offset == 1 ? 'bg-green-500' : 'bg-slate-200']"
              ></div>
              <div
                class="w-2 h-2 rounded-full"
                :class="[this.offset == 2 ? 'bg-green-500' : 'bg-slate-200']"
              ></div>
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
      texts: [
        " Access completely free social media and digital marketing courses and programs",
        "Enjoy free online and offline support in social media, e-commerce, fintech etc.",
        "Free business advisory services and funding for your business",
      ],
      text: "",
      offset: 0,
    };
  },
  methods: {
    display: function () {
      this.text = this.texts[this.offset];
      setInterval(() => {
        //console.log(this.offset);
        if (this.offset == this.texts.length - 1) {
          this.offset = 0;
        } else {
          this.offset++;
        }
        this.text = this.texts[this.offset];
      }, 5000);
    },
  },
  mounted() {
    this.display();
  },
};
</script>
