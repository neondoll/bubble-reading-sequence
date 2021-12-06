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

        <n-map/>

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
                        838
                    </div>
                </div>
            </div>

            <div class="d-flex flex-wrap n-cards">
                <a class="d-flex align-items-center n-card" target="_blank" v-for="(site, j) in siteGroup.sites"
                   :href="site.href" :key="`siteGroup-${i}-site-${j}`">
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
            </div>
        </div>
    </n-page>
</template>

<script>
import NMap from "../../organisms/NMap";
import NPage from "../../templates/NPage";
import sliders from "../../../../assets/sliders.svg";
import {ApiMixin, HelpersMixin} from "../../../mixins";
import {
    vector1, vector2, vector3, vector4, vector5, vector6, vector7, vector8, vector9, vector10, vector11, vector12,
    vector13, vector14, vector15, vector16, vector17, vector18, vector19
} from "../../../../assets/vectors";

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
            sliders, vector1, vector2, vector3, vector4, vector5, vector6, vector7, vector8, vector9, vector10,
            vector11, vector12, vector13, vector14, vector15, vector16, vector17, vector18, vector19
        },
        siteGroups: [],
        switchCCO: true
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
    mixins: [ApiMixin, HelpersMixin],
    async mounted() {
        await this.getItems()
    },
    name: "MainPage"
}
</script>

<style scoped lang="scss">
@import "MainPage.scss";
</style>
