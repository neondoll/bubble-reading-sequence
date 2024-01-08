<script setup lang="ts">
import {Edge, Node} from "../data/interfaces";
import {VNetworkGraph} from "v-network-graph";
import * as vNG from "v-network-graph";
import data from "../data/v-network-graph";
import "v-network-graph/lib/style.css";

const nodes: Record<string, Node> = data.nodes;
const edges: Record<string, Edge> = data.edges;
const layouts: vNG.Layouts = data.layouts;
const paths: vNG.Paths = data.paths;
const configs = vNG.defineConfigs<Node, Edge, vNG.Path>({
  view: {zoomEnabled: false, autoPanAndZoomOnLoad: false},
  node: {
    normal: {type: "circle", radius: node => node.size, color: (node) => node.color},
    hover : {radius: (node) => node.size + 2, color: (node) => node.color},
    label : {
      background             : {visible: true, color: "#1761ff66", padding: 4, borderRadius: 6},
      directionAutoAdjustment: true
    }
  },
  edge: {
    gap   : 40,
    normal: {color: (edge) => nodes[edge.source].color, dasharray: (edge) => (edge.dashed ? "4" : "0")},
    hover : {color: (edge) => nodes[edge.source].color},
    marker: {
      source: {type: "none", width: 4, height: 4, margin: -1, offset: 0, units: "strokeWidth", color: null},
      target: {
        type  : (args) => args[0].dashed ? "none" : "arrow",
        width : 4,
        height: 4,
        margin: -1,
        offset: 0,
        units : "strokeWidth",
        color : null
      }
    }
  }
});

document.querySelector("title").text = "Карта вселенной BUBBLE";
</script>

<template>
  <div class="bubble-universe-map-page">
    <VNetworkGraph class="bubble-universe-map-page__graph" :nodes="nodes" :edges="edges" :layouts="layouts" :configs="configs"/>
  </div>
</template>

<style scoped lang="scss">
.bubble-universe-map {
  position: relative;
  height: calc(100vh - var(--header-height) - var(--header-border-width) - 5px);
}

.layouts {
  position: absolute;
  inset: 10px 10px 10px auto;
  padding: 10px;
  background: #ffff0044;
  border-radius: 4px;
  font-size: 10px;
  line-height: 11px;
  overflow-y: auto;
}
</style>