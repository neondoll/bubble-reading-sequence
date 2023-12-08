<script setup lang="ts">
import {Comics} from "../data/interfaces";
import {comicIdToNull} from "../data/functions/comic_functions";
import {useRoute} from "vue-router";
import comics from "../data/comics";
import ranges from "../data/ranges";

const route = useRoute();
const rangeId = `range_${route.params.rangeId}`;
const range = ranges[rangeId];
const rangeComicIds: string[] = Object.keys(comics)
    .filter((comicId) => comics[comicId].ranges && comics[comicId].ranges.indexOf(rangeId) !== -1 && comics[comicId].show);
let rangeComics: Comics = {};

rangeComicIds.forEach((comicId) => {
  rangeComics[comicId] = comics[comicId];
});

document.querySelector("title").text = range.name;
</script>

<template>
  <div class="comics-page" style="padding-top: 1rem; padding-bottom: 1rem;">
    <div class="comics-page__container container">
      <template v-for="(comic, comicId) in rangeComics">
        <article class="comic"
                 :style="{ '--comic-image'             : comic.cover_file ? `url(${comic.cover_file.url})` : undefined,
                           '--comic-image-aspect-ratio': comic.cover_file ? comic.cover_file.aspect_ratio : undefined }">
          <div class="comic__content">
            <h2 class="comic__title">
              <RouterLink class="comic__link"
                          :to="{ name: 'comic', params: { rangeId: route.params.rangeId, comicId: comicIdToNull(comicId) } }">
                {{ comic.name }}
              </RouterLink>
            </h2>
          </div>
        </article>
      </template>
    </div>
  </div>
</template>

<style scoped></style>