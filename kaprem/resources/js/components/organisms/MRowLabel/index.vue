<template>
    <v-row>
        <v-col>{{ label }}</v-col>
        <v-col>{{ value }}</v-col>
    </v-row>
</template>

<script>
export default {
  name: 'MRowLabel',
  props: ['label', 'value'],
};
</script>

<style scoped>

</style>
