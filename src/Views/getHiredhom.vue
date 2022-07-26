<template>
  <div>
    <Navbar />
    <GH_hero :scrollup="scrollup" />
    <Steps id="view" />
    <Features />
    <Faqgh />
    <GhCTA />
    <Foot />
  </div>
</template>

<script setup>
import Navbar from "../components/navbar.vue";
import GH_hero from "../components/GH_hero.vue";
import Faqgh from "../components/faqgh.vue";
import Features from "../components/features.vue";
import Foot from "../components/foot.vue";
import GhCTA from "../components/ghCTA.vue";
import Steps from "../components/steps.vue";
import { ref } from "@vue/reactivity";

//const steps = ref(null);
const scrollup = () => {
  console.log("hello");
  const el = document.getElementById("view");
  el.scrollIntoView({ behavior: "smooth" });
};
</script>
