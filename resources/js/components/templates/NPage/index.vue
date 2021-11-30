<template>
    <v-container>
        <n-breadcrumbs class="mb-2 p-0" v-if="breadcrumbs.length > 0" :items="breadcrumbs"/>

        <slot/>
    </v-container>
</template>

<script>
import NBreadcrumbs from "../../atoms/NBreadcrumbs";

export default {
    components: {NBreadcrumbs},
    name: "NPage",
    props: {
        breadcrumbs: {
            default: () => []
        }
    }
}
</script>
