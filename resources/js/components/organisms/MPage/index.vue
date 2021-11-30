<template>
    <v-container>
        <v-breadcrumbs class="mb-2 p-0" :items="breadcrumbs">
            <v-breadcrumbs-item
                slot="item"
                slot-scope="{ item }"
                exact
                :to="item.to">
                {{ item.text }}
            </v-breadcrumbs-item>
        </v-breadcrumbs>
        <div class="d-flex justify-space-between">
            <p class="title" v-if="label">{{ label }}</p>
            <v-btn v-if="!disableBackBtn" @click="$router.back()" color="primary">Назад</v-btn>
        </div>

        <slot></slot>
    </v-container>
</template>

<script>
export default {
    name: "MPage",
    props: {
        label: {
            default: () => null,
            type: String | null
        },
        breadcrumbs: {
            default: () => [],
            type: Array
        },
        disableBackBtn: {
            type: Boolean,
            default: () => false
        }
    }
}
</script>

<style scoped>

</style>
