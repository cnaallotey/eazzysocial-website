<template>
  <div>
    <navbar />
    <clientelle />
    <cta />
    <foote />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue"
import clientelle from "../components/clientelle.vue"
import cta from "../components/cta.vue"
import foote from "../components/foot.vue"
export default {
    components:{navbar, clientelle, cta, foote }

}
</script>
