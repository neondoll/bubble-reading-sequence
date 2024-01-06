<script setup lang="ts">
import {ref} from "vue";
import {useRoute} from "vue-router";
import rangesGroups from "../data/rangesGroups";
import ranges from "../data/ranges";

const route = useRoute();

const rangesGroupIds: string[] = Object.keys(rangesGroups);
const allContainedRangesGroups: string[] = rangesGroupIds.reduce((acc, rangesGroupId) => {
  if (rangesGroups[rangesGroupId].containedRangesGroups) {
    acc.push(...rangesGroups[rangesGroupId].containedRangesGroups);
  }

  return acc;
}, []);
const currentRangesGroupIds: string[] = rangesGroupIds.filter((rangesGroupId) => allContainedRangesGroups.indexOf(rangesGroupId) === -1);

let currentRangesGroupL1 = ref("ranges_group_bubble_universe");
let currentRangesGroupL2 = ref("ranges_group_major_grom");

const checkRangesGroupL1 = (value: string): boolean => currentRangesGroupL1.value == value;
const checkRangesGroupL2 = (value: string): boolean => currentRangesGroupL2.value == value;
const setRangesGroupL1 = (value: string): void => {
  currentRangesGroupL1.value = value;
};
const setRangesGroupL2 = (value: string): void => {
  currentRangesGroupL2.value = value;
};

document.querySelector("title").text = "Комиксы";
</script>

<template>
  <div class="comics-page container">
    <div class="ranges-groups-level-1">
      <ul class="ranges-groups-level-1__list">
        <template v-for="rangesGroupIdL1 in currentRangesGroupIds">
          <li class="ranges-groups-level-1__item" :class="{'active': checkRangesGroupL1(rangesGroupIdL1)}">
            <RouterLink class="ranges-groups-level-1__link"
                        :to="route.fullPath"
                        @mouseenter="setRangesGroupL1(rangesGroupIdL1)">
              {{ rangesGroups[rangesGroupIdL1].name }}
            </RouterLink>
            <svg class="ranges-groups-level-1__icon">
              <use xlink:href="#svg-chevron-right"/>
            </svg>
          </li>
        </template>
      </ul>
    </div>
    <template v-for="rangesGroupIdL1 in currentRangesGroupIds">
      <div v-if="rangesGroups[rangesGroupIdL1].containedRangesGroups"
           v-show="checkRangesGroupL1(rangesGroupIdL1)"
           class="ranges-groups-level-2">
        <ul class="ranges-groups-level-2__list">
          <template v-for="rangesGroupIdL2 in rangesGroups[rangesGroupIdL1].containedRangesGroups">
            <li class="ranges-groups-level-2__item" :class="{'active': checkRangesGroupL2(rangesGroupIdL2)}">
              <RouterLink class="ranges-groups-level-2__link"
                          :to="route.fullPath"
                          @mouseenter="setRangesGroupL2(rangesGroupIdL2)">
                {{ rangesGroups[rangesGroupIdL2].name }}
              </RouterLink>
              <svg class="ranges-groups-level-2__icon">
                <use xlink:href="#svg-chevron-right"/>
              </svg>
            </li>
          </template>
        </ul>
      </div>
    </template>
    <template v-for="rangesGroupIdL1 in currentRangesGroupIds">
      <template v-if="rangesGroups[rangesGroupIdL1].containedRangesGroups">
        <template v-for="rangesGroupIdL2 in rangesGroups[rangesGroupIdL1].containedRangesGroups">
          <div v-if="rangesGroups[rangesGroupIdL2].containedRanges"
               v-show="checkRangesGroupL1(rangesGroupIdL1) && checkRangesGroupL2(rangesGroupIdL2)"
               class="ranges-groups-level-3">
            <ul class="ranges-groups-level-3__list">
              <template v-for="rangeId in rangesGroups[rangesGroupIdL2].containedRanges">
                <li class="ranges-groups-level-3__item">
                  <div v-if="ranges[rangeId].linkToBubbleImageBg" class="ranges-groups-level-3__avatar">
                    <img v-if="ranges[rangeId].linkToBubbleImageBg"
                         class="ranges-groups-level-3__image"
                         :src="ranges[rangeId].linkToBubbleImageBg"
                         :srcset="ranges[rangeId].linkToBubbleImageBg2x ? `${ranges[rangeId].linkToBubbleImageBg2x} 2x` : undefined"
                         :alt="ranges[rangeId].name">
                    <div class="ranges-groups-level-3__logo">
                      <img v-if="ranges[rangeId].linkToBubbleImageLogo"
                           class="ranges-groups-level-3__image"
                           :src="ranges[rangeId].linkToBubbleImageLogo"
                           :alt="ranges[rangeId].name">
                      <h3 v-else class="ranges-groups-level-3__title">{{ ranges[rangeId].name }}</h3>
                    </div>
                  </div>
                  <RouterLink class="ranges-groups-level-3__link" :to="route.fullPath">
                    <span class="ranges-groups-level-3__text">{{ ranges[rangeId].name }}</span>
                  </RouterLink>
                </li>
              </template>
            </ul>
          </div>
        </template>
      </template>
      <div v-else-if="rangesGroups[rangesGroupIdL1].containedRanges"
           v-show="checkRangesGroupL1(rangesGroupIdL1)"
           class="ranges-groups-level-3">
        <ul class="ranges-groups-level-3__list">
          <template v-for="rangeId in rangesGroups[rangesGroupIdL1].containedRanges">
            <li class="ranges-groups-level-3__item">
              <div v-if="ranges[rangeId].linkToBubbleImageBg" class="ranges-groups-level-3__avatar">
                <img v-if="ranges[rangeId].linkToBubbleImageBg"
                     class="ranges-groups-level-3__image"
                     :src="ranges[rangeId].linkToBubbleImageBg"
                     :srcset="ranges[rangeId].linkToBubbleImageBg2x ? `${ranges[rangeId].linkToBubbleImageBg2x} 2x` : undefined"
                     :alt="ranges[rangeId].name">
                <div class="ranges-groups-level-3__logo">
                  <img v-if="ranges[rangeId].linkToBubbleImageLogo"
                       class="ranges-groups-level-3__image"
                       :src="ranges[rangeId].linkToBubbleImageLogo"
                       :alt="ranges[rangeId].name">
                  <h3 v-else class="ranges-groups-level-3__title">{{ ranges[rangeId].name }}</h3>
                </div>
              </div>
              <RouterLink class="ranges-groups-level-3__link" :to="route.fullPath">
                <span class="ranges-groups-level-3__text">{{ ranges[rangeId].name }}</span>
              </RouterLink>
            </li>
          </template>
        </ul>
      </div>
    </template>
  </div>
  <div style="display:none">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <symbol id="svg-chevron-right" viewBox="0 0 155.57 286.17">
        <path fill="currentColor"
              d="M0,256,112.92,143.08,0,30.17,30.17,0,143.08,112.92a42.66,42.66,0,0,1,0,60.33L30.17,286.17Z"></path>
      </symbol>
    </svg>
  </div>
</template>

<style scoped></style>