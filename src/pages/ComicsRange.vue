<script setup lang="ts">
import {Book, Breadcrumbs, RouterLinkWithEndCap} from "../components/atoms";
import {Comic, Comics, ComicType, Range} from "../data/interfaces";
import {getComicIdForLink} from "../data/functions/comic_functions";
import {getRangeIdFromLink} from "../data/functions/range_functions";
import {ref} from "vue";
import {useRoute} from "vue-router";
import comics from "../data/comics";
import comicTypes from "../data/comicTypes";
import ranges from "../data/ranges";

const route = useRoute();

const rangeId: string = getRangeIdFromLink(route.params.rangeId);
const range: Range = ranges[rangeId];
const rangeComicIds: string[] = Object.keys(comics)
    .filter((comicId: string): boolean => comics[comicId].ranges && comics[comicId].ranges.indexOf(rangeId) !== -1);
const rangeComics: Record<ComicType, Comics> = {book: {}, hardcover_book: {}, single: {}};

let currentComicType = ref("book");

const checkComicType = (value: string): boolean => currentComicType.value === value;
const setComicType = (value: string): void => {
  currentComicType.value = value;
};

rangeComicIds.forEach((comicId: string): void => {
  const comic: Comic = comics[comicId];
  rangeComics[comic.type][comicId] = comic;
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
      <div class="comics-range-page__filter">
        <div class="comics-range-page__comic-types comic-types">
          <ul class="comic-types__list">
            <template v-for="(comicType, comicTypeId) in comicTypes">
              <li v-if="Object.keys(rangeComics[comicTypeId]).length" class="comic-types__item">
                <RouterLinkWithEndCap class="comic-types__link"
                                      :class="{'active': checkComicType(comicTypeId)}"
                                      @click="setComicType(comicTypeId)">
                  {{ comicType.valueMany }}
                </RouterLinkWithEndCap>
                <span class="comic-types__count">{{ Object.keys(rangeComics[comicTypeId]).length }}</span>
              </li>
            </template>
          </ul>
        </div>
      </div>
      <template v-for="(comicType, comicTypeId) in comicTypes">
        <div v-show="checkComicType(comicTypeId)" class="comics-range-page__comics">
          <template v-for="(comic, comicId) in rangeComics[comicTypeId]">
            <article class="comics-range-page__comic comic">
              <Book class="comic__book"
                    :image="comic.coverFile.url"
                    :aspect-ratio="comic.coverFile.width / comic.coverFile.height"/>
              <div class="comic__description">
                <p class="comic__type">{{ comicType.value }}</p>
                <h2 class="comic__title">
                  <RouterLink class="comic__link"
                              :to="{name: 'comic', params: {rangeId: route.params.rangeId, comicId: getComicIdForLink(comicId)}}">
                    {{ comic.name }}
                  </RouterLink>
                </h2>
              </div>
            </article>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped></style>