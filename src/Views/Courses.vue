<template>
  <div>
    <navbar />
    <coursehero />
    <coursecontent />
    <clientelle />
    <cta />
    <foote />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import clientelle from "../components/clientelle.vue";
import cta from "../components/cta.vue";
import foote from "../components/foot.vue";
import coursehero from "../components/courseshero.vue";
import coursecontent from "../components/coursescontent.vue";
export default {
  components: { navbar, clientelle, cta, foote, coursehero, coursecontent },
  created() {
       if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
    window.scrollTo(0, 0);
  },
};
</script>
