<template>
    <n-page :breadcrumbs="breadcrumbs">
        <div class="d-flex justify-content-between" style="margin-top: 34px;">
            <div>
                <div class="n-title">Управление имуществом</div>

                <div class="n-subtitle" style="margin-top: 5px;">Департамент управления имуществом</div>
            </div>

            <v-btn color="#007BFF" elevation="0" outlined>
                <span class="font-roboto-normal-400"
                      style="text-transform: none; font-size: 16px; line-height: 24px; letter-spacing: 0;">
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
                              style="font-size: 16px; line-height: 24px; color: #212529;">
                            Объекты капитального строительства
                        </span>
                    </template>
                </v-switch>
            </div>
        </div>

        <v-alert class="text-center" shaped text>Карта</v-alert>

        <div class="d-flex justify-content-between" style="margin-top: 31px;">
            <v-btn elevation="0" height="40" outlined style="border-radius: 4px 0 0 4px;" tile>
                 <span class="font-roboto-normal-normal"
                       style="text-transform: none; font-size: 16px; line-height: 24px; letter-spacing: 0;">
                     Поиск
                 </span>
            </v-btn>

            <v-text-field clearable dense outlined placeholder="Введите наименование раздела или модуля"
                          style="border-radius: 0px;" type="text">
                <!--<template v-slot:prepend>
                    <v-btn elevation="0">Поиск</v-btn>
                </template>

                <template v-slot:append-outer>
                    <v-btn elevation="0">
                        <v-img max-width="24" :src="icons.sliders"/>
                    </v-btn>
                </template>-->
            </v-text-field>

            <v-btn elevation="0" height="40" outlined style="border-radius: 0 4px 4px 0;" tile>
                <v-img max-width="24" :src="icons.sliders"/>
            </v-btn>
        </div>
    </n-page>
</template>

<script>
import MPage from "../../organisms/MPage";
import NPage from "../../templates/NPage";
import {ApiMixin, HelpersMixin} from "../../../mixins";
import MShrinkX from "../../organisms/MShrinkX/MShrinkX";
import sliders from "../../../../assets/sliders.svg";

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
