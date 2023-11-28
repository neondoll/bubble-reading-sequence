<script setup lang="ts">
import {colorMixingHex} from "../data/functions/color_functions";
import {useRoute} from "vue-router";
import {watch} from "vue";
import authors from "../data/authors";
import characters from "../data/characters";
import comics from "../data/comics";
import ranges from "../data/ranges";

const route = useRoute();

let comic;
let releaseAt;

const getComicId = (comicId) => comicId.replace("comic_", "");
const getMonthRu = (month) => {
  switch (month) {
    case 0:
      return "янв";
    case 1:
      return "фев";
    case 2:
      return "мар";
    case 3:
      return "апр";
    case 4:
      return "май";
    case 5:
      return "июн";
    case 6:
      return "июл";
    case 7:
      return "авг";
    case 8:
      return "сен";
    case 9:
      return "окт";
    case 10:
      return "ноя";
    case 11:
      return "дек";
  }
};
const getRangesColors = (comic) => {
  const colors = comic.ranges
      .filter((rangeIds) => Boolean(ranges[rangeIds].color))
      .map((rangeIds) => ranges[rangeIds].color);
  const colorsLength = colors.length;

  return colorsLength ? (colorsLength > 1 ? colorMixingHex(colors) : colors[0]) : undefined;
};
const run = () => {
  comic = comics[`comic_${route.params.comicId}`];
  releaseAt = new Date(comic.release_at.year, comic.release_at.month - 1 || 0, comic.release_at.day || 1);

  document.querySelector("title").text = comic.name;
};

run();
watch(route, (newValue, oldValue) => {
  run();
});
</script>

<template>
  <div class="comic container"
       :style="{ '--comic-color': getRangesColors(comic), 'padding-top': '1rem', 'padding-bottom': '1rem' }">
    <h1 class="comic__title">{{ comic.name }}</h1>
    <div class="comic__description">
      <article v-if="comic.characters" class="comic__section section-comic">
        <h2 class="section-comic__title">Герои:</h2>
        <ul class="section-comic__list">
          <template v-for="characterId in comic.characters">
            <li class="section-comic__item">{{ characters[characterId].full_name }}</li>
          </template>
        </ul>
      </article>
      <article v-if="comic.authors" class="comic__section section-comic">
        <h2 class="section-comic__title">Авторы:</h2>
        <ul class="section-comic__list">
          <template v-for="authorId in comic.authors">
            <li class="section-comic__item">{{ authors[authorId].full_name }}</li>
          </template>
        </ul>
      </article>
      <article v-if="comic.including_comics" class="comic__section section-comic">
        <h2 class="section-comic__title">Содержится в:</h2>
        <ul class="section-comic__list">
          <template v-for="includingComicId in comic.including_comics">
            <li class="section-comic__item">
              <RouterLink class="section-comic__link"
                          :to="{ name: 'comic', params: { rangeId: route.params.rangeId, comicId: getComicId(includingComicId) } }">
                {{ comics[includingComicId].name }}
              </RouterLink>
            </li>
          </template>
        </ul>
      </article>
      <article v-if="comic.contained_comics" class="comic__section section-comic">
        <h2 class="section-comic__title">Содержащиеся:</h2>
        <ul class="section-comic__list">
          <template v-for="containedComicId in comic.contained_comics">
            <li class="section-comic__item">
              <RouterLink class="section-comic__link"
                          :to="{ name: 'comic', params: { rangeId: route.params.rangeId, comicId: getComicId(containedComicId) } }">
                {{ comics[containedComicId].name }}
              </RouterLink>
            </li>
          </template>
        </ul>
      </article>
      <article v-if="comic.previous_comics" class="comic__section section-comic">
        <h2 class="section-comic__title">Предыдущий:</h2>
        <ul class="section-comic__list">
          <template v-for="previousComicId in comic.previous_comics">
            <li class="section-comic__item">
              <RouterLink class="section-comic__link"
                          :to="{ name: 'comic', params: { rangeId: route.params.rangeId, comicId: getComicId(previousComicId) } }">
                {{ comics[previousComicId].name }}
              </RouterLink>
            </li>
          </template>
        </ul>
      </article>
      <article v-if="comic.next_comics" class="comic__section section-comic">
        <h2 class="section-comic__title">Следующий:</h2>
        <ul class="section-comic__list">
          <template v-for="nextComicId in comic.next_comics">
            <li class="section-comic__item">
              <RouterLink class="section-comic__link"
                          :to="{ name: 'comic', params: { rangeId: route.params.rangeId, comicId: getComicId(nextComicId) } }">
                {{ comics[nextComicId].name }}
              </RouterLink>
            </li>
          </template>
        </ul>
      </article>
      <article class="comic__section section-comic">
        <h2 class="section-comic__title">Дата создания:</h2>
        <time>{{ releaseAt.getDate() }} {{ getMonthRu(releaseAt.getMonth()) }} {{ releaseAt.getFullYear() }}</time>
      </article>
    </div>
  </div>
</template>

<style scoped></style>