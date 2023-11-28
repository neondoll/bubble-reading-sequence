import {createRouter, createWebHashHistory} from "vue-router";
import BubbleUniverseMap from "./pages/BubbleUniverseMap.vue";
import Comic from "./pages/Comic.vue";
import Home from "./pages/Home.vue";
import Range from "./pages/Range.vue";
import Ranges from "./pages/Ranges.vue";

const routes = [
  {path: "/", name: "home", component: Home},
  {path: "/bubble-universe-map", name: "bubbleUniverseMap", component: BubbleUniverseMap},
  {path: "/ranges", name: "ranges", component: Ranges},
  {path: "/ranges/:rangeId", name: "range", component: Range},
  {path: "/ranges/:rangeId/comics/:comicId", name: "comic", component: Comic}
];

const router = createRouter({history: createWebHashHistory(), routes});

export default router;