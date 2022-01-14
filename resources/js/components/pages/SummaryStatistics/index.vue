<template>
    <n-page :breadcrumbs="breadcrumbs" :style="`height: ${height}px;`">
        <div class="d-flex justify-content-between" style="margin-top: 34px;">
            <div>
                <div class="n-title">Сводная статистика</div>
            </div>

            <v-btn color="#007BFF" elevation="0" text @click="toRouteByName('main')">
                <v-icon large left>mdi-chevron-left</v-icon>

                <span class="font-roboto-normal-normal"
                      style="font-size: 16px; letter-spacing: 2px; line-height: 1.2;">
                  Назад
                </span>
            </v-btn>
        </div>

        <v-alert class="font-roboto-normal-normal mt-5" style="font-size: 16px; line-height: 24px;" type="info">
            Раздел находится в разработке
        </v-alert>
    </n-page>
</template>

<script>
import NPage from "../../templates/NPage";
import {ApiMixin, HelpersMixin} from "../../../mixins";

export default {
    components: {NPage},
    data: () => ({
        breadcrumbs: [
            {text: 'Управление имуществом', disabled: false, href: '/'},
            {text: 'Сводная статистика', disabled: true}
        ],
        height: Math.max(window.innerHeight, document.documentElement.scrollHeight) - 164
    }),
    mixins: [ApiMixin, HelpersMixin],
    async mounted() {
        window.scrollTo(0, 0);
    },
    name: "SummaryStatistics"
}
</script>

<style lang="scss" scoped>
@import "SummaryStatistics.scss";
</style>
