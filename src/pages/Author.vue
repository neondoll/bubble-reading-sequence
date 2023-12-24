<script setup lang="ts">
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from "chart.js";
import {Author, Comic, Comics} from "../data/interfaces";
import {Doughnut} from "vue-chartjs";
import {authorColor, authorPosition} from "../data/functions/author_functions.js";
import {comicColor, comicIdToNull} from "../data/functions/comic_functions.js";
import {rangeIdToNull} from "../data/functions/range_functions.js";
import {useRoute} from "vue-router";
import {watch} from "vue";
import authorPositions from "../data/authorPositions";
import authors from "../data/authors.js";
import comics from "../data/comics.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const authorPositionKeys: string[] = Object.keys(authorPositions);
const chartData = {
  labels  : authorPositionKeys.map((authorPositionKey: string): string => authorPositions[authorPositionKey]),
  datasets: []
};
const chartOptions = {maintainAspectRatio: false, responsive: true};
const comicIds: string[] = Object.keys(comics);
const route = useRoute();

let authorId: string;
let author: Author;
let authorComics: Comics;

const run = () => {
  authorId = `author_${route.params.authorId}`;
  author = authors[authorId];
  const authorComicIds: string[] = Object.keys(comics)
      .filter((comicId: string): boolean => comics[comicId].authors && comics[comicId].authors.map(author => author.author_id).indexOf(authorId) !== -1);
  authorComics = {};

  authorComicIds.forEach((comicId) => {
    authorComics[comicId] = comics[comicId];
  });

  chartData.datasets = [{
    backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
    data           : authorPositionKeys.map((authorPositionKey: string) => {
      return comicIds.filter((comicId: string): boolean => {
        const comic: Comic = comics[comicId];

        return comic.authors &&
            comic.authors
                .filter((author) => author.positions.indexOf(authorPositionKey) !== -1)
                .map((author) => author.author_id)
                .indexOf(authorId) !== -1
      }).length;
    })
  }]

  document.querySelector("title").text = author.full_name;
};

run();
watch(route, () => {
  run();
});
</script>

<template>
  <div class="author-page">
    <div class="author-page__container container">
      <div class="author">
        <div class="author__diagram">
          <Doughnut :data="chartData" :options="chartOptions"/>
        </div>
        <div class="author__content">
          <h1 class="author__title">{{ author.full_name }}</h1>
          <div class="author__description">
            <article v-if="author.positions" class="author__section section-author">
              <h2 class="section-author__title">Должность:</h2>
              <p class="section-author__text">
                {{ author.positions.map((position) => authorPosition(position)).join(", ") }}
              </p>
            </article>
            <article v-if="author.link_to_bubble_website" class="author__section section-author">
              <h2 class="section-author__title">Ссылка на сайт BUBBLE:</h2>
              <div class="section-author__item" :style="{ '--border-color': authorColor(authorId) }">
                <a class="section-author__link" :href="author.link_to_bubble_website" target="_blank">
                  {{ author.link_to_bubble_website }}
                </a>
              </div>
            </article>
            <article v-if="Object.keys(authorComics).length" class="author__section section-author">
              <h2 class="section-author__title">Комиксы:</h2>
              <ul class="section-author__list">
                <template v-for="(authorComic, authorComicId) in authorComics">
                  <li class="section-author__item" :style="{ '--border-color': comicColor(authorComicId) }">
                    <RouterLink class="section-author__link"
                                :to="{ name: 'comic', params: { rangeId: rangeIdToNull(authorComic.ranges[0]), comicId: comicIdToNull(authorComicId) } }">
                      {{ authorComic.name }}
                    </RouterLink>
                  </li>
                </template>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>