<template>
  <div class="bg-slate-900 relative">
    <!-- <waves class="absolute top-0 z-0 w-full h-screen" /> -->
    <div class="w-full h-screen px-4 relative z-10">
      <div class="bg-slate-900 h-screen">
        <div class="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-y-10">
          <div
            class="w-full h-full flex flex-col items-end justify-center bg-slate-900 p-0 lg:p-20 overflow-y-hidden lg:overflow-y-hidden"
          >
            <div class="lg:max-w-lg">
              <div class="flex items-center space-x-2">
                <img src="../assets/logohalf.png" class="h-12" alt="" />
                <p class="text-3xl font-bold text-white tracking-wide">eazzysocial</p>
              </div>

              <p class="text-3xl font-semibold text-white tracking-normal">
                Register for {{ $route.params.id }}
              </p>
              <p class="text-base font-normal text-slate-300 leading-6 mt-2">
                Partner with us! Fill the form here
              </p>
              <form action="submit" class="w-full flex flex-col mt-12 0">
                <div
                  class="flex flex-col lg:flex-row lg:space-x-5 space-y-4 lg:space-y-0"
                >
                  <div class="w-full flex flex-col">
                    <label
                      for="first name "
                      class="text-slate-300 font-normal text-sm leading-5"
                      >Full name</label
                    >
                    <input
                      type="text"
                      class="p-3 bg-white text-base mt-1 font-normal text-slate-800"
                    />
                  </div>
                </div>
                <label
                  for="email "
                  class="text-slate-300 font-normal mt-5 text-sm leading-5"
                  >Email</label
                >
                <input
                  type="email"
                  class="p-3 bg-white text-base mt-1 font-normal text-slate-800"
                />

                <label
                  for="Contact "
                  class="text-slate-300 font-normal mt-5 text-sm leading-5"
                  >Contact Number</label
                >
                <input
                  type="tel"
                  class="p-3 bg-white text-base mt-1 font-normal text-slate-800"
                />
                <label
                  for="course "
                  class="text-slate-300 font-normal mt-5 text-sm leading-5"
                  >Course</label
                >
                <input
                  type="text"
                  v-model="course"
                  class="p-3 bg-white text-base mt-1 font-normal text-slate-800"
                  disabled="true"
                />
                <button
                  class="w-full flex flex-row items-center justify-center space-x-2 text-base font-normal uppercase tracking-wider bg-blue-600 mt-10 text-white py-3"
                >
                  Register
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
                <p
                  class="text-base mt-5 font-medium text-blue-500 hover:underline select-none cursor-pointer"
                >
                  Download Brochure...
                </p>
              </form>
            </div>
          </div>
          <div class="w-full h-full hidden lg:flex relative">
            <img
              src="../assets/diverse-friends-students-shoot.jpg"
              class="w-full h-full object-cover object-center"
              alt=""
            />
            <p
              class="text-2xl font-bold bg-opacity-80 animate-bounce text-slate-900 max-w-sm p-16 bg-white absolute bottom-20 left-1/3"
            >
              Join the winning Social Media Training Team Today
            </p>
            <!-- <img
              src="../assets/dark-skinned-woman-colleagues-corporate-start-up-office-working-finish-project-diverse-team-business-people-analyzing-company-financial-reports-from-computer.jpg"
              class="w-full h-full object-cover object-center"
              alt=""
            /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import waves from "../components/waves.vue";
export default {
  components: { waves },
  data() {
    return {
      course: "",
      courses: ["Social_Media_Marketing_Training"],
    };
  },
  created() {
    this.course = this.$route.params.id;
    if (!this.courses.includes(this.$route.params.id)) {
      this.$router.push("/");
    } else return;
  },
};
</script>

<style scoped>
body {
  background-color: green;
}
</style>
