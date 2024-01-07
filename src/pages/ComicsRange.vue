<script setup lang="ts">
import {Comics, Range} from "../data/interfaces";
import {useRoute} from "vue-router";
import comics from "../data/comics";
import ranges from "../data/ranges";
import Breadcrumbs from "../components/atoms/Breadcrumbs.vue";

const route = useRoute();
const rangeId: string = `range_${route.params.rangeId.replace(/-/g, "_")}`;
const range: Range = ranges[rangeId];
const rangeComicIds: string[] = Object.keys(comics)
    .filter((comicId: string): boolean => comics[comicId].ranges && comics[comicId].ranges.indexOf(rangeId) !== -1);
let rangeComics: Comics = {};

rangeComicIds.forEach((comicId: string): void => {
  rangeComics[comicId] = comics[comicId];
});

document.querySelector("title").text = range.name;
</script>

<template>
  <div class="comics-range-page">
    <div class="comics-range-page__header header-comics-range-page" :style="{'--header-bg': `url('${range.banner}')`}">
      <div class="header-comics-range-page__container container">
        <Breadcrumbs :items="[{text: 'Главная', to: {name: 'home'}}, {text: 'Комиксы', to: {name: 'comics'}}, {text: range.name, active: true}]"/>
        <div class="header-comics-range-page__content">
          <div class="header-comics-range-page__description">
            <h1 class="header-comics-range-page__title">Серия
              <span class="header-comics-range-page__range-name">{{ range.name }}</span></h1>
          </div>
          <img v-if="range.logo" class="header-comics-range-page__logo" :src="range.logo" :alt="range.name">
        </div>
      </div>
    </div>
    <div class="comics-range-page__container container">
      <div class="comics-range-page__comics">
        <template v-for="(comic, comicId) in rangeComics">
          <article class="comics-range-page__comic">{{ comic }}</article>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped></style>