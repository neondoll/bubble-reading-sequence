<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute();
</script>

<template>
  <RouterLink :to="route.fullPath" active-class="" exact-active-class="" :aria-current="undefined">
    <slot/>
  </RouterLink>
</template>

<style scoped></style>