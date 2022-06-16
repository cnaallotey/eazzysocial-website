<template>
  <div class="bg-slate-900 relative">
    <!-- <waves class="absolute top-0 z-0 w-full h-screen" /> -->
    <div class="w-full h-screen px-4 relative z-10">
      <div class="bg-slate-900 h-screen overflow-y-scroll lg:overflow-y-hidden">
        <div class="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-y-10">
          <div
            class="w-full h-full flex flex-col items-end justify-center bg-slate-900 p-0 lg:p-20 overflow-y-hidden lg:overflow-y-hidden"
          >
            <div class="lg:max-w-xl">
              <div class="flex items-center space-x-2">
                <img src="../assets/logohalf.png" class="h-12" alt="" />
                <p class="text-3xl font-bold text-white tracking-wide">eazzysocial</p>
              </div>

              <p class="text-3xl font-semibold text-white tracking-normal">
                Register for {{ course.name }}
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
                  v-model="course.name"
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
      course: [],
      courses: [
        {
          name: "Social Media Marketing Training and Advertising Support for SMEs",
          params: "smmta",
          price: "Free",
          content:
            "Access a completely free social media marketing program, e-commerce and gain daily support in driving sales, growing your customers and engaging your followers.",
          img:
            "https://images.unsplash.com/photo-1610473199899-fc0ec6e204bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
          name: "Small Business Social Media Marketing Course",
          price: "GHC 250",
          params: "sbsmmc",
          img:
            "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          content:
            "Develop a social media marketing strategy for your small business. Gain a strategic understanding of driving sales traffic through social media. ",
        },
        {
          name: "Social Media Marketing with an option in Graphic Design and Photography",
          price: "GHC 4,500",
          params: "sdmgdp",
          img:
            "https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
          content:
            "Launch a successful career as a social media marketing manager with top firms. Gain relevant skills in all the areas of social media marketing. ",
        },
        {
          name:
            "Professional Certification in SEO with an option in WordPress Website Development",
          price: "GHC 4,000",
          params: "pcseowwd",
          img:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
          content:
            "Searching Engine Optimization specialists are in high demand across the Globe. Gain relevant skills in all the areas of SEO and work for top firms. Develop practical skills in building a website and optimizing. ",
        },
        {
          name: "Executive Social Media and Digital Marketing Course",
          price: "GHC 1,000",
          params: "escdmc",
          img:
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
          content:
            "Are you a business executive looking to deepen your knowledge in social media and digital marketing? Enrol our Executive course designed in partnership with Koforidua Technical University.  ",
        },
        {
          name: "Online Shop Attendant Course",
          price: "GHC 1,000",
          params: "osac",
          img:
            "https://images.unsplash.com/photo-1570857502809-08184874388e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          content:
            "Begin a journey as a professional as an online shop attendant. Gain skills in all the areas in managing an online shop ie. Social media, e-commerce, accounting, customer service, product photography etc.  ",
        },
        {
          name: "Executive Social Selling and Digital Selling Course",
          price: "GHC 1,200",
          params: "essdsc",
          img:
            "https://images.unsplash.com/photo-1573162915955-6a8ba9d2fe20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
          content:
            "Be a digital sales leader. Increase sales velocity and engage more prospects using social media platforms. The course is in partnership with Koforidua Technical University.  ",
        },
        {
          name: "Online Reputation Management and Applied SEO Workshop",
          price: "GHC 2,500",
          params: "ormaseow",
          img:
            "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          content:
            "Protect the image of your business online through advanced social listening and bury negative information about your business in search through Advance search engine optimization.  ",
        },
      ],
    };
  },
  created() {
    const isFound = this.courses.some((element) => {
      if (element.params === this.$route.params.id) {
        return true;
      }

      return false;
    });
    //this.course = this.$route.params.id;
    if (!isFound) {
      this.$router.push("/");
    } else {
      const searchIndex = this.courses.findIndex(
        (car) => car.params == this.$route.params.id
      );
      this.course = this.courses[searchIndex];
    }
  },
};
</script>

<style scoped>
body {
  background-color: green;
}
</style>
