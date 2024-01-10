import {RouterView, createRouter, createWebHashHistory} from "vue-router";
import {h} from "vue";
import Author from "./pages/Author.vue";
import Authors from "./pages/Authors.vue";
import BubbleUniverseMap from "./pages/BubbleUniverseMap.vue";
import Character from "./pages/Character.vue";
import Characters from "./pages/Characters.vue";
import Comic from "./pages/Comic.vue";
import Comics from "./pages/Comics.vue";
import ComicsRange from "./pages/ComicsRange.vue";
import Home from "./pages/Home.vue";

const routes = [
  {path: "/", name: "home", component: Home},
  {path: "/author/:authorId", name: "author", component: Author},
  {path: "/authors", name: "authors", component: Authors},
  {path: "/bubble-universe-map", name: "bubbleUniverseMap", component: BubbleUniverseMap},
  {path: "/characters", name: "characters", component: Characters},
  {path: "/characters/:characterId", name: "character", component: Character},
  {
    path: "/comics", component: {render: () => h(RouterView)}, children: [
      {path: "", name: "comics", component: Comics},
      {path: ":rangeId", name: "comicsRange", component: ComicsRange},
      {path: ":rangeId/:comicId", name: "comic", component: Comic}
    ]
  }
];

const router = createRouter({history: createWebHashHistory(), routes});

export default router;