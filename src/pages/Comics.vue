<script setup lang="ts">
import {RangesGroupsLevel1, RangesGroupsLevel2, RangesGroupsLevel3} from "../components/organisms";
import {ref} from "vue";
import rangesGroups from "../data/rangesGroups";

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

const checkRangesGroupL1 = (value: string): boolean => currentRangesGroupL1.value === value;
const checkRangesGroupL2 = (value: string): boolean => currentRangesGroupL2.value === value;
const setRangesGroupL1 = (value: string): void => {
  currentRangesGroupL1.value = value;

  if (value === "ranges_group_bubble_universe") {
    setRangesGroupL2("ranges_group_major_grom");
  }
};
const setRangesGroupL2 = (value: string): void => {
  currentRangesGroupL2.value = value;
};

document.querySelector("title").text = "Комиксы";
</script>

<template>
  <div class="comics-page container">
    <RangesGroupsLevel1 :ranges-group-active="checkRangesGroupL1"
                        :ranges-group-enter="setRangesGroupL1"
                        :ranges-group-ids="currentRangesGroupIds"/>
    <template v-for="rangesGroupIdL1 in currentRangesGroupIds">
      <RangesGroupsLevel2 v-if="rangesGroups[rangesGroupIdL1].containedRangesGroups"
                          v-show="checkRangesGroupL1(rangesGroupIdL1)"
                          :key="`ranges-groups-in-${rangesGroupIdL1.replace(/_/g, '-')}`"
                          :ranges-group-active="checkRangesGroupL2"
                          :ranges-group-enter="setRangesGroupL2"
                          :ranges-group-ids="rangesGroups[rangesGroupIdL1].containedRangesGroups"/>
    </template>
    <template v-for="rangesGroupIdL1 in currentRangesGroupIds">
      <template v-if="rangesGroups[rangesGroupIdL1].containedRangesGroups">
        <template v-for="rangesGroupIdL2 in rangesGroups[rangesGroupIdL1].containedRangesGroups">
          <RangesGroupsLevel3 v-if="rangesGroups[rangesGroupIdL2].containedRanges"
                              v-show="checkRangesGroupL1(rangesGroupIdL1) && checkRangesGroupL2(rangesGroupIdL2)"
                              :key="`ranges-in-${rangesGroupIdL2.replace(/_/g, '-')}`"
                              :ranges-ids="rangesGroups[rangesGroupIdL2].containedRanges"/>
        </template>
      </template>
      <RangesGroupsLevel3 v-else-if="rangesGroups[rangesGroupIdL1].containedRanges"
                          v-show="checkRangesGroupL1(rangesGroupIdL1)"
                          :key="`ranges-in-${rangesGroupIdL1.replace(/_/g, '-')}`"
                          :ranges-ids="rangesGroups[rangesGroupIdL1].containedRanges"/>
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