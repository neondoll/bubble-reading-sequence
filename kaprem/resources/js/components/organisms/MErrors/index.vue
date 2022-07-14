<template>
    <v-alert
        v-if="isValid"
        border="bottom"
        colored-border
        type="error"
        elevation="2"
    >
        <ul class="m-0">
            <li v-for="(error,index) in Object.keys(errors)" :key="`li-${index}`">
                {{ errors[error][0] }}
            </li>
        </ul>
    </v-alert>
</template>

<script>
export default {
    name: "MErrors",
    computed: {
        isValid() {
            if (!this.errors || typeof this.errors !== 'object') {
                return false;
            }
            return Object.keys(this.errors).length > 0
        }
    },
    props: {
        errors: {
            type: Object | null,
            default: () => null
        }
    }
}
</script>

<style scoped>

</style>
