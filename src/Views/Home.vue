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
};
</script>
