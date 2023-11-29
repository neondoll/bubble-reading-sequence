<script setup lang="ts">
import {authorColor, authorIdToNull} from "../data/functions/author_functions";
import authors from "../data/authors";

document.querySelector("title").text = "Авторы";
</script>

<template>
  <div class="authors container" style="padding-top: 1rem; padding-bottom: 1rem;">
    <ul class="authors__list">
      <template v-for="(author, authorId) in authors">
        <li class="authors__item item-authors" :style="{ '--item-hover-bg': authorColor(authorId) }">
          <RouterLink class="item-authors__link"
                      :to="{ name: 'author', params: { authorId: authorIdToNull(authorId) } }">
            {{ author.full_name }}
          </RouterLink>
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped></style>