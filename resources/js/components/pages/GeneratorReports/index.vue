<template>
    <n-page :breadcrumbs="breadcrumbs" :style="`height: ${height}px;`">
        <div class="d-flex justify-content-between" style="margin-top: 34px;">
            <div>
                <div class="n-title">Формирование отчетов по имущественному комплексу</div>
            </div>

            <v-btn color="#007BFF" elevation="0" text>
                <v-icon large left>mdi-chevron-left</v-icon>

                <span class="font-roboto-normal-normal"
                      style="font-size: 16px; letter-spacing: 2px; line-height: 1.2;" @click="toRouteByName('main')">
                  Назад
                </span>
            </v-btn>
        </div>

        <div class="d-flex flex-wrap n-cards">
            <template v-for="site in sites">
                <router-link class="d-flex align-items-center n-card" v-if="site.href_in_project && site.href"
                             :to="{path: site.href}">
                    <div>
                        <v-img max-width="38.5" :src="icons[site.icon]"/>
                    </div>

                    <div style="margin-left: 18.67px;">
                        <div class="font-roboto-normal-500" style="color: #343A40; font-size: 14px; line-height: 1.2;">
                            {{ site.title }}
                        </div>

                        <div class="font-roboto-normal-normal"
                             style="color: #6C757D; font-size: 9px; line-height: 1.2; margin-top: 5px;">
                            {{ site.text }}
                        </div>
                    </div>
                </router-link>
                <a class="d-flex align-items-center n-card" target="_blank" v-else :href="site.href">
                    <div>
                        <v-img max-width="38.5" :src="icons[site.icon]"/>
                    </div>

                    <div style="margin-left: 18.67px;">
                        <div class="font-roboto-normal-500" style="color: #343A40; font-size: 14px; line-height: 1.2;">
                            {{ site.title }}
                        </div>

                        <div class="font-roboto-normal-normal"
                             style="color: #6C757D; font-size: 9px; line-height: 1.2; margin-top: 5px;">
                            {{ site.text }}
                        </div>
                    </div>
                </a>
            </template>
        </div>
    </n-page>
</template>

<script>
import NPage from "../../templates/NPage";
import {vector20, vector21, vector22} from "../../../../assets/vectors";
import {ApiMixin, HelpersMixin} from "../../../mixins";

export default {
    components: {NPage},
    data: () => ({
        breadcrumbs: [
            {text: 'Управление имуществом', disabled: false, href: '/'},
            {text: 'Формирование отчетов по имущественному комплексу', disabled: true}
        ],
        icons: {vector20, vector21, vector22},
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
