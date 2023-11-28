<script setup lang="ts">
import {Comics} from "../data/types/Comics";
import {colorMixingHex} from "../data/functions/color_functions";
import {useRoute} from "vue-router";
import comics from "../data/comics";
import ranges from "../data/ranges";

const getComicId = (comicId) => comicId.replace("comic_", "");
const getRangesColors = (comic) => {
  const colors = comic.ranges
      .filter((rangeIds) => Boolean(ranges[rangeIds].color))
      .map((rangeIds) => ranges[rangeIds].color);
  const colorsLength = colors.length;

  return colorsLength ? (colorsLength > 1 ? colorMixingHex(colors) : colors[0]) : undefined;
};

const route = useRoute();
const rangeId = `range_${route.params.rangeId}`;
const range = ranges[rangeId];
const rangeComicIds: string[] = Object.keys(comics)
    .filter((comicId) => comics[comicId].ranges.indexOf(rangeId) !== -1);
let rangeComics: Comics = {};

rangeComicIds.forEach((comicId) => {
  rangeComics[comicId] = comics[comicId];
});

document.querySelector("title").text = range.name;
</script>

<template>
  <div class="comics container" style="padding-top: 1rem; padding-bottom: 1rem;">
    <ul class="comics__list">
      <template v-for="(comic, comicId) in rangeComics">
        <li class="comics__item item-comics" :style="{ '--item-hover-bg': getRangesColors(comic) }">
          <RouterLink class="item-comics__link"
                      :to="{ name: 'comic', params: { rangeId: route.params.rangeId, comicId: getComicId(comicId) } }">
            {{ comic.name }}
          </RouterLink>
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped></style>