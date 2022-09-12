<script setup>
import { onMounted } from "vue";
import { useStore } from "./store";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
const store = useStore();
onMounted(async () => {
  const count = await store.getcountry();
  //console.log(store.country);
});
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>
