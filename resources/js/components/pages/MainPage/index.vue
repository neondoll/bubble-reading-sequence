<template>
    <n-page :breadcrumbs="breadcrumbs">
        <div class="d-flex justify-content-between" style="margin-top: 34px;">
            <div>
                <div class="n-title">Управление имуществом</div>

                <div class="n-subtitle" style="margin-top: 5px;">Департамент управления имуществом</div>
            </div>

            <v-btn color="#007BFF" elevation="0" outlined @click="toRouteByName('summaryStatistics')">
                <span class="font-roboto-normal-normal"
                      style="font-size: 16px; letter-spacing: 0; line-height: 1.2; text-transform: none;">
                    Сводная статистика
                </span>

                <v-icon large right>mdi-chevron-right</v-icon>
            </v-btn>
        </div>

        <!--<div class="d-flex justify-content-end">
            <div>
                <v-switch class="mt-0 pt-0" dense inset v-model="switchCCO">
                    <template v-slot:label>
                        <span class="font-roboto-normal-normal"
                              style="color: #212529; font-size: 16px; line-height: 1.2;">
                            Объекты капитального строительства
                        </span>
                    </template>
                </v-switch>
            </div>
        </div>-->

        <div class="mt-5">
            <div class="d-flex justify-content-center align-items-center"
                 style="background-color: #e2f7df; border-radius: 4px; height: 50vh; width: 100%;" v-if="loadingMap">
                <div class="cssload-bell">
                    <div class="cssload-circle">
                        <div class="cssload-inner"/>
                    </div>

                    <div class="cssload-circle">
                        <div class="cssload-inner"/>
                    </div>

                    <div class="cssload-circle">
                        <div class="cssload-inner"/>
                    </div>

                    <div class="cssload-circle">
                        <div class="cssload-inner"/>
                    </div>

                    <div class="cssload-circle">
                        <div class="cssload-inner"/>
                    </div>
                </div>
            </div>
            <n-map v-else :map-objects="realEstates"/>
        </div>

        <div class="d-flex justify-content-between" style="margin-top: 31px;">
            <!--<v-btn color="#6C757D" elevation="0" height="40" outlined
                   style="border-radius: 4px 0 0 4px; padding: 0 12px;" tile @click="search">
                 <span class="font-roboto-normal-400"
                       style="font-size: 16px; letter-spacing: 0; line-height: 1.2; text-transform: none;">
                     Поиск
                 </span>
            </v-btn>-->

            <div class="d-flex justify-content-center align-items-center unselectable"
                 style="background: #E9ECEF; border: 1px solid #6C757D; border-radius: 4px 0 0 4px; box-sizing: border-box; height: 40px; width: 75px;">
                <span class="font-roboto-normal-400"
                      style="font-size: 16px; letter-spacing: 0; line-height: 1.2; text-transform: none;">
                    Поиск
                </span>
            </div>

            <v-text-field class="font-roboto-normal-normal" clearable dense outlined
                          placeholder="Введите наименование раздела или модуля"
                          style="border-radius: 0; font-size: 16px; line-height: 1.2;" type="text"
                          v-model="filters.text"/>

            <v-btn color="#6C757D" elevation="0" height="40" outlined
                   style="border-radius: 0 4px 4px 0; padding: 0 12px;" tile>
                <v-img max-width="24" :src="icons.sliders"/>
            </v-btn>
        </div>

        <div v-for="(siteGroup, i) in siteGroupsFiltered" :key="`siteGroup-${i}`">
            <div class="d-flex align-items-center" style="margin-top: 25px;">
                <div class="font-roboto-normal-500"
                     style="color: #343A40; font-size: 20px; letter-spacing: 0.75px; line-height: 1.2;">
                    {{ siteGroup.title }}
                </div>

                <v-btn class="ml-2" color="#007BFF" small text @click="toRouteByName(siteGroup.statistics_page)">
                    <span class="font-roboto-normal-normal"
                          style="font-size: 12px; letter-spacing: 0; line-height: 1.2; text-transform: none;">
                        К статистике
                    </span>

                    <v-icon right>mdi-chevron-right</v-icon>
                </v-btn>

                <div class="background-primary d-flex align-items-center ml-auto"
                     style="border-radius: 39px; padding: 6px 12px;" v-if="i === 0">
                    <span class="font-roboto-normal-500" style="font-size: 14px; line-height: 1.2;">
                        Реестр организаций
                    </span>

                    <div class="background-white font-roboto-normal-bold"
                         style="border-radius: 2px; font-size: 10px; line-height: 1.2; margin: 0 4px; padding: 4px 3px;">
                        {{ id_orgs.length }}
                    </div>
                </div>
            </div>

            <n-cards>
                <template v-for="site in siteGroup.sites">
                    <n-card-site :site="site"/>
                </template>
            </n-cards>
        </div>
    </n-page>
</template>

<script>
import NCardSite from "../../organisms/NCardSite";
import NCards from "../../atoms/NCards";
import NMap from "../../organisms/NMap";
import NPage from "../../templates/NPage";
import radar from "../../../../assets/radar.gif";
import sliders from "../../../../assets/sliders.svg";
import {ApiMixin, HelpersMixin} from "../../../mixins";
import {
    vector1, vector2, vector3, vector4, vector5, vector6, vector7, vector8, vector9, vector10, vector11, vector12,
    vector13, vector14, vector15, vector16, vector17, vector18, vector19
} from "../../../../assets/vectors";

export default {
    components: {NCardSite, NCards, NMap, NPage},
    computed: {
        siteGroupsFiltered() {
            return this.filter();
        }
    },
    data: () => ({
        breadcrumbs: [{text: 'Управление имуществом', disabled: true}],
        filters: {text: null},
        icons: {
            radar, sliders, vector1, vector2, vector3, vector4, vector5, vector6, vector7, vector8, vector9, vector10,
            vector11, vector12, vector13, vector14, vector15, vector16, vector17, vector18, vector19
        },
        id_orgs: [],
        lands: [],
        loadingMap: true,
        realEstates: [],
        siteGroups: [],
        //siteGroupsFiltered: [],
        switchCCO: true
    }),
    methods: {
        filter() {
            if (this.filters.text && this.filters.text.length > 2) {
                let sgf = [];
                this.siteGroups.forEach(((siteGroup) => {
                    if (siteGroup.title.toLowerCase().includes(this.filters.text.toLowerCase())) {
                        sgf.push(siteGroup);
                    } else {
                        let sg = {
                            created_at: siteGroup.created_at,
                            deleted_at: siteGroup.deleted_at,
                            id: siteGroup.id,
                            sites: [],
                            title: siteGroup.title,
                            updated_at: siteGroup.updated_at
                        };
                        siteGroup.sites.forEach(((site) => {
                            if (site.title.toLowerCase().includes(this.filters.text.toLowerCase())) {
                                sg.sites.push(site);
                            }
                        }));
                        if (sg.sites.length > 0) {
                            sgf.push(sg);
                        }
                    }
                }))
                return sgf;
            }
            return this.siteGroups;
        },
        async getItems() {
            this.loading = true;
            this.siteGroups = await this.getSiteGroups();
            this.siteGroupsFiltered = this.siteGroups;
            setTimeout(() => {
                this.loading = false;
            }, 300)
        },
        search() {
            this.siteGroupsFiltered = this.filter();
        }
    },
    mixins: [ApiMixin, HelpersMixin],
    async mounted() {
        await this.getItems();
        this.id_orgs = [];
        (await this.getOutOfSchema('iasmon', 'organizationList', ['id'], `subordination: 1, without_global_scope: true, system_status: [1], status_org: [1, 2]`)).forEach(value => {
            this.id_orgs.push(value.id);
        });
        this.realEstates = await this.getRealEstates();
        this.loadingMap = false;
    },
    name: "MainPage",
    watch: {
        async switchCCO(newVal) {
            this.loadingMap = true;
            if (newVal) {
                this.realEstates = await this.getRealEstates();
            } else {
                this.lands = await this.getLands();
            }
            this.loadingMap = false;
        }
    }
}
</script>

<style scoped lang="scss">
@import "MainPage.scss";
</style>
