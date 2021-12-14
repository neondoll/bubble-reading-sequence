<template>
    <n-page :breadcrumbs="breadcrumbs">
        <div class="d-flex justify-content-between" style="margin-top: 34px;">
            <div>
                <div class="n-title">Управление имуществом</div>

                <div class="n-subtitle" style="margin-top: 5px;">Департамент управления имуществом</div>
            </div>

            <v-btn color="#007BFF" elevation="0" outlined>
                <span class="font-roboto-normal-normal"
                      style="font-size: 16px; letter-spacing: 0; line-height: 1.2; text-transform: none;">
                    Сводная статистика
                </span>

                <v-icon large right>mdi-chevron-right</v-icon>
            </v-btn>
        </div>

        <div class="d-flex justify-content-end">
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
        </div>

        <div class="d-flex justify-content-center align-items-center" v-if="loadingMap"
             style="background-color: #e2f7df; border-radius: 4px; height: 50vh; width: 100%;">
            <div class="cssload-bell">
                <div class="cssload-circle">
                    <div class="cssload-inner"></div>
                </div>
                <div class="cssload-circle">
                    <div class="cssload-inner"></div>
                </div>
                <div class="cssload-circle">
                    <div class="cssload-inner"></div>
                </div>
                <div class="cssload-circle">
                    <div class="cssload-inner"></div>
                </div>
                <div class="cssload-circle">
                    <div class="cssload-inner"></div>
                </div>
            </div>
        </div>
        <n-map v-else :map-objects="switchCCO ? realEstates : lands"/>

        <div class="d-flex justify-content-between" style="margin-top: 31px;">
            <!--<v-btn color="#6C757D" elevation="0" height="40" outlined
                   style="border-radius: 4px 0 0 4px; padding: 0 12px;" tile>
                 <span class="font-roboto-normal-400"
                       style="font-size: 16px; letter-spacing: 0; line-height: 1.2; text-transform: none;">
                     Поиск
                 </span>
            </v-btn>-->

            <v-text-field class="font-roboto-normal-normal" clearable dense outlined
                          placeholder="Введите наименование раздела или модуля"
                          style="border-radius: 4px 0 0 4px; font-size: 16px; line-height: 1.2;" type="text"
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

                <v-btn class="ml-2" color="#007BFF" small text>
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

            <div class="d-flex flex-wrap n-cards">
                <template v-for="site in siteGroup.sites">
                    <router-link class="d-flex align-items-center n-card" v-if="site.href_in_project && site.href"
                                 :to="{path: site.href}">
                        <div>
                            <v-img max-width="38.5" :src="icons[site.icon]"/>
                        </div>

                        <div style="margin-left: 18.67px;">
                            <div class="font-roboto-normal-500"
                                 style="color: #343A40; font-size: 14px; line-height: 1.2;">
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
                            <div class="font-roboto-normal-500"
                                 style="color: #343A40; font-size: 14px; line-height: 1.2;">
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
        </div>
    </n-page>
</template>

<script>
import NMap from "../../organisms/NMap";
import NPage from "../../templates/NPage";
import radar from "../../../../assets/radar.gif";
import sliders from "../../../../assets/sliders.svg";
import {ApiMixin, HelpersMixin} from "../../../mixins";
import {
    vector1, vector2, vector3, vector4, vector5, vector6, vector7, vector8, vector9, vector10, vector11, vector12,
    vector13, vector14, vector15, vector16, vector17, vector18, vector19
} from "../../../../assets/vectors";
import {GetMixin} from "../../../mixins/GetMixin";

export default {
    components: {NMap, NPage},
    computed: {
        siteGroupsFiltered() {
            if (this.filters.text) {
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
        }
    },
    data: () => ({
        breadcrumbs: [{text: 'Управление имуществом', disabled: true}],
        filters: {
            text: null
        },
        /*groupsHref: [
            {
                title: 'Имущество подведомственных организаций',
                cardsHref: [
                    {
                        icon: 'vector1',
                        title: 'Недвижимое имущество',
                        text: 'Ведение реестра объектов капитального строительства, выгрузки, актуализация данных',
                        href: 'https://недвижимость.иасмон.рф/real-estate-list'
                    },
                    {
                        icon: 'vector2',
                        title: 'Земельные участки',
                        text: 'Ведение реестра земельных участков, выгрузки, актуализация данных, разметка границ ЗУ',
                        href: 'https://недвижимость.иасмон.рф/land-list'
                    },
                    {
                        icon: 'vector19',
                        title: 'ОЦДИ',
                        text: 'Ведение реестра объектов особо ценного движимого имущества, выгрузки, актуализация данных',
                        href: null
                    },
                    {
                        icon: 'vector3',
                        title: 'Незавершенное строительство',
                        text: 'Ведение реестра объектов незавершенного строительства',
                        href: null
                    },
                    {
                        icon: 'vector4',
                        title: 'Договоры аренды',
                        text: 'Ведение реестра объектов капитального строительства, выгрузки, актуализация данных',
                        href: null
                    },
                    {
                        icon: 'vector4',
                        title: 'Договоры безвозмездного пользования',
                        text: 'Ведение реестра договоров безвозмездного пользования',
                        href: null
                    },
                    {
                        icon: 'vector7',
                        title: 'Использование имущества',
                        text: 'Ведение реестра объектов, используемых организацией',
                        href: null
                    }
                ]
            },
            {
                title: 'Имущество Минобрнауки России',
                cardsHref: [
                    {
                        icon: 'vector1',
                        title: 'Недвижимое имущество',
                        text: 'Ведение реестра объектов капитального строительства, выгрузки, актуализация данных',
                        href: null
                    },
                    {
                        icon: 'vector2',
                        title: 'Земельные участки',
                        text: 'Ведение реестра земельных участков, выгрузки, актуализация данных, разметка границ ЗУ',
                        href: null
                    },
                    {
                        icon: 'vector4',
                        title: 'Договоры аренды',
                        text: 'Ведение реестра объектов капитального строительства, выгрузки, актуализация данных',
                        href: null
                    },
                    {
                        icon: 'vector4',
                        title: 'Договоры безвозмездного пользования',
                        text: 'Ведение реестра договоров безвозмездного пользования',
                        href: null
                    },
                    {
                        icon: 'vector7',
                        title: 'Использование имущества',
                        text: 'Ведение реестра объектов, используемых организацией',
                        href: null
                    }
                ]
            },
            {
                title: 'Модули взаимодействия',
                cardsHref: [
                    {
                        icon: 'vector8',
                        title: 'Оценка последствий',
                        text: 'Получение заключения на оценку последствий для образовательных организаций',
                        href: null
                    },
                    {
                        icon: 'vector9',
                        title: 'Аренда и БП',
                        text: 'Получение согласия учредителя на передачу объекта в аренду или безвозмездное пользование',
                        href: null
                    },
                    {
                        icon: 'vector10',
                        title: 'Перераспределение',
                        text: 'Отказ от имущества, закрепление имущества, передача на иной уровень собственности',
                        href: 'https://распределение.иасмон.рф/'
                    },
                    {
                        icon: 'vector11',
                        title: 'Списание имущества',
                        text: 'Согласование крупных и иных сделок с учредителем',
                        href: null
                    },
                    {
                        icon: 'vector12',
                        title: 'Сделки',
                        text: 'Ведение реестра объектов, используемых организацией',
                        href: null
                    },
                    {
                        icon: 'vector13',
                        title: 'АО Дом РФ',
                        text: 'Изъятие объектов ДОМ.РФ, согласование с подведомственной организацией',
                        href: null
                    },
                    {
                        icon: 'vector5',
                        title: 'Сервитут',
                        text: 'Оформление заявок на сервитут, согласование с учредителем',
                        href: null
                    },
                    {
                        icon: 'vector14',
                        title: 'Ядерная безопасность',
                        text: 'Согласование объектов ядерной и радиационной безопасности с учредителем',
                        href: null
                    },
                    {
                        icon: 'vector15',
                        title: 'Паспорта безопасности',
                        text: 'Ведение реестров паспортов безопасности, актуализация данных',
                        href: null
                    }
                ]
            },
            {
                title: 'Служебные модули',
                cardsHref: [
                    {
                        icon: 'vector16',
                        title: 'Общая повестка',
                        text: 'Получение заключения на оценку последствий для образовательных организаций',
                        href: null
                    },
                    {
                        icon: 'vector17',
                        title: 'Жилищный фонд',
                        text: 'Ведение реестра объектов жилищного фонда, специализированный жилищный фонд',
                        href: null
                    },
                    {
                        icon: 'vector18',
                        title: 'Генератор отчетов',
                        text: 'Формирование отчетов по имущественному комплексу в свободной форме',
                        href: null
                    },
                    {
                        icon: 'vector6',
                        title: 'Панель администратора',
                        text: 'Служебные функции управления имуществом (перенос, восстановление объектов и прочее)',
                        href: null
                    }
                ]
            }
        ],*/
        icons: {
            radar, sliders, vector1, vector2, vector3, vector4, vector5, vector6, vector7, vector8, vector9, vector10,
            vector11, vector12, vector13, vector14, vector15, vector16, vector17, vector18, vector19
        },
        id_orgs: [],
        lands: [],
        loadingMap: true,
        realEstates: [],
        siteGroups: [],
        switchCCO: true,
        user: {}
    }),
    methods: {
        async getItems() {
            this.loading = true;
            this.siteGroups = await this.getSiteGroups();
            setTimeout(() => {
                this.loading = false;
            }, 300)
        }
    },
    mixins: [ApiMixin, GetMixin, HelpersMixin],
    async mounted() {
        this.user = await this.getCurrentUser();
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

.cssload-bell {
    width: 150px;
    height: 153px;
    border-radius: 100%;
    position: absolute;
    left: calc(50% - 75px);
}

.cssload-circle {
    width: 100%;
    height: 100%;
    position: absolute;
}

.cssload-circle .cssload-inner {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 8px solid rgba(0, 255, 170, 0.7);
    border-right: none;
    border-top: none;
    background-clip: padding;
    box-shadow: inset 0px 0px 15px rgba(0, 255, 170, 0.15);
}

.cssload-circle:nth-of-type(0) {
    transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
}

.cssload-circle:nth-of-type(0) .cssload-inner {
    animation: cssload-spin 2.3s infinite linear;
    -o-animation: cssload-spin 2.3s infinite linear;
    -ms-animation: cssload-spin 2.3s infinite linear;
    -webkit-animation: cssload-spin 2.3s infinite linear;
    -moz-animation: cssload-spin 2.3s infinite linear;
}

.cssload-circle:nth-of-type(1) {
    transform: rotate(70deg);
    -o-transform: rotate(70deg);
    -ms-transform: rotate(70deg);
    -webkit-transform: rotate(70deg);
    -moz-transform: rotate(70deg);
}

.cssload-circle:nth-of-type(1) .cssload-inner {
    animation: cssload-spin 2.3s infinite linear;
    -o-animation: cssload-spin 2.3s infinite linear;
    -ms-animation: cssload-spin 2.3s infinite linear;
    -webkit-animation: cssload-spin 2.3s infinite linear;
    -moz-animation: cssload-spin 2.3s infinite linear;
}

.cssload-circle:nth-of-type(2) {
    transform: rotate(140deg);
    -o-transform: rotate(140deg);
    -ms-transform: rotate(140deg);
    -webkit-transform: rotate(140deg);
    -moz-transform: rotate(140deg);
}

.cssload-circle:nth-of-type(2) .cssload-inner {
    animation: cssload-spin 2.3s infinite linear;
    -o-animation: cssload-spin 2.3s infinite linear;
    -ms-animation: cssload-spin 2.3s infinite linear;
    -webkit-animation: cssload-spin 2.3s infinite linear;
    -moz-animation: cssload-spin 2.3s infinite linear;
}

.cssload-bell {
    animation: cssload-spin 5.75s infinite linear;
    -o-animation: cssload-spin 5.75s infinite linear;
    -ms-animation: cssload-spin 5.75s infinite linear;
    -webkit-animation: cssload-spin 5.75s infinite linear;
    -moz-animation: cssload-spin 5.75s infinite linear;
}


@keyframes cssload-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@-o-keyframes cssload-spin {
    from {
        -o-transform: rotate(0deg);
    }
    to {
        -o-transform: rotate(360deg);
    }
}

@-ms-keyframes cssload-spin {
    from {
        -ms-transform: rotate(0deg);
    }
    to {
        -ms-transform: rotate(360deg);
    }
}

@-webkit-keyframes cssload-spin {
    from {
        -webkit-transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
    }
}

@-moz-keyframes cssload-spin {
    from {
        -moz-transform: rotate(0deg);
    }
    to {
        -moz-transform: rotate(360deg);
    }
}
</style>
