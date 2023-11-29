<script setup lang="ts">
import {Comic} from "../data/interfaces/Comic";
import {authorIdToNull} from "../data/functions/author_functions";
import {characterIdToNull} from "../data/functions/character_functions";
import {comicColor, comicIdToNull} from "../data/functions/comic_functions";
import {monthAbbrRu} from "../data/functions/date_functions";
import {useRoute} from "vue-router";
import {watch} from "vue";
import authors from "../data/authors";
import characters from "../data/characters";
import comics from "../data/comics";

const route = useRoute();

let comic: Comic;
let releaseAt;

const run = () => {
  comic = comics[`comic_${route.params.comicId}`];
  releaseAt = new Date(comic.release_at.year, comic.release_at.month - 1 || 0, comic.release_at.day || 1);

  document.querySelector("title").text = comic.name;
};

run();
watch(route, () => {
  run();
});
</script>

<template>
  <div class="comic container"
       :style="{ '--ranges-color': comicColor(comic), 'padding-top': '1rem', 'padding-bottom': '1rem' }">
    <h1 class="comic__title">{{ comic.name }}</h1>
    <div class="comic__description">
      <article v-if="comic.characters" class="comic__characters characters-comic">
        <h2 class="characters-comic__title">Персонажи</h2>
        <ul class="characters-comic__list">
          <template v-for="characterId in comic.characters">
            <li class="characters-comic__item">
              <img class="characters-comic__image"
                   :alt="characters[characterId].full_name"
                   :src="characters[characterId].link_to_bubble_avatar">
              <RouterLink class="characters-comic__link"
                          :to="{ name: 'character', params: { characterId: characterIdToNull(characterId) } }">
                {{ characters[characterId].full_name }}
              </RouterLink>
            </li>
          </template>
        </ul>
      </article>
      <article v-if="comic.authors" class="comic__section section-comic">
        <h2 class="section-comic__title">Авторы</h2>
        <ul class="section-comic__list">
          <template v-for="authorId in comic.authors">
            <li class="section-comic__item">
              <RouterLink class="section-comic__link"
                          :to="{ name: 'author', params: { authorId: authorIdToNull(authorId) } }">
                {{ authors[authorId].full_name }}
              </RouterLink>
            </li>
          </template>
        </ul>
      </article>
      <article v-if="comic.including_comics" class="comic__section section-comic">
        <h2 class="section-comic__title">Содержится в</h2>
        <ul class="section-comic__list">
          <template v-for="includingComicId in comic.including_comics">
            <li class="section-comic__item">
              <RouterLink class="section-comic__link"
                          :to="{ name: 'comic', params: { rangeId: route.params.rangeId, comicId: comicIdToNull(includingComicId) } }">
                {{ comics[includingComicId].name }}
              </RouterLink>
            </li>
          </template>
        </ul>
      </article>
      <article v-if="comic.contained_comics" class="comic__section section-comic">
        <h2 class="section-comic__title">Содержащиеся</h2>
        <ul class="section-comic__list">
          <template v-for="containedComicId in comic.contained_comics">
            <li class="section-comic__item">
              <RouterLink class="section-comic__link"
                          :to="{ name: 'comic', params: { rangeId: route.params.rangeId, comicId: comicIdToNull(containedComicId) } }">
                {{ comics[containedComicId].name }}
              </RouterLink>
            </li>
          </template>
        </ul>
      </article>
      <article v-if="comic.previous_comics" class="comic__section section-comic">
        <h2 class="section-comic__title">Предыдущий</h2>
        <ul class="section-comic__list">
          <template v-for="previousComicId in comic.previous_comics">
            <li class="section-comic__item">
              <RouterLink class="section-comic__link"
                          :to="{ name: 'comic', params: { rangeId: route.params.rangeId, comicId: comicIdToNull(previousComicId) } }">
                {{ comics[previousComicId].name }}
              </RouterLink>
            </li>
          </template>
        </ul>
      </article>
      <article v-if="comic.next_comics" class="comic__section section-comic">
        <h2 class="section-comic__title">Следующий</h2>
        <ul class="section-comic__list">
          <template v-for="nextComicId in comic.next_comics">
            <li class="section-comic__item">
              <RouterLink class="section-comic__link"
                          :to="{ name: 'comic', params: { rangeId: route.params.rangeId, comicId: comicIdToNull(nextComicId) } }">
                {{ comics[nextComicId].name }}
              </RouterLink>
            </li>
          </template>
        </ul>
      </article>
      <article class="comic__section section-comic">
        <h2 class="section-comic__title">Дата создания</h2>
        <time class="section-comic__date">{{ releaseAt.getDate() }} {{ monthAbbrRu(releaseAt.getMonth()) }}
          {{ releaseAt.getFullYear() }}
        </time>
      </article>
    </div>
  </div>
</template>

<style scoped></style>