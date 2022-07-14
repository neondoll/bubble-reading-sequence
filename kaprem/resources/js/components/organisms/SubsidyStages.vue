<template>
    <v-card>
        <v-data-table hide-default-footer :headers="headers" :items="items" :loading="loading">
            <template v-if="!loading" v-slot:body.append>
                <tr>
                    <td colspan="5"><span class="font-inter-normal-700" style="color: #1B202B;">ИТОГО:</span></td>
                    <td>
                        <span class="font-inter-normal-700" style="color: #1B202B;">{{ realization_cost_full }}</span>
                    </td>
                    <td><span class="font-inter-normal-700" style="color: #1B202B;">{{ kap_coast_full }}</span></td>
                    <td><span class="font-inter-normal-700" style="color: #1B202B;">{{ finansee_sum }}</span></td>
                    <td v-if="isChange"/>
                </tr>
            </template>
            <template v-slot:header.begin_date="{ header }">
                <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
            </template>
            <template v-slot:header.final_date="{ header }">
                <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
            </template>
            <template v-slot:header.finansee="{ header }">
                <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
            </template>
            <template v-slot:header.index="{ header }">
                <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
            </template>
            <template v-slot:header.is_nessesary="{ header }">
                <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
            </template>
            <template v-slot:header.kap_coast="{ header }">
                <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
            </template>
            <template v-slot:header.name="{ header }">
                <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
            </template>
            <template v-slot:header.realization_cost="{ header }">
                <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-btn color="primary" icon small @click="open(item)">
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
            </template>
            <template v-slot:item.begin_date="{ item }">
                <span class="font-inter-normal-400" style="color: #1B202B;">{{ getDate(item.begin_date) }}</span>
            </template>
            <template v-slot:item.final_date="{ item }">
                <span class="font-inter-normal-400" style="color: #1B202B;">{{ getDate(item.final_date) }}</span>
            </template>
            <template v-slot:item.finansee="{ item }">
                <span class="font-inter-normal-400" style="color: #1B202B;">
                    {{ item.finansee ? Number(item.finansee).toFixed(3) : null }}
                </span>
            </template>
            <template v-slot:item.index="{ item, index }">
                <span class="font-inter-normal-400" style="color: #1B202B;">{{ index + 1 }}</span>
            </template>
            <template v-slot:item.is_nessesary="{ item }">
                <span class="font-inter-normal-400" style="color: #1B202B;">
                    {{ item.is_nessesary ? 'Да' : 'Нет' }}
                </span>
            </template>
            <template v-slot:item.kap_coast="{ item }">
                <span class="font-inter-normal-400" style="color: #1B202B;">
                    {{ item.kap_coast ? Number(item.kap_coast).toFixed(3) : null }}
                </span>
            </template>
            <template v-slot:item.realization_cost="{ item }">
                <span class="font-inter-normal-400" style="color: #1B202B;">
                    {{ item.realization_cost ? Number(item.realization_cost).toFixed(3) : null }}
                </span>
            </template>
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title class="font-inter-normal-800" style="color: #4E86E2;">
                        Сведения о планируемых мероприятиях
                    </v-toolbar-title>
                    <v-divider class="mx-4" inset vertical/>
                    <v-dialog scrollable transition="dialog-bottom-transition" v-model="dialog">
                        <v-card>
                            <v-toolbar color="primary" dark>
                                <v-toolbar-title>
                                    Сведения о планируемых мероприятих: {{ edited_item.name }}
                                </v-toolbar-title>
                                <v-spacer/>
                                <v-btn dark icon @click="close">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-card-text style="padding: 20px 24px;">
                                <v-select dense label="Необходимость выполнения" outlined
                                          v-model="edited_item.is_nessesary" :items="no_yes"/>
                                <v-text-field dense label="Дата начала" outlined type="date"
                                              v-model="edited_item.begin_date"/>
                                <v-text-field dense label="Дата окончания" outlined type="date"
                                              v-model="edited_item.final_date"/>
                                <v-text-field dense label="Стоимость реализации (тыс.руб)" outlined placeholder="Цена"
                                              step="0.001" type="number" v-model="edited_item.realization_cost"
                                              :disabled="!edited_item.is_realization_cost"/>
                                <v-text-field dense
                                              label="Сумма бюджетного финансирования на проведение кап.ремонта (тыс.руб)"
                                              outlined placeholder="Цена" step="0.001" type="number"
                                              v-model="edited_item.kap_coast" :disabled="!edited_item.is_kap_coast"/>
                                <v-text-field dense label="Софинансирование из внебюджетных источников (тыс.руб)"
                                              outlined placeholder="Цена" step="0.001" type="number"
                                              v-model="edited_item.finansee" :disabled="!edited_item.is_finansee"/>
                            </v-card-text>
                            <v-divider/>
                            <v-card-actions>
                                <v-spacer/>
                                <v-btn color="blue darken-1" text @click="save">Сохранить</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
import {SubsidiesMixin} from "../../mixins/SubsidiesMixin";

export default {
    computed: {
        finansee_sum() {
            let sum = 0;
            this.items.forEach(item => {
                sum += parseFloat(item.finansee).toFixed(3) * 1 || 0;
            })
            return sum.toFixed(3);
        },
        headers() {
            let headers = [
                {sortable: false, text: '№', value: 'index'},
                {sortable: false, text: 'Этап', value: 'name'},
                {sortable: false, text: 'Необходимость выполнения', value: 'is_nessesary'},
                {sortable: false, text: 'Дата начала', value: 'begin_date'},
                {sortable: false, text: 'Дата окончания', value: 'final_date'},
                {sortable: false, text: 'Стоимость реализации (тыс.руб)', value: 'realization_cost'},
                {
                    sortable: false,
                    text: 'Сумма бюджетного финансирования на проведение кап.ремонта (тыс.руб)',
                    value: 'kap_coast'
                },
                {sortable: false, text: 'Софинансирование из внебюджетных источников (тыс.руб)', value: 'finansee'}
            ]
            if (this.isChange) {
                headers.push({sortable: false, text: '', value: 'actions'})
            }
            return headers
        },
        kap_coast_full() {
            let sum = 0;
            this.items.forEach(item => {
                sum += parseFloat(item.kap_coast).toFixed(3) * 1 || 0;
            })
            return sum.toFixed(3);
        },
        realization_cost_full() {
            let sum = 0;
            this.items.forEach(item => {
                sum += parseFloat(item.realization_cost).toFixed(3) * 1 || 0;
            })
            return sum.toFixed(3);
        }
    },
    data: () => ({
        default_item: {
            name: null,
            is_nessesary: 0,
            begin_date: null,
            final_date: null,
            realization_cost: null,
            kap_coast: null,
            finansee: null
        },
        dialog: false,
        edited_index: -1,
        edited_item: {
            name: null,
            is_nessesary: 0,
            begin_date: null,
            final_date: null,
            realization_cost: null,
            kap_coast: null,
            finansee: null
        },
        items: [],
        loading: true,
        templates: [
            {
                name: "Проведение тендера и заключение договора на выполнение обследования",
                is_realization_cost: false, is_kap_coast: false, is_finansee: false
            },
            {
                name: "Выполнение обследования, подготовка и утверждение дефектного акта",
                is_realization_cost: true, is_kap_coast: true, is_finansee: true
            },
            {
                name: "Утверждение задания на проектирование",
                is_realization_cost: false, is_kap_coast: false, is_finansee: false
            },
            {
                name: "Проведение тендера и заключение договора на подготовку проектно-сметной документации",
                is_realization_cost: false, is_kap_coast: false, is_finansee: false
            },
            {
                name: "Подготовка проектно-сметной документации",
                is_realization_cost: true, is_kap_coast: true, is_finansee: true
            },
            {
                name: "Прохождение экспертизы проектно-сметной документации",
                is_realization_cost: true, is_kap_coast: true, is_finansee: true
            },
            {
                name: "Проведение тендера и заключение договора на выполнение строительно-монтажных работ",
                is_realization_cost: false, is_kap_coast: false, is_finansee: false
            },
            {
                name: "Выполнение строительно-монтажных работ",
                is_realization_cost: true, is_kap_coast: true, is_finansee: true
            }
        ],
    }),
    methods: {
        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.edited_item = Object.assign({}, this.default_item)
                this.edited_index = -1
            })
        },
        async getItems() {
            this.loading = true
            const items = await this.fetch('subsidy_stages', {
                begin_date: true,
                final_date: true,
                finansee: true,
                id: true,
                is_nessesary: true,
                kap_coast: true,
                name: true,
                realization_cost: true
            }, {subsidy_id: parseInt(this.subsidyId)})
            this.items = []
            this.templates.forEach(template => {
                const item = items.find(item => item.name === template.name)
                if (item) {
                    this.items.push({
                        ...item,
                        is_realization_cost: template.is_realization_cost,
                        is_kap_coast: template.is_kap_coast,
                        is_finansee: template.is_finansee
                    })
                } else {
                    this.items.push({
                        name: template.name,
                        is_nessesary: 0,
                        begin_date: null,
                        final_date: null,
                        is_realization_cost: template.is_realization_cost,
                        realization_cost: null,
                        is_kap_coast: template.is_kap_coast,
                        kap_coast: null,
                        is_finansee: template.is_finansee,
                        finansee: null
                    })
                }
            })
            this.loading = false
        },
        open(item) {
            this.edited_index = this.items.indexOf(item)
            this.edited_item = Object.assign({}, item)
            this.dialog = true
        },
        async save() {
            const formData = new FormData()
            formData.append('form', JSON.stringify(this.edited_item))
            const submitter = Axios.post(this.edited_item.id
                    ? `/subsidies/${this.code}/${this.subsidyId}/stages/${this.edited_item.id}/edit`
                    : `/subsidies/${this.code}/${this.subsidyId}/stages/add`,
                formData)
            submitter.catch(({response}) => {
                console.log(response.data.errors)
            })
            submitter.then(async ({data}) => {
                console.log(data)
                if (data.success) {
                    await this.getItems()
                    this.close()
                }
            })
            await submitter
        }
    },
    mixins: [SubsidiesMixin],
    async mounted() {
        await this.getItems()
    },
    name: "SubsidyStages",
    props: {
        code: {require: true, type: String},
        isChange: {default: false, type: Boolean},
        subsidyId: {require: true, type: Number | String}
    }
}
</script>

<style scoped>

</style>
