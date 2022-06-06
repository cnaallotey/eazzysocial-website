<template>
  <div>
    <navbar />
    <hero />
    <content />
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
import hero from "../components/campuscluhero.vue";
import content from "../components/campusclupbody.vue";
export default {
  components: { navbar, clientelle, cta, foote, hero, content },
};
</script>
