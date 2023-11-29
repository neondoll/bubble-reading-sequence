<script setup lang="ts">
const menuNavbarList = [
  {title: "Главная", to: {name: "home"}},
  {title: "Серии", to: {name: "ranges"}},
  {title: "Герои", to: {name: "characters"}},
  {title: "Авторы", to: {name: "authors"}},
  {title: "Карта вселенной BUBBLE", to: {name: "bubbleUniverseMap"}}
];
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <div class="navbar">
        <!--<a class="navbar__link" href="#"><img class="navbar__logo" src="" alt=""></a>-->
        <nav class="navbar__menu menu-navbar">
          <!--<span class="menu-navbar__btn-close"></span>-->
          <ul class="menu-navbar__list">
            <template v-for="menuNavbarItem in menuNavbarList">
              <li class="menu-navbar__item">
                <RouterLink class="menu-navbar__link" :to="menuNavbarItem.to">{{ menuNavbarItem.title }}</RouterLink>
              </li>
            </template>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <main>
    <RouterView/>
  </main>
</template>

<style scoped></style>
