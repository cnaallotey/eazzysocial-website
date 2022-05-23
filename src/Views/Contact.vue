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
};
</script>
