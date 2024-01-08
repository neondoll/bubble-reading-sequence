<script setup lang="ts">
const props = defineProps({
  aspectRatio: {required: true, type: Number},
  image      : {required: true, type: String}
});
</script>

<template>
  <div class="book" :style="{'--book-image': `url(${image})`, '--book-image-aspect-ratio': aspectRatio}">
    <div class="book__content"/>
  </div>
</template>

<style scoped></style>