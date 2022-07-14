<template>
  <p @click="$emit('click')" class="my-0"><slot></slot></p>
</template>

<script>
export default {
  name: "MP"
}
</script>

<style scoped>
  p {
    font-family: "Tahoma", "Times New Roman",serif;
  }
</style>
