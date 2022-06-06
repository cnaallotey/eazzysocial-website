<template>
  <div>
    <navbar />
    <abouttext />
    <clientelle />
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
};
</script>
