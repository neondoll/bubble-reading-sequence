<template>
    <n-container>
        <n-breadcrumbs class="mb-2 p-0" v-if="breadcrumbs.length > 0" :items="breadcrumbs"/>

        <div class="d-flex justify-content-between" style="margin-top: 34px;" v-if="label || !disableBackBtn">
            <p class="title" v-if="label">{{ label }}</p>

            <v-btn color="#007BFF" elevation="0" text v-if="!disableBackBtn" @click="$router.back()">
                <v-icon large left>mdi-chevron-left</v-icon>

                <span class="font-roboto-normal-normal" style="font-size: 16px; letter-spacing: 2px; line-height: 1.2;">
                  Назад
                </span>
            </v-btn>
        </div>

        <div v-if="loading" :style="`height: ${height}px;`">
            <n-loader/>
        </div>
        <slot v-else/>
    </n-container>
</template>

<script>
import NBreadcrumbs from "../../organisms/NBreadcrumbs";
import NContainer from "../../atoms/NContainer";
import NLoader from "../../atoms/NLoader";

export default {
    components: {NBreadcrumbs, NContainer, NLoader},
    data: () => ({
        height: Math.max(window.innerHeight, document.documentElement.scrollHeight) - 164
    }),
    name: "NPage",
    props: {
        breadcrumbs: {
            default: () => [],
            type: Array
        },
        disableBackBtn: {
            type: Boolean,
            default: () => false
        },
        label: {
            default: () => null,
            type: String | null
        },
        loading: {
            default: () => false,
            type: Boolean
        }
    }
}
</script>

<style lang="scss" scoped>
@import "NPage.scss";
</style>
