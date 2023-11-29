import {createRouter, createWebHashHistory} from "vue-router";
import Author from "./pages/Author.vue";
import Authors from "./pages/Authors.vue";
import BubbleUniverseMap from "./pages/BubbleUniverseMap.vue";
import Character from "./pages/Character.vue";
import Characters from "./pages/Characters.vue";
import Comic from "./pages/Comic.vue";
import Home from "./pages/Home.vue";
import Range from "./pages/Range.vue";
import Ranges from "./pages/Ranges.vue";

const routes = [
  {path: "/", name: "home", component: Home},
  {path: "/author/:authorId", name: "author", component: Author},
  {path: "/authors", name: "authors", component: Authors},
  {path: "/bubble-universe-map", name: "bubbleUniverseMap", component: BubbleUniverseMap},
  {path: "/characters", name: "characters", component: Characters},
  {path: "/characters/:characterId", name: "character", component: Character},
  {path: "/ranges", name: "ranges", component: Ranges},
  {path: "/ranges/:rangeId", name: "range", component: Range},
  {path: "/ranges/:rangeId/comics/:comicId", name: "comic", component: Comic}
];

const router = createRouter({history: createWebHashHistory(), routes});

export default router;