<script setup lang="ts">
import {getRangeIdForLink} from "../../data/functions/range_functions.js";
import ranges from "../../data/ranges";

const props = defineProps({rangesIds: {required: true, type: Array}});
</script>

<template>
  <div class="ranges-groups-level-3">
    <ul class="ranges-groups-level-3__list">
      <template v-for="rangeId in rangesIds">
        <li class="ranges-groups-level-3__item">
          <div v-if="ranges[rangeId].cover" class="ranges-groups-level-3__avatar">
            <img v-if="ranges[rangeId].cover"
                 class="ranges-groups-level-3__image"
                 :src="ranges[rangeId].cover"
                 :srcset="ranges[rangeId].cover2x ? `${ranges[rangeId].cover2x} 2x` : undefined"
                 :alt="ranges[rangeId].name">
            <div class="ranges-groups-level-3__logo">
              <img v-if="ranges[rangeId].logo"
                   class="ranges-groups-level-3__image"
                   :src="ranges[rangeId].logo"
                   :alt="ranges[rangeId].name">
              <h3 v-else class="ranges-groups-level-3__title">{{ ranges[rangeId].name }}</h3>
            </div>
          </div>
          <RouterLink class="ranges-groups-level-3__link"
                      :to="{name: 'comicsRange', params: {rangeId: getRangeIdForLink(rangeId)}}">
            <span class="ranges-groups-level-3__text">{{ ranges[rangeId].name }}</span>
          </RouterLink>
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped></style>