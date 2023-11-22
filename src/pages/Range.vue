<script setup lang="ts">
import {colorMixingHex} from "../data/color_functions";
import {comics} from "../data/comics";
import {ranges} from "../data/ranges";
import {useRoute} from "vue-router";

const getRangesColors = (comic) => {
  const colors = comic.ranges
      .filter((rangeIds) => Boolean(ranges[rangeIds].color))
      .map((rangeIds) => ranges[rangeIds].color);
  const colorsLength = colors.length;

  return colorsLength ? (colorsLength > 1 ? colorMixingHex(colors) : colors[0]) : undefined;
};

const route = useRoute();

const rangeComics = Object.keys(comics)
    .filter((comicId) => comics[comicId].ranges.indexOf(`range_${route.params.rangeId}`) !== -1)
    .map((comicId) => comics[comicId]);
</script>

<template>
  <div class="comics container" style="padding-top:1rem;padding-bottom:1rem">
    <ul class="comics__list">
      <template v-for="(comic, comicId) in rangeComics">
        <li class="comics__item item-comics" :style="{'--item-hover-bg':getRangesColors(comic)}">
          <a class="item-comics__link">{{ comic.name }}</a>
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped></style>