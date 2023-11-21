<script setup lang="ts">
import {comics} from "../data/comics";
import {useRoute} from "vue-router";

const route = useRoute();

const rangeComics = Object.keys(comics)
    .filter((comicId) => comics[comicId].ranges.indexOf(`range_${route.params.rangeId}`) !== -1)
    .map((comicId) => comics[comicId]);
</script>

<template>
  <div class="comics container" style="padding-top:1rem;padding-bottom:1rem">
    <ul class="comics__list">
      <template v-for="(comic, comicId) in rangeComics">
        <li class="comics__item item-comics"><a class="item-comics__link">{{ comic.name }}</a></li>
      </template>
    </ul>
  </div>
</template>

<style scoped></style>