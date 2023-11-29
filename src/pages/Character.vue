<script setup lang="ts">
import {Character} from "../data/interfaces/Character";
import {Comics} from "../data/types/Comics";
import {characterColor} from "../data/functions/character_functions";
import {comicIdToNull} from "../data/functions/comic_functions";
import {rangeIdToNull} from "../data/functions/range_functions";
import {useRoute} from "vue-router";
import {watch} from "vue";
import characters from "../data/characters.js";
import comics from "../data/comics";

const route = useRoute();

let characterId: string;
let character: Character;
let characterComics: Comics;

const run = () => {
  characterId = `character_${route.params.characterId}`;
  character = characters[characterId];
  const characterComicIds: string[] = Object.keys(comics)
      .filter((comicId: string): boolean => comics[comicId].characters && comics[comicId].characters.indexOf(characterId) !== -1);
  characterComics = {};

  characterComicIds.forEach((comicId) => {
    characterComics[comicId] = comics[comicId];
  });

  document.querySelector("title").text = character.full_name;
};

run();
watch(route, () => {
  run();
});
</script>

<template>
  <div class="character container"
       :style="{ '--ranges-color': characterColor(characterId), 'padding-top': '1rem', 'padding-bottom': '1rem' }">
    <h1 class="character__title">{{ character.full_name }}</h1>
    <div class="character__description" :style="{ '--character-image': `url(${character.link_to_bubble_image})`}">
      <article v-if="character.link_to_bubble_website" class="character__section section-character">
        <h2 class="section-character__title">Ссылка на сайт BUBBLE:</h2>
        <a class="section-character__link" :href="character.link_to_bubble_website" target="_blank">
          {{ character.link_to_bubble_website }}
        </a>
      </article>
      <article v-if="Object.keys(characterComics).length" class="character__section section-character">
        <h2 class="section-character__title">Комиксы:</h2>
        <ul class="section-character__list">
          <template v-for="(characterComic, characterComicId) in characterComics">
            <li class="section-character__item">
              <RouterLink class="section-character__link"
                          :to="{ name: 'comic', params: { rangeId: rangeIdToNull(characterComic.ranges[0]), comicId: comicIdToNull(characterComicId) } }">
                {{ characterComic.name }}
              </RouterLink>
            </li>
          </template>
        </ul>
      </article>
    </div>
  </div>
</template>

<style scoped></style>