<script setup lang="ts">
import {ranges} from "../data/ranges";

const getRangeId = (rangeId) => rangeId.replace("range_", "");
</script>

<template>
  <div class="ranges container" style="padding-top:1rem;padding-bottom:1rem">
    <ul class="ranges__list">
      <template v-for="(range, rangeId) in ranges">
        <li class="ranges__item item-ranges" :style="{'--item-ranges-hover-bg':range.color}">
          <RouterLink class="item-ranges__link" :to="{name:'range',params:{rangeId:getRangeId(rangeId)}}">
            {{ range.name }}
          </RouterLink>
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped></style>