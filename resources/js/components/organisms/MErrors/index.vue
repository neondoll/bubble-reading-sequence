<template>
    <v-alert
        v-if="errors"
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
