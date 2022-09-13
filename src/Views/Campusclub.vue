<template>
  <div>
    <Banner @scrolls="scrollstocontent" />
    <navbar />
    <hero />
    <content
      :scrollto="scrollto"
      @changeval="
        (n) => {
          scrollto = n;
        }
      "
    />

    <faqs />
    <cta />
    <foote />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
//import clientelle from "../components/clientelle.vue";
import cta from "../components/cta.vue";
import foote from "../components/foot.vue";
import hero from "../components/campuscluhero.vue";
import content from "../components/campusclupbody.vue";
import faqs from "../components/faqs-campusclub.vue";
import Banner from "../components/banner.vue";
export default {
  components: { navbar, cta, foote, hero, content, faqs, Banner },
  data() {
    return {
      scrollto: false,
    };
  },
  methods: {
    scrollstocontent() {
      //console.log("hello");
      this.scrollto = true;
      console.log(this.scrollto);
    },
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
