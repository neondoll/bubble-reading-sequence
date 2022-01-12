<template>
    <v-alert border="bottom" colored-border elevation="2" type="error" v-if="errors">
        <ul class="m-0">
            <li v-for="(error,index) in Object.keys(errors)" :key="`li-${index}`">{{ errors[error][0] }}</li>
        </ul>
    </v-alert>
</template>

<script>
export default {
    name: "NErrors",
    props: {
        errors: {
            default: () => null,
            type: Object | null
        }
    }
}
</script>
