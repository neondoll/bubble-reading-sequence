<script setup lang="ts">
const props = defineProps({items: {required: true, type: Array}});
</script>

<template>
  <div class="breadcrumbs">
    <ol class="breadcrumbs__list">
      <template v-for="item in items" :key="`breadcrumb-${item.text}`">
        <li class="breadcrumbs__item"
            :class="{'active': Boolean(item.active)}"
            :aria-current="item.active ? 'page' : undefined">
          <span v-if="item.active" class="breadcrumbs__text">{{ item.text }}</span>
          <RouterLink v-else class="breadcrumbs__link" :to="item.to">{{ item.text }}</RouterLink>
        </li>
      </template>
    </ol>
  </div>
</template>

<style scoped></style>