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
};
</script>
