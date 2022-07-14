<template>
    <div v-if="!loading">
        <v-breadcrumbs style="padding-left: 10px" :items="breadcrumbs"/>
        <slot></slot>
    </div>
    <v-skeleton-loader height="100%" v-else type="table-heading, list-item-two-line, image, table-tfoot"/>
</template>

<script>
export default {
    name: 'MPage',
    computed: {
        breadcrumbs() {
            if (Array.isArray(this.pages)) {
                return [{text: 'Главная', href: '/'}, ...this.pages];
            } else {
                return [{text: 'Главная', href: '/',}, this.pages];
            }
        },
    },
    props: {
        loading: {
            default: () => false,
        },
        pages: {
            default: () => [],
        },
    },
};
</script>

<style scoped>

</style>
