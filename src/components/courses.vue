<template>
  <div>
    <div class="w-full bg-blue-50 py-20 my-10 lg:my-32">
      <div class="max-w-screen-xl mx-auto px-5">
        <div>
          <div class="w-full">
            <h2
              class="text-base text-blue-500 font-semibold max-w-2xl mx-auto tracking-wide uppercase mt-2 lg:text-center"
            >
              courses
            </h2>
            <p
              class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl max-w-2xl mx-auto lg:text-center"
            >
              Master new social media and digital marketing tools taught by experts
            </p>
            <div class="w-full mt-10">
              <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10"
              >
                <course
                  v-for="course in courses"
                  :key="course.name"
                  :name="course.name"
                  :price="course.price"
                  :content="course.content"
                />
              </div>
            </div>
            <div class="mt-10 flex justify-center">
              <button
                class="text-blue-500 border-2 border-blue-500 bg-transparent px-5 py-3 text-base font-medium"
              >
                Explore our courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import course from "./course.vue";
export default {
  components: { course },
  data() {
    return {
      courses: [
        {
          name: "Social Media Marketing Training for SMEs",
          price: "Free",
          content:
            "Access a completely free social media marketing program, e-commerce and gain daily support in driving sales, growing your customers and engaging your followers.",
        },
        {
          name: "Small Business Social Media Marketing Course",
          price: "GHC 250",
          content:
            "Develop a social media marketing strategy for your small business. Gain a strategic understanding of driving sales traffic through social media. ",
        },
        {
          name: "Social Media Marketing with an option in Graphic Design and Photography",
          price: "GHC 4,500",
          content:
            "Launch a successful career as a social media marketing manager with top firms. Gain relevant skills in all the areas of social media marketing. ",
        },
        {
          name:
            "Professional Certification in SEO with an option in WordPress Website Development",
          price: "GHC 4,000",
          content:
            "Searching Engine Optimization specialists are in high demand across the Globe. Gain relevant skills in all the areas of SEO and work for top firms. Develop practical skills in building a website and optimizing. ",
        },
        {
          name: "Executive Social Media and Digital Marketing Course",
          price: "GHC 1,000",
          content:
            "Are you a business executive looking to deepen your knowledge in social media and digital marketing? Enrol our Executive course designed in partnership with Koforidua Technical University.  ",
        },
        {
          name: "Online Shop Attendant Course",
          price: "GHC 1,000",
          content:
            "Begin a journey as a professional as an online shop attendant. Gain skills in all the areas in managing an online shop ie. Social media, e-commerce, accounting, customer service, product photography etc.  ",
        },
        {
          name: "Executive Social Selling and Digital Selling Course",
          price: "GHC 1,200",
          content:
            "Be a digital sales leader. Increase sales velocity and engage more prospects using social media platforms. The course is in partnership with Koforidua Technical University.  ",
        },
        {
          name: "Online Reputation Management and Applied SEO Workshop",
          price: "GHC 2,500",
          content:
            "Protect the image of your business online through advanced social listening and bury negative information about your business in search through Advance search engine optimization.  ",
        },
      ],
    };
  },
};
</script>
