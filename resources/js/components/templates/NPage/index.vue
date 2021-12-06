<template>
    <n-container>
        <n-breadcrumbs class="mb-2 p-0" v-if="breadcrumbs.length > 0" :items="breadcrumbs"/>

        <slot/>
    </n-container>
</template>

<script>
import NBreadcrumbs from "../../atoms/NBreadcrumbs";
import NContainer from "../../atoms/NContainer";

export default {
    components: {NBreadcrumbs, NContainer},
    name: "NPage",
    props: {
        breadcrumbs: {
            default: () => []
        }
    }
}
</script>
