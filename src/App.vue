<script setup>
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <div class="navbar">
        <!--<a class="navbar__link" href="#"><img class="navbar__logo" src="" alt=""></a>-->
        <nav class="navbar__menu menu-navbar">
          <!--<span class="menu-navbar__btn-close"></span>-->
          <ul class="menu-navbar__list">
            <li class="menu-navbar__item">
              <RouterLink class="menu-navbar__link" :to="{name:'home'}">Главная</RouterLink>
            </li>
            <li class="menu-navbar__item">
              <RouterLink class="menu-navbar__link" :to="{name:'ranges'}">Серии</RouterLink>
            </li>
            <li class="menu-navbar__item">
              <RouterLink class="menu-navbar__link" :to="{name:'bubbleUniverseMap'}">Карта вселенной BUBBLE</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <main>
    <Suspense>
      <template #default>
        <RouterView/>
      </template>
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
  </main>
</template>

<style scoped></style>
