<script setup lang="ts">
import {Breadcrumbs} from "../components/atoms";
import {Comic, Range} from "../data/interfaces";
import {authorColor, authorIdToNull, authorPosition} from "../data/functions/author_functions";
import {characterColor, characterIdToNull} from "../data/functions/character_functions";
import {comicColor, getComicIdForLink, getComicIdFromLink} from "../data/functions/comic_functions";
import {getRangeIdFromLink} from "../data/functions/range_functions";
import {monthAbbrRu} from "../data/functions/date_functions";
import {useRoute} from "vue-router";
import {watch} from "vue";
import authors from "../data/authors";
import characters from "../data/characters";
import comics from "../data/comics";
import comicTypes from "../data/comicTypes";
import ranges from "../data/ranges";

const route = useRoute();

let breadcrumbs;
let comic: Comic;

const run = () => {
  const rangeId: string = getRangeIdFromLink(route.params.rangeId);
  const range: Range = ranges[rangeId];

  comic = comics[getComicIdFromLink(route.params.comicId)];
  //const releaseAt: Date = new Date(comic.releaseAt.year, comic.releaseAt.month - 1 || 0, comic.releaseAt.day || 1);

  breadcrumbs = [{text: "Главная", to: {name: "home"}},
                 {text: "Комиксы", to: {name: "comics"}},
                 {text: range.name, to: {name: "comicsRange", params: {rangeId: route.params.rangeId}}},
                 {text: comic.name, active: true}];

  document.querySelector("title").text = comic.name;
};

run();
watch(route, () => (run()));
</script>

<template>
  <div class="comic-page">
    <div class="comic-page__container container">
      <Breadcrumbs :items="breadcrumbs"/>
      <article class="comic">
        <div class="comic__images">
          <img class="comic__image" :src="comic.coverFile.url" :alt="comic.name">
        </div>
        <div class="comic__description">
          <header class="comic__header">
            <h1 class="comic__title">{{ comic.name }}</h1>
            <p class="comic__type">{{ comicTypes[comic.type].value }}</p>
          </header>
          <section v-if="comic.contentFiles" class="comic__files files-comic">
            <ul>
              <li v-for="(file, fileIndex) in comic.contentFiles">
                <img class="files-comic__image" :src="file.url" :alt="`${comic.name} страница ${fileIndex}`">
              </li>
            </ul>
          </section>
          <section v-if="comic.authors" class="comic__authors authors-comic">
            <h2 class="authors-comic__title">Авторы</h2>
            <ul class="authors-comic__list">
              <template v-for="author in comic.authors">
                <li class="authors-comic__item" :style="{'--author-color': authorColor(author.authorId)}">
                  <div class="authors-comic__description">
                    <RouterLink class="authors-comic__link"
                                :to="{name: 'author', params: {authorId: authorIdToNull(author.authorId)}}">
                      {{ authors[author.authorId].fullName }}
                    </RouterLink>
                    <p v-if="author.positions" class="authors-comic__subtext">
                      {{ author.positions.map((position) => authorPosition(position)).join(", ") }}</p>
                  </div>
                </li>
              </template>
            </ul>
          </section>
          <section v-if="comic.characters" class="comic__characters characters-comic">
            <h2 class="characters-comic__title">Персонажи</h2>
            <ul class="characters-comic__list">
              <template v-for="characterId in comic.characters">
                <li class="characters-comic__item" :style="{'--character-color': characterColor(characterId)}">
                  <div class="characters-comic__avatar">
                    <img class="characters-comic__image"
                         :src="characters[characterId].images ? characters[characterId].images.small : undefined"
                         :alt="characters[characterId].fullName">
                  </div>
                  <div class="characters-comic__description">
                    <RouterLink class="characters-comic__link"
                                :to="{name: 'character', params: {characterId: characterIdToNull(characterId)}}">
                      {{ characters[characterId].fullName }}
                    </RouterLink>
                  </div>
                </li>
              </template>
            </ul>
          </section>
          <section v-if="comic.includingComics" class="comic__comics comics-comic">
            <h2 class="comics-comic__title">Содержится в комиксах</h2>
            <ul class="comics-comic__list">
              <template v-for="includingComicId in comic.includingComics">
                <li class="comics-comic__item" :style="{'--comic-color': comicColor(includingComicId)}">
                  <img class="comics-comic__image"
                       :src="comics[includingComicId].coverFile.url"
                       :alt="comics[includingComicId].name">
                  <RouterLink class="comics-comic__link"
                              :to="{name: 'comic', params: {rangeId: route.params.rangeId, comicId: getComicIdForLink(includingComicId)}}">
                    {{ comics[includingComicId].name }}
                  </RouterLink>
                </li>
              </template>
            </ul>
          </section>
          <section v-if="comic.containedComics" class="comic__comics comics-comic">
            <h2 class="comics-comic__title">Содержащиеся комиксы</h2>
            <ul class="comics-comic__list">
              <template v-for="containedComicId in comic.containedComics">
                <li class="comics-comic__item" :style="{'--comic-color': comicColor(containedComicId)}">
                  <img class="comics-comic__image"
                       :src="comics[containedComicId].coverFile.url"
                       :alt="comics[containedComicId].name">
                  <RouterLink class="comics-comic__link"
                              :to="{name: 'comic', params: {rangeId: route.params.rangeId, comicId: getComicIdForLink(containedComicId)}}">
                    {{ comics[containedComicId].name }}
                  </RouterLink>
                </li>
              </template>
            </ul>
          </section>
          <section v-if="comic.previousComics" class="comic__comics comics-comic">
            <h2 class="comics-comic__title">Предыдущие комиксы</h2>
            <ul class="comics-comic__list">
              <template v-for="previousComicId in comic.previousComics">
                <li class="comics-comic__item" :style="{'--comic-color': comicColor(previousComicId)}">
                  <img class="comics-comic__image"
                       :src="comics[previousComicId].coverFile.url"
                       :alt="comics[previousComicId].name">
                  <RouterLink class="comics-comic__link"
                              :to="{name: 'comic', params: {rangeId: route.params.rangeId, comicId: getComicIdForLink(previousComicId)}}">
                    {{ comics[previousComicId].name }}
                  </RouterLink>
                </li>
              </template>
            </ul>
          </section>
          <section v-if="comic.nextComics" class="comic__comics comics-comic">
            <h2 class="comics-comic__title">Следующие комиксы</h2>
            <ul class="comics-comic__list">
              <template v-for="nextComicId in comic.nextComics">
                <li class="comics-comic__item" :style="{'--comic-color': comicColor(nextComicId)}">
                  <img class="comics-comic__image"
                       :src="comics[nextComicId].coverFile.url"
                       :alt="comics[nextComicId].name">
                  <RouterLink class="comics-comic__link"
                              :to="{name: 'comic', params: {rangeId: route.params.rangeId, comicId: getComicIdForLink(nextComicId)}}">
                    {{ comics[nextComicId].name }}
                  </RouterLink>
                </li>
              </template>
            </ul>
          </section>
          <!--<section class="comic__section section-comic">
            <h2 class="section-comic__title">Дата создания</h2>
            <time class="section-comic__date">{{ releaseAt.getDate() }} {{ monthAbbrRu(releaseAt.getMonth()) }}
              {{ releaseAt.getFullYear() }}
            </time>
          </section>-->
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped></style>