<template>
  <div>
    <navbar />
    <expresshero />
    <content />
    
    <cta />
    <foote />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import clientelle from "../components/clientelle.vue";
import cta from "../components/cta.vue";
import foote from "../components/foot.vue";
import expresshero from "../components/expresssochero.vue";
import content from "../components/expresssocialcontent.vue";
export default {
  components: { navbar, clientelle, cta, foote, expresshero, content },
};
</script>
