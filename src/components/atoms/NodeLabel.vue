<script setup lang="ts">
import data from "../../data/index.js";
import * as vNG from "v-network-graph";

interface Props {
  nodeId?: string
  scale?: number,
  text?: string,
  x?: number,
  y?: number,
  config?: vNG.NodeLabelStyle,
  shape?: [vNG.CircleShapeStyle, vNG.RectangleShapeStyle],
  textAnchor?: string
  dominantBaseline?: string
}

const props = withDefaults(defineProps<Props>(), {
  textAnchor: () => ["middle", "start", "end"],
  dominantBaseline: () => ["central", "text-top", "hanging"]
});

const max_line_length = function (text: string) {
  let max = 0;
  text.split('\n').forEach(value => {
    if (max < value.length) max = value.length;
  });
  return max;
}
</script>

<template>
  <rect v-if="config.background.visible"
        class="v-ng-text-background"
        :x="-3.10888671875 * max_line_length(text)"
        y="-6.956250000000001"
        :width="6.2177734375 * max_line_length(text)"
        :height="16.1 * text.split('\n').length"
        :rx="config.background.borderRadius"
        :ry="config.background.borderRadius"
        :fill="data.nodes[nodeId].color + '66'"
        :transform="`translate(${x} ${y})`"></rect>
  <text dominant-baseline="central" fill="#ffffff" :font-size="9 * scale" text-anchor="middle" x="0" y="0">
    {{ data.nodes[nodeId].number }}
  </text>
  <text class="v-ng-text draggable"
        :text-anchor="textAnchor"
        :transform="`translate(${x} ${y})`"
        x="0"
        y="0"
        :dominant-baseline="dominantBaseline"
        :font-size="config.fontSize * scale"
        :fill="config.color">
    <template v-if="text.split('\n').length === 1">{{ text }}</template>
    <template v-else v-for="(value, index) in text.split('\n')">
      <tspan x="0"
             :dy="index > 0 ? config.fontSize * scale * config.lineHeight : 0"
             :dominant-baseline="dominantBaseline">
        {{ value }}
      </tspan>
    </template>
  </text>
</template>

<style scoped></style>