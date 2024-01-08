<script setup lang="ts">
import {RouterLinkWithEndCap} from "../atoms";
import rangesGroups from "../../data/rangesGroups.js";

const props = defineProps({
  rangesGroupActive: {required: true, type: Function},
  rangesGroupEnter : {required: true, type: Function},
  rangesGroupIds   : {required: true, type: Array}
});
</script>

<template>
  <div class="ranges-groups-level-1">
    <ul class="ranges-groups-level-1__list">
      <template v-for="rangesGroupId in rangesGroupIds">
        <li class="ranges-groups-level-1__item" :class="{'active': rangesGroupActive(rangesGroupId)}">
          <RouterLinkWithEndCap class="ranges-groups-level-1__link" @mouseenter="rangesGroupEnter(rangesGroupId)">
            {{ rangesGroups[rangesGroupId].name }}
          </RouterLinkWithEndCap>
          <svg class="ranges-groups-level-1__icon">
            <use xlink:href="#svg-chevron-right"/>
          </svg>
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped></style>