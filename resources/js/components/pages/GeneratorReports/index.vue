<template>
    <n-page label="Формирование отчетов по имущественному комплексу" :breadcrumbs="breadcrumbs" :loading="loading"
            :style="`height: ${height}px;`">
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
        height: Math.max(window.innerHeight, document.documentElement.scrollHeight) - 164,
        loading: true,
        sites: []
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
        this.loading = true;
        await this.getItems();
    },
    name: "GeneratorReports"
}
</script>

<style scoped lang="scss">
//@import "GeneratorReports.scss";
</style>
