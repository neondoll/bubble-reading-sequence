<template>
  <div>
    <span v-if="ifText">{{ value }}</span>
    <v-text-field v-else :type="type" hide-details dense v-model="model"/>
  </div>
</template>

<script>
export default {
  name: "MOnlyUserEdit",
  props: {
    'value': null,
    'isText': null,
    'type': {
      default: () => 'text'
    }
  },
  computed: {
    ifText() {
      return this.$check('admin') || this.isText
    },
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', this.type === 'number' ? Number(val) : val)
      }
    }
  },
}
</script>

<style scoped>

</style>
