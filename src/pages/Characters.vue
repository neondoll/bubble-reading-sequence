<script setup lang="ts">
import {characterColor, characterIdToNull} from "../data/functions/character_functions";
import characters from "../data/characters";

document.querySelector("title").text = "Герои";
</script>

<template>
  <div class="characters container" style="padding-top: 1rem; padding-bottom: 1rem;">
    <ul class="characters__list">
      <template v-for="(character, characterId) in characters">
        <li class="characters__item item-characters" :style="{ '--item-hover-bg': characterColor(characterId) }">
          <RouterLink class="item-characters__link"
                      :to="{ name: 'character', params: { characterId: characterIdToNull(characterId) } }">
            {{ character.full_name }}
          </RouterLink>
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped></style>