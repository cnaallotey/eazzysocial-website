<template>
  <div>
    <div class="w-full py-20 bg-slate-900">
      <div class="max-w-screen-xl mx-auto px-5">
        <div>
          <div class="w-full">
            <p
              class="mt-2 text-3xl leading-8 font-bold text-white sm:text-4xl max-w-2xl mx-auto text-center"
            >
              Start right with us
            </p>
            <div class="w-full mt-5 flex items-center justify-center">
              <button
                @click="goto('/contact')"
                class="text-white font-medium text-sm px-5 py-3 uppercase tracking-wider bg-blue-600"
              >
                Book a meeting
              </button>
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
    goto: function (x) {
      this.$router.push(x);
    },
  },
};
</script>
