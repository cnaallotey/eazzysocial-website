<template>
  <div>
    <navbar />
    <abouttext />

    <cta />
    <foot />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import clientelle from "../components/clientelle.vue";
import cta from "../components/cta.vue";
import foot from "../components/foot.vue";
import abouttext from "./abouttext.vue";
export default {
  components: { navbar, clientelle, cta, foot, abouttext },
  created() {
       if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
    window.scrollTo(0, 0);
  },
};
</script>


