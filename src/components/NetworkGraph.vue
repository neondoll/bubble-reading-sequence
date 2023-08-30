<script setup lang="ts">
import {VNetworkGraph} from "v-network-graph";
import {reactive} from "vue";
import Edge from "../data_poviders/interfaces/Edge";
import Node from "../data_poviders/interfaces/Node";
import data from "../data_poviders/bubble-comics-data.ts";
import * as vNG from "v-network-graph";
import "v-network-graph/lib/style.css";

const configs = reactive(vNG.defineConfigs<Node, Edge>({
  view: {
    autoPanAndZoomOnLoad: false
  },
  node: {
    normal: {
      type: "circle",
      radius: node => node.size, // Use the value of each node object
      color: node => node.color,
    },
    hover: {
      radius: node => node.size + 2,
      color: node => node.color,
    },
    label: {direction: "center", color: "#fff", text: "number"},
    selectable: true,
    //label: {
    //    visible: node => !!node.label,
    //},
    focusring: {
      color: "darkgray",
    },
  },
  edge: {
    normal: {
      color: edge => (edge.dashed ? "gray" : "black"),
      dasharray: edge => (edge.dashed ? "4" : "0"),
    },
    selectable: false,
    marker: {
      source: {
        type: "none",
        width: 4,
        height: 4,
        margin: -1,
        offset: 0,
        units: "strokeWidth",
        color: null,
      },
      target: {
        type: args => (args[0].dashed ? "none" : "arrow"),
        width: 4,
        height: 4,
        margin: -1,
        offset: 0,
        units: "strokeWidth",
        color: null,
      },
    },
  },
}));
</script>

<template>
  <v-network-graph ref="graph"
                   class="graph"
                   :nodes="data.nodes"
                   :edges="data.edges"
                   :layouts="data.layouts"
                   :configs="configs"/>
</template>

<style scoped lang="scss">
.graph {
  width: calc(100vw - var(--app-padding, 2rem) * 2);
  max-width: 1280px;
  height: 700px;
  border: 1px solid #000;
}
</style>