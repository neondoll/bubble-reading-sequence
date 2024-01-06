<script setup lang="ts">
const menuNavbarList = [
  {title: "Главная", to: {name: "home"}},
  {title: "Комиксы", to: {name: "comics"}},
  {title: "Герои", to: {name: "characters"}},
  {title: "Авторы", to: {name: "authors"}},
  {title: "Карта вселенной BUBBLE", to: {name: "bubbleUniverseMap"}}
];
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <div class="navbar">
        <a class="navbar__link" href="#">BUBBLE fan-made</a>
        <nav class="navbar__menu menu-navbar">
          <!--<span class="menu-navbar__btn-close"></span>-->
          <ul class="menu-navbar__list">
            <template v-for="menuNavbarItem in menuNavbarList">
              <li class="menu-navbar__item">
                <RouterLink class="menu-navbar__link" active-class="active" :to="menuNavbarItem.to">
                  {{ menuNavbarItem.title }}
                </RouterLink>
              </li>
            </template>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <main class="main">
    <RouterView/>
  </main>
</template>

<style scoped></style>
