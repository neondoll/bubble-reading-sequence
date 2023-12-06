<script setup lang="ts">
import {rangeColor, rangeIdToNull} from "../data/functions/range_functions";
import ranges from "../data/ranges";

document.querySelector("title").text = "Серии";
</script>

<template>
  <div class="ranges container" style="padding-top: 1rem; padding-bottom: 1rem;">
    <ul class="ranges__list">
      <template v-for="(range, rangeId) in ranges">
        <li class="ranges__item item-ranges" :style="{ '--item-hover-bg': rangeColor(rangeId) }">
          <RouterLink class="item-ranges__link" :to="{ name: 'range', params: { rangeId: rangeIdToNull(rangeId) } }">
            {{ range.name }}
          </RouterLink>
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped></style>