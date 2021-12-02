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

        <v-alert class="text-center" shaped text>Карта</v-alert>

        <div class="d-flex justify-content-between" style="margin-top: 31px;">
            <v-btn color="#6C757D" elevation="0" height="40" outlined
                   style="border-radius: 4px 0 0 4px; padding: 0 12px;" tile>
                 <span class="font-roboto-normal-400"
                       style="font-size: 16px; letter-spacing: 0; line-height: 1.2; text-transform: none;">
                     Поиск
                 </span>
            </v-btn>

            <v-text-field class="font-roboto-normal-normal" clearable dense outlined
                          placeholder="Введите наименование раздела или модуля"
                          style="border-radius: 0; font-size: 24px; line-height: 36px;" type="text"/>

            <v-btn color="#6C757D" elevation="0" height="40" outlined
                   style="border-radius: 0 4px 4px 0; padding: 0 12px;" tile>
                <v-img max-width="24" :src="icons.sliders"/>
            </v-btn>
        </div>

        <div v-for="(groupHref, i) in groupsHref" :key="`groupHref-${i}`">
            <div class="d-flex align-items-center" style="margin-top: 25px;">
                <div class="font-roboto-normal-500"
                     style="color: #343A40; font-size: 20px; letter-spacing: 0.75px; line-height: 1.2;">
                    {{ groupHref.title }}
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
                <div class="d-flex align-items-center"
                     style="background: #F8F9FA; border: 0.2px solid #DFDFDF; border-radius: 15px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); box-sizing: border-box; margin: 12.5px 10px; padding: 12px 15px; width: 255px;"
                     v-for="(cardHref, j) in groupHref.cardsHref" :key="`groupHref-${i}-cardHref-${j}`">
                    <div>
                        <v-img max-width="38.5" :src="icons[cardHref.icon]"/>
                    </div>

                    <div style="margin-left: 18.67px;">
                        <div class="font-roboto-normal-500" style="color: #343A40; font-size: 14px; line-height: 1.2;">
                            {{ cardHref.title }}
                        </div>

                        <div class="font-roboto-normal-normal"
                             style="color: #6C757D; font-size: 9px; line-height: 1.2; margin-top: 5px;">
                            {{ cardHref.text }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </n-page>
</template>

<script>
import MPage from "../../organisms/MPage";
import NPage from "../../templates/NPage";
import {ApiMixin, HelpersMixin} from "../../../mixins";
import MShrinkX from "../../organisms/MShrinkX/MShrinkX";
import sliders from "../../../../assets/sliders.svg";
import {
    vector1, vector2, vector3, vector4, vector5, vector6, vector7, vector8, vector9, vector10, vector11, vector12, vector13,
    vector14, vector15, vector16, vector17, vector18, vector19
} from "../../../../assets/vectors";

export default {
    name: "MainPage",
    data: () => ({
        /*keys: [
            {key: 'job_place', text: 'Место работы'},
            {key: 'job_position', text: 'Должность'},
            {key: 'region', text: 'Регион', column: 'name'},
            {key: 'city', text: 'Город'},
            {key: 'phone', text: 'Телефон'},
            {key: 'email', text: 'email'},
        ],
        loading: true,
        notInArray: ['fio', 'id', 'created_at'],*/
        breadcrumbs: [
            {text: 'Объекты недвижимого имущества', disabled: false, href: 'https://недвижимость.иасмон.рф/'},
            {text: 'Новый объект', disabled: true}
        ],
        groupsHref: [
            {
                title: 'Имущество подведомственных организаций',
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
                        href: null
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
        ],
        icons: {
            sliders, vector1, vector2, vector3, vector4, vector5, vector6, vector7, vector8, vector9, vector10,
            vector11, vector12, vector13, vector14, vector15, vector16, vector17, vector18, vector19
        },
        switchCCO: true
        /*items: [],
        filters: {
            fio: null
        },
        showFilters: false,*/
    }),
    async mounted() {
        await this.getItems()

    },
    watch: {
        filters: {
            deep: true,
            async handler(val) {
                setTimeout(async () => {
                    let where = 'where: {';
                    Object.keys(val).forEach(key => {
                        if (val[key])
                            where += `${key}: "${val[key]}", `
                    })
                    where += "}"
                    await this.getItems(where)
                }, 500)
            }
        }
    },
    methods: {
        async getItems(where) {
            this.loading = true;
            let fields = this.keys.map(k => {
                if (k.hasOwnProperty('column')) {
                    return `${k.key}{${k.column}}`
                }
                return k.key

            }).concat(this.notInArray);

            this.items = await this.getForms(fields, where)
            setTimeout(() => {
                this.loading = false
            }, 300)

        },
        filteredKeys(item) {

            return Object.keys(item).filter(key => !this.notInArray.includes(key))
        },
    },
    mixins: [ApiMixin, HelpersMixin],
    components: {MShrinkX, MPage, NPage}
}
</script>

<style scoped lang="scss">
@import "MainPage.scss";

</style>
