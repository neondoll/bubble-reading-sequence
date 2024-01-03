<script setup lang="ts">
import {Comic} from "../data/interfaces";
import {authorColor, authorIdToNull, authorPosition} from "../data/functions/author_functions";
import {characterColor, characterIdToNull} from "../data/functions/character_functions";
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
  <div class="comic-page">
    <div class="comic-page__container container">
      <article class="comic"
               :style="{
                   '--comic-image'             : comic.cover_file ? `url(${comic.cover_file.url})` : undefined,
                   '--comic-image-aspect-ratio': comic.cover_file ? `calc(${comic.cover_file.width} / ${comic.cover_file.height})` : undefined
               }">
        <div class="comic__content">
          <h1 class="comic__title">{{ comic.name }}</h1>
          <div class="comic__description">
            <section v-if="comic.content_files" class="comic__files files-comic">
              <ul>
                <li v-for="(file, fileIndex) in comic.content_files">
                  <img class="files-comic__image" :src="file.url" :alt="`${comic.name} страница ${fileIndex}`">
                </li>
              </ul>
            </section>
            <section v-if="comic.characters" class="comic__characters characters-comic">
              <h2 class="characters-comic__title">Персонажи</h2>
              <ul class="characters-comic__list">
                <template v-for="characterId in comic.characters">
                  <li class="characters-comic__item" :style="{ '--border-color': characterColor(characterId) }">
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
            </section>
            <section v-if="comic.authors" class="comic__authors authors-comic">
              <h2 class="authors-comic__title">Авторы</h2>
              <ul class="authors-comic__list">
                <template v-for="author in comic.authors">
                  <li class="authors-comic__item" :style="{ '--border-color': authorColor(author.author_id) }">
                    <RouterLink class="authors-comic__link"
                                :to="{ name: 'author', params: { authorId: authorIdToNull(author.author_id) } }">
                      <span class="authors-comic__full-name">{{ authors[author.author_id].full_name }}</span>
                      <span v-if="authors[author.author_id].nickname"
                            class="authors-comic__nickname">{{ authors[author.author_id].nickname }}</span>
                    </RouterLink>
                    <p v-if="author.positions" class="authors-comic__subtext">
                      {{ author.positions.map((position) => authorPosition(position)).join(", ") }}</p>
                  </li>
                </template>
              </ul>
            </section>
            <section v-if="comic.including_comics" class="comic__section section-comic">
              <h2 class="section-comic__title">Содержится в</h2>
              <ul class="section-comic__list">
                <template v-for="includingComicId in comic.including_comics">
                  <li class="section-comic__item" :style="{ '--border-color': comicColor(includingComicId) }">
                    <RouterLink class="section-comic__link"
                                :to="{ name: 'comic', params: { rangeId: route.params.rangeId, comicId: comicIdToNull(includingComicId) } }">
                      {{ comics[includingComicId].name }}
                    </RouterLink>
                  </li>
                </template>
              </ul>
            </section>
            <section v-if="comic.contained_comics" class="comic__section section-comic">
              <h2 class="section-comic__title">Содержащиеся</h2>
              <ul class="section-comic__list">
                <template v-for="containedComicId in comic.contained_comics">
                  <li class="section-comic__item" :style="{ '--border-color': comicColor(containedComicId) }">
                    <RouterLink class="section-comic__link"
                                :to="{ name: 'comic', params: { rangeId: route.params.rangeId, comicId: comicIdToNull(containedComicId) } }">
                      {{ comics[containedComicId].name }}
                    </RouterLink>
                  </li>
                </template>
              </ul>
            </section>
            <section v-if="comic.previous_comics" class="comic__section section-comic">
              <h2 class="section-comic__title">Предыдущий</h2>
              <ul class="section-comic__list">
                <template v-for="previousComicId in comic.previous_comics">
                  <li class="section-comic__item" :style="{ '--border-color': comicColor(previousComicId) }">
                    <RouterLink class="section-comic__link"
                                :to="{ name: 'comic', params: { rangeId: route.params.rangeId, comicId: comicIdToNull(previousComicId) } }">
                      {{ comics[previousComicId].name }}
                    </RouterLink>
                  </li>
                </template>
              </ul>
            </section>
            <section v-if="comic.next_comics" class="comic__section section-comic">
              <h2 class="section-comic__title">Следующий</h2>
              <ul class="section-comic__list">
                <template v-for="nextComicId in comic.next_comics">
                  <li class="section-comic__item" :style="{ '--border-color': comicColor(nextComicId) }">
                    <RouterLink class="section-comic__link"
                                :to="{ name: 'comic', params: { rangeId: route.params.rangeId, comicId: comicIdToNull(nextComicId) } }">
                      {{ comics[nextComicId].name }}
                    </RouterLink>
                  </li>
                </template>
              </ul>
            </section>
            <section class="comic__section section-comic">
              <h2 class="section-comic__title">Дата создания</h2>
              <time class="section-comic__date">{{ releaseAt.getDate() }} {{ monthAbbrRu(releaseAt.getMonth()) }}
                {{ releaseAt.getFullYear() }}
              </time>
            </section>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped></style>