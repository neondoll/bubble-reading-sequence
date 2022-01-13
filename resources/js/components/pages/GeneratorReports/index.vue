<template>
    <n-page :breadcrumbs="breadcrumbs" :style="`height: ${height}px;`">
        <div class="d-flex justify-content-between" style="margin-top: 34px;">
            <div>
                <div class="n-title">Формирование отчетов по имущественному комплексу</div>
            </div>

            <v-btn color="#007BFF" elevation="0" text>
                <v-icon large left>mdi-chevron-left</v-icon>

                <span class="font-roboto-normal-normal" style="font-size: 16px; letter-spacing: 2px; line-height: 1.2;"
                      @click="toRouteByName('main')">
                  Назад
                </span>
            </v-btn>
        </div>

        <n-cards>
            <template v-for="site in sites">
                <n-card-site :site="site"/>
            </template>
        </n-cards>
    </n-page>
</template>

<script>
import NCardSite from "../../organisms/NCardSite";
import NCards from "../../atoms/NCards";
import NPage from "../../templates/NPage";
import {ApiMixin, HelpersMixin} from "../../../mixins";

export default {
    components: {NCardSite, NCards, NPage},
    data: () => ({
        breadcrumbs: [
            {text: 'Управление имуществом', disabled: false, href: '/'},
            {text: 'Формирование отчетов по имущественному комплексу', disabled: true}
        ],
        sites: [],
        height: Math.max(window.innerHeight, document.documentElement.scrollHeight) - 164
    }),
    methods: {
        async getItems() {
            this.loading = true;
            this.sites = await this.getGeneratorReportsSites();
            setTimeout(() => {
                this.loading = false;
            }, 300)
        }
    },
    mixins: [ApiMixin, HelpersMixin],
    async mounted() {
        window.scrollTo(0, 0);
        await this.getItems();
    },
    name: "GeneratorReports"
}
</script>

<style scoped lang="scss">
@import "GeneratorReports.scss";
</style>
