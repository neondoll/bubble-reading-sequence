<script setup lang="ts">
import {VNetworkGraph} from "v-network-graph";
import Edge from "../interfaces/Edge";
import Node from "../interfaces/Node";
import NodeLabel from "./atoms/NodeLabel.vue";
import data from "../data";
import * as vNG from "v-network-graph";
import "v-network-graph/lib/style.css";

const configs = vNG.defineConfigs<Node, Edge, vNG.Path>({
  view: {zoomEnabled: false, autoPanAndZoomOnLoad: false},
  node: {
    normal: {type: "circle", radius: node => node.size, color: node => node.color},
    hover: {radius: node => node.size + 2, color: node => node.color},
    label: {
      background: {visible: true, color: "#1761ff66", padding: 4, borderRadius: 6},
      directionAutoAdjustment: true
    }
  },
  edge: {
    gap: 40,
    normal: {
      color: edge => (edge.dashed ? "gray" : "black"),
      dasharray: edge => (edge.dashed ? "4" : "0")
    },
    hover: {color: edge => (edge.dashed ? "gray" : "black")},
    marker: {
      source: {type: "none", width: 4, height: 4, margin: -1, offset: 0, units: "strokeWidth", color: null},
      target: {
        type: args => (args[0].dashed ? "none" : "arrow"),
        width: 4,
        height: 4,
        margin: -1,
        offset: 0,
        units: "strokeWidth",
        color: null
      }
    }
  }
});
</script>

<template>
  <VNetworkGraph class="graph" :nodes="data.nodes" :edges="data.edges" :layouts="data.layouts" :configs="configs">
    <!--<template #override-node-label="{nodeId, scale, text, x, y, config, textAnchor, dominantBaseline}">
      <NodeLabel :node-id="nodeId"
                 :scale="scale"
                 :text="text"
                 :x="x"
                 :y="y"
                 :config="config"
                 :text-anchor="textAnchor"
                 :dominant-baseline="dominantBaseline"/>
    </template>-->
  </VNetworkGraph>
</template>

<style scoped lang="scss">
.graph {
  box-sizing: border-box;
  width: calc(100vw - var(--app-padding, 2rem) * 2);
  max-width: calc(var(--app-max-width, 1280px) - var(--app-padding, 2rem) * 2);
  height: calc(100vh - var(--app-padding, 2rem) * 2);
  border: 1px solid #000000;
}
</style>