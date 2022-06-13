<template>
  <div>
    <div class="w-full bg-gradient-to-t from-blue-50 pb-20">
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
                  :img="course.img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <experts />
  </div>
</template>

<script>
import course from "./course.vue";
import experts from "./experts.vue";
export default {
  components: { course, experts },
  data() {
    return {
      courses: [
        {
          name: "Social Media Marketing Training And Advertising Support for SMEs",
          price: "Free",
          content:
            "Access a completely free social media marketing program, e-commerce and gain daily support in driving sales, growing your customers and engaging your followers. ",
          img:
            "https://images.unsplash.com/photo-1610473199899-fc0ec6e204bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
          name: "Small Business Social Media Marketing Course",
          price: "GHC 250",
          content:
            "Develop a social media marketing strategy for your small business. Gain a strategic understanding of driving sales traffic through social media. ",
          img:
            "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        },
        {
          name:
            "Complete Certification in Social Media Marketing with an option in Graphic Design and Photography",
          price: "GHC 4,500",
          content:
            "Launch a successful career as a social media marketing manager with top firms. Gain relevant skills in all the areas of social media marketing. ",
          img:
            "https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        },
        {
          name:
            "Professional Certification in SEO with an option in WordPress Website Development ",
          price: "GHC 4,000",
          content:
            "Searching Engine Optimization specialists are in high demand across the Globe. Gain relevant skills in all the areas of SEO and work for top firms. Develop practical skills in building a website and optimizing.",
          img:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
        },
        {
          name: "Online Shop Attendant Course",
          price: "GHC 1,000",
          content:
            "Begin a journey as a professional as an online shop attendant. Gain skills in all the areas in managing an online shop ie. Social media, e-commerce, accounting, customer service, product photography etc. ",
          img:
            "https://images.unsplash.com/photo-1570857502809-08184874388e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          name: "Executive Social Selling and Digital Selling Course ",
          price: "GHC 1,200",
          content:
            "Be a digital sales leader. Increase sales velocity and engage more prospects using social media platforms. The course is in partnership with Koforidua Technical University. ",
          img:
            "https://images.unsplash.com/photo-1573162915955-6a8ba9d2fe20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        },
        {
          name: "Online Reputation Management and Applied SEO Workshop",
          price: "GHC 2,500",
          content:
            "Protect the image of your business online through advanced social listening and bury negative information about your business in search through Advance search engine optimization. ",
          img:
            "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
      ],
    };
  },
};
</script>
