<script setup lang="ts">
import {Edge} from "../data/interfaces/Edge";
import {Node} from "../data/interfaces/Node";
import {VNetworkGraph} from "v-network-graph";
import * as vNG from "v-network-graph";
import data from "../data/v-network-graph";
import "v-network-graph/lib/style.css";

let nodes: Record<string, Node> = {};
let edges: Record<string, Edge>;
let layouts: vNG.Layouts;
let paths: vNG.Paths;

if (window.location.host === "localhost:5173") {
  nodes = data.nodes;
  edges = data.edges;
  layouts = data.layouts;
  paths = data.paths;
} else {
  const fetchData = async (url) => {
    const response = await fetch(url);

    return await response.json();
  };

  nodes = await fetchData("/data/nodes.json");
  edges = await fetchData("/data/edges.json");
  layouts = await fetchData("/data/layouts.json");
  paths = await fetchData("/data/paths.json");

  console.log(nodes);
  console.log(edges);
  console.log(layouts);
  console.log(paths);
}

const configs = vNG.defineConfigs<Node, Edge, vNG.Path>({
  view: {zoomEnabled: false, autoPanAndZoomOnLoad: false},
  node: {
    normal: {type: "circle", radius: node => node.size, color: node => node.color},
    hover : {radius: node => node.size + 2, color: node => node.color},
    label : {
      background             : {visible: true, color: "#1761ff66", padding: 4, borderRadius: 6},
      directionAutoAdjustment: true
    }
  },
  edge: {
    gap   : 40,
    normal: {
      color    : edge => nodes[edge.source].color, // (edge.dashed ? "gray" : "black")
      dasharray: edge => (edge.dashed ? "4" : "0")
    },
    hover : {
      color: edge => nodes[edge.source].color, // (edge.dashed ? "gray" : "black")
    },
    marker: {
      source: {type: "none", width: 4, height: 4, margin: -1, offset: 0, units: "strokeWidth", color: null},
      target: {
        type  : args => (args[0].dashed ? "none" : "arrow"),
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
  <VNetworkGraph class="bubble-universe-map" :nodes="nodes" :edges="edges" :layouts="layouts" :configs="configs"/>
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