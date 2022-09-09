<template>
  <div>
    <navbar />
    <herosection />
    <stats />
    <courses />
    <testimonials />
    <experts />
    <clientelle />
    <cta />
    <foot />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import herosection from "../components/herosection.vue";
import stats from "../components/stats.vue";
import courses from "../components/courses.vue";
import testimonials from "../components/testimonials.vue";
import experts from "../components/experts.vue";
import clientelle from "../components/clientelle.vue";
import cta from "../components/cta.vue";
import foot from "../components/foot.vue";

export default {
  components: {
    navbar,
    herosection,
    stats,
    courses,
    testimonials,
    experts,
    clientelle,
    cta,
    foot,
  },
  created() {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
    window.scrollTo(0, 0);
  },
};
</script>
