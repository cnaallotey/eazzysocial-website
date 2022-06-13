<template>
  <div>
    <navbar />
    <contact />
    <clientelle />
    <Cta />
    <Foot />
  </div>
</template>

<script>
import Cta from "../components/cta.vue";
import Foot from "../components/foot.vue";
import navbar from "../components/navbar.vue";
import clientelle from "../components/clientelle.vue";
import contact from "../components/contact.vue";
export default {
  components: {
    navbar,
    Foot,
    Cta,
    clientelle,
    contact,
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
