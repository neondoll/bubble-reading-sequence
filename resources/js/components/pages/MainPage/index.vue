<template>
    <n-page :breadcrumbs="breadcrumbs">
        <div class="d-flex justify-content-between" style="margin-top: 51px;">
            <div>
                <div class="n-title">Управление имуществом</div>

                <div class="n-subtitle" style="margin-top: 7.5px;">Департамент управления имуществом</div>
            </div>

            <v-btn color="#007BFF" elevation="0" outlined>
                <span class="font-roboto-normal-400"
                      style="text-transform: none; font-size: 24px; line-height: 36px; letter-spacing: 0;">
                    Сводная статистика
                </span>

                <v-icon large right>mdi-chevron-right</v-icon>
            </v-btn>
        </div>

        <div class="d-flex justify-content-end">
            <div>
                <v-switch class="mt-0 pt-0" inset v-model="switchCCO">
                    <template v-slot:label>
                        <span class="font-roboto-normal-400"
                              style="font-size: 24px; line-height: 36px; color: #212529;">
                            Объекты капитального строительства
                        </span>
                    </template>
                </v-switch>
            </div>
        </div>

        <v-alert class="text-center" shaped text>Карта</v-alert>

        <div class="d-flex justify-content-between" style="margin-top: 46.5px;">
            <v-btn elevation="0" height="40" outlined style="border-radius: 4px 0 0 4px;" tile>
                 <span class="font-roboto-normal-normal"
                       style="text-transform: none; font-size: 24px; line-height: 36px; letter-spacing: 0;">
                     Поиск
                 </span>
            </v-btn>

            <v-text-field clearable dense outlined placeholder="Введите наименование раздела или модуля"
                          style="border-radius: 0; font-size: 24px; line-height: 36px;" type="text"/>

            <v-btn elevation="0" height="40" outlined style="border-radius: 0 4px 4px 0;" tile>
                <v-img max-width="24" :src="icons.sliders"/>
            </v-btn>
        </div>

        <div v-for="(groupHref, i) in groupsHref" :key="`groupHref-${i}`">
            <div class="d-flex align-items-center" style="margin-top: 37.5px;">
                <div class="font-roboto-normal-500"
                     style="font-size: 30px; line-height: 45px; letter-spacing: 0.75px; color: #343A40;">
                    {{ groupHref.title }}
                </div>

                <v-btn class="ml-2" color="#007BFF" elevation="0" small text>
                    <span class="font-roboto-normal-normal"
                          style="text-transform: none; font-size: 18px; line-height: 27px; letter-spacing: 0;">
                        К статистике
                    </span>

                    <v-icon right>mdi-chevron-right</v-icon>
                </v-btn>

                <div class="background-primary d-flex align-items-center ml-auto"
                     style="padding: 9px 18px; border-radius: 39px;" v-if="i === 0">
                    <span class="font-roboto-normal-500" style="font-size: 21px; line-height: 31.5px;">
                        Реестр организаций
                    </span>

                    <div class="background-white font-roboto-normal-bold"
                         style="padding: 6px 4.5px; border-radius: 2px; margin: 0 6px; font-size: 15px; line-height: 22.5px;">
                        838
                    </div>
                </div>
            </div>

            <div class="d-flex align-items-center mt-5"
                 style="width: 25%; background: #F8F9FA; border: 0.2px solid #DFDFDF; box-sizing: border-box; box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15); border-radius: 15px;"
                 v-for="(cardHref, j) in groupHref.cardsHref">
                <div>
                    <v-img :src="cardHref.icon"/>
                </div>

                <div>
                    <div class="font-roboto-normal-500" style="font-size: 21px; line-height: 31.5px; color: #343A40;">
                        {{ cardHref.title }}
                    </div>

                    <div class="font-roboto-normal-normal"
                         style="font-size: 13.5px; line-height: 20.25px; color: #6C757D;">
                        {{ cardHref.text }}
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
import vector1 from "../../../../assets/vector1.svg";

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
        breadcrumbs: [{text: 'Управление имуществом', disabled: true}],
        groupsHref: [
            {
                title: 'Имущество подведомственных организаций', cardsHref: [
                    {
                        icon: vector1,
                        title: 'Недвижимое имущество',
                        text: 'Ведение реестра объектов капитального строительства, выгрузки, актуализация данных',
                        href: null
                    }
                ]
            }
        ],
        icons: {
            sliders
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
