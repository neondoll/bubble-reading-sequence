<script setup lang="ts">
import {useRoute} from "vue-router";
import rangesGroups from "../../data/rangesGroups.js";

const props = defineProps({
  rangesGroupActive: {required: true, type: Function},
  rangesGroupEnter : {required: true, type: Function},
  rangesGroupIds   : {required: true, type: Array}
});
const route = useRoute();
</script>

<template>
  <div class="ranges-groups-level-2">
    <ul class="ranges-groups-level-2__list">
      <template v-for="rangesGroupId in rangesGroupIds">
        <li class="ranges-groups-level-2__item" :class="{'active': rangesGroupActive(rangesGroupId)}">
          <RouterLink class="ranges-groups-level-2__link"
                      :to="route.fullPath"
                      @mouseenter="rangesGroupEnter(rangesGroupId)">
            {{ rangesGroups[rangesGroupId].name }}
          </RouterLink>
          <svg class="ranges-groups-level-2__icon">
            <use xlink:href="#svg-chevron-right"/>
          </svg>
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped></style>