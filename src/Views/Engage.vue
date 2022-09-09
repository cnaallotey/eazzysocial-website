<template>
  <div>
    <Navbar />

    <EngageHero />
    <AboutEngage />
    <EngageBenefits />
    <StepsEngage />
    <ContactEngage />

    <Cta />
    <Foot />
  </div>
</template>

<script setup>
import Navbar from "../components/navbar.vue";
import EngageHero from "../components/engage-hero.vue";
import AboutEngage from "../components/about-engage.vue";
import StepsEngage from "../components/steps-engage.vue";
import ContactEngage from "../components/contact-engage.vue";
import Cta from "../components/cta.vue";
import Foot from "../components/foot.vue";
import EngageBenefits from "../components/engage-benefits.vue";
</script>
