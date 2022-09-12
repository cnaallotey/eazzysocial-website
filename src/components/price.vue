<template>
  <div class="w-fit flex flex-wrap items-center space-x-3">
    <p
      v-if="store.country === 'GH'"
      class="py-1 px-3 text-base font-semibold w-fit line-through decoration-4 decoration-red-500 text-white"
    >
      {{ price }}
    </p>
    <p
      v-if="store.country === 'GH'"
      class="py-1 px-3 text-lg font-semibold w-fit bg-rose-600 text-white"
    >
      {{ price_discount }}
    </p>
    <p
      v-if="store.country != 'GH'"
      class="py-1 px-3 text-base font-semibold w-fit line-through decoration-4 decoration-red-500 text-white"
    >
      {{ price_usd }}
    </p>
    <p
      v-if="store.country != 'GH'"
      class="py-1 px-3 text-lg font-semibold w-fit bg-rose-600 text-white"
    >
      {{ discount_price_usd }}
    </p>
  </div>
</template>

<script setup>
import { useStore } from "../store";

const props = defineProps({
  price: String,
  price_usd: String,
  price_discount: String,
  discount_price_usd: String,
});

const store = useStore();
</script>
