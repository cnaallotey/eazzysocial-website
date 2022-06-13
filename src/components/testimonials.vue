<template>
  <div>
    <div class="w-full pb-20">
      <div class="max-w-screen-xl mx-auto px-5">
        <div>
          <div class="w-full">
            <h2
              class="text-base text-blue-500 font-semibold max-w-2xl mx-auto tracking-wide uppercase mt-2 lg:text-center"
            >
              Testimonials
            </h2>
            <p
              class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl max-w-2xl mx-auto lg:text-center"
            >
              What our clients say about us.
            </p>
            <div class="w-full mt-24 lg:mt-32">
              <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 lg:gap-12"
              >
                <test
                  v-for="testimonial in testimonials"
                  :key="testimonial"
                  :name="testimonial.name"
                  :message="testimonial.message"
                  :company="testimonial.company"
                  :group="testimonial.goup"
                  :img="testimonial.img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import test from "../components/test.vue";
export default {
  components: { test },
  data() {
    return {
      testimonials: [
        {
          name: "Nana Gyasi Boagye",
          message:
            " Eazzysocial is an ideal place for Social Media Education. It helped me develop a robust foundation in social media marketing.",
          company: "Social Cycles Advertising ",
          goup: "Professional",
          img: "/public/images/brew.jpeg",
        },
        {
          name: "Isaac Mohammed Newton",
          message:
            "Even though I was using social media, I realized I was not maximizing the full marketing potential of social media until I participated in the small business social media marketing course.",
          company: "General manager, Nhyilaw",
          goup: "Small Business Owner",
          img:""
        },
        {
          name: "Stephanie Baiden",
          message:
            "Eazzysocial has been helpful. I will recommend it to every student seeking to acquire social media and digital business skills. Joining Eazzysocial Campus Club helped me to know social media is not just for only connecting with friends and family but also an enabler for business to drive their business",
          company: "Koforidua Technical University ",
          goup: "Student",
          img: "/public/images/pri.jpeg",
        },
      ],
    };
  },
};
</script>
