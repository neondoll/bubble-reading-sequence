<template>
    <v-alert class="p-0" color="#E9ECEF" dense>
        <v-breadcrumbs large :items="params">
            <template v-slot:item="{ item }">
                <v-breadcrumbs-item :disabled="item.disabled" :href="item.href">
                    <span class="font-roboto-normal-normal" style="font-size: 16px; line-height: 1.2;">
                        {{ item.text }}
                    </span>
                </v-breadcrumbs-item>
            </template>
        </v-breadcrumbs>
    </v-alert>
</template>

<script>
export default {
    computed: {
        params() {
            return [{text: 'Главная', disabled: false, href: 'https://иасмон.рф'}].concat(this.items)
        }
    },
    name: "NBreadcrumbs",
    props: {
        items: {
            required: true,
            type: Array
        }
    }
}
</script>

<style lang="scss" scoped>
@import "NBreadcrumbs.scss";
</style>
