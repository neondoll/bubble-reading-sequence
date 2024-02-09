import {RouterView, createRouter, createWebHashHistory} from 'vue-router';
import {h} from 'vue';

const routes = [
  {path: '/', name: 'home', component: () => import('./pages/Home.vue')},
  {
    path: '/authors', component: {render: () => h(RouterView)}, children: [
      {path: '', name: 'authors', component: () => import('./pages/Authors.vue')},
      {path: ':authorId', name: 'author', component: () => import('./pages/Author.vue')}
    ]
  },
  {path: '/bubble-universe-map', name: 'bubbleUniverseMap', component: () => import('./pages/BubbleUniverseMap.vue')},
  {
    path: '/characters', component: {render: () => h(RouterView)}, children: [
      {path: '', name: 'characters', component: () => import('./pages/Characters.vue')},
      {path: ':characterId', name: 'character', component: () => import('./pages/Character.vue')}
    ]
  },
  {
    path: '/comics', component: {render: () => h(RouterView)}, children: [
      {path: '', name: 'comics', component: () => import('./pages/Comics.vue')},
      {path: ':rangeId', name: 'comicsRange', component: () => import('./pages/ComicsRange.vue')},
      {path: ':rangeId/:comicId', name: 'comic', component: () => import('./pages/Comic.vue')}
    ]
  }
];

const router = createRouter({history: createWebHashHistory(), routes});

export default router;