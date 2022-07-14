<template>
    <v-card>
        <v-data-table :headers="headers" :items="items" :loading="loading">
            <template v-slot:header.goal="{ header }"><b>{{ header.text }}</b></template>
            <template v-slot:header.indicator="{ header }"><b>{{ header.text }}</b></template>
            <template v-slot:header.unit="{ header }"><b>{{ header.text }}</b></template>
            <template v-slot:item.actions="{ item }">
                <v-btn color="primary" icon small @click="open(item)">
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn color="error" icon small v-if="!item.fix" @click="openDelete(item)">
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </template>
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Ожидаемые результаты</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical/>
                    <v-spacer/>
                    <template v-if="isChange">
                        <v-dialog scrollable transition="dialog-bottom-transition" v-model="dialog">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="green" dark icon v-bind="attrs" v-on="on">
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                            </template>
                            <v-card>
                                <v-toolbar color="primary" dark>
                                    <v-toolbar-title>{{ formTitle }}</v-toolbar-title>
                                    <v-spacer/>
                                    <v-btn dark icon @click="close">
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </v-toolbar>
                                <v-card-text style="padding: 20px 24px;">
                                    <v-textarea auto-grow counter="255" dense label="Цели и задачи" outlined
                                                row-height="15" rows="1" v-model="edited_item.goal"
                                                :disabled="edited_item.fix" :rules="[rules.required, rules.max(255)]"/>
                                    <v-select dense item-value="text" label="Требуется капитальный ремонт" outlined
                                              v-if="edited_item.select" v-model="edited_item.indicator" :items="no_yes"
                                              :rules="[rules.required]"/>
                                    <v-textarea auto-grow counter="255" dense label="Планируемый показатель" outlined
                                                row-height="15" rows="1" v-else v-model="edited_item.indicator"
                                                :rules="[rules.required, rules.max(255)]"/>
                                    <v-textarea auto-grow counter="255" dense label="Единица измерения" outlined
                                                row-height="15" rows="1" v-model="edited_item.unit"
                                                :disabled="edited_item.fix" :rules="[rules.max(255)]"/>
                                </v-card-text>
                                <v-divider/>
                                <v-card-actions>
                                    <v-spacer/>
                                    <v-btn color="blue darken-1" text :disabled="!validate" @click="save">
                                        Сохранить
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-dialog max-width="500px" v-model="dialog_delete">
                            <v-card>
                                <v-card-title class="text-h5">Удаление</v-card-title>
                                <v-card-text>Вы точно хотите удалить?</v-card-text>
                                <v-card-actions>
                                    <v-spacer/>
                                    <v-btn text @click="closeDelete">Отмена</v-btn>
                                    <v-btn color="error darken-1" text @click="deleteItem">Удалить</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </template>
                </v-toolbar>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
import {SubsidiesMixin} from "../../../mixins/SubsidiesMixin";

export default {
    computed: {
        formTitle() {
            return this.edited_index === -1
                ? 'Добавление ожидаемого результата'
                : 'Редактирование ожидаемого результата'
        },
        headers() {
            let headers = [
                {sortable: false, text: 'Цели и задачи', value: 'goal'},
                {sortable: false, text: 'Планируемый показатель', value: 'indicator'},
                {sortable: false, text: 'Единица измерения', value: 'unit'}
            ]
            if (this.isChange) {
                headers.push({sortable: false, text: '', value: 'actions'})
            }
            return headers
        },
        validate() {
            return this.rules.required(this.edited_item.goal) === true && this.rules.max(255)(this.edited_item.goal) === true &&
                this.rules.required(this.edited_item.indicator) === true && this.rules.max(255)(this.edited_item.indicator) === true &&
                this.rules.max(255)(this.edited_item.unit) === true
        }
    },
    data: () => ({
        default_item: {goal: null, indicator: null, unit: null},
        dialog: false,
        dialog_delete: false,
        edited_item: {goal: null, indicator: null, unit: null},
        edited_index: -1,
        items: [],
        loading: true,
        templates: {
            '02-01': [
                {goal: 'Площадь капитального ремонта', indicator: null, unit: 'кв.м (пог.м)', fix: true, select: false},
                {
                    goal: 'Вовлечение в хозяйственную деятельность за счет проведенного капитального ремонта, общая площадь',
                    indicator: null,
                    unit: 'кв.м',
                    fix: true,
                    select: false
                },
                {goal: 'Снижение затрат на эксплуатацию', indicator: null, unit: '', fix: true, select: true},
                {goal: 'Повышение энергоэффективности', indicator: null, unit: '', fix: true, select: true},
                {
                    goal: 'Восстановление (ремонт, реставрация, за исключением реконструкции) объектов культурного наследия',
                    indicator: null,
                    unit: '',
                    fix: true, select: true
                }
            ],
            '02-08': [
                {
                    goal: 'Количество комплектов документации по результатам проведения обследования технического состояния объектов',
                    indicator: null,
                    unit: 'ед.',
                    fix: true,
                    select: false
                },
                {
                    goal: 'Вовлечение в хозяйственную деятельность за счет проведенного капитального ремонта, общая площадь',
                    indicator: null,
                    unit: 'кв.м',
                    fix: true,
                    select: false
                },
                {goal: 'Снижение затрат на эксплуатацию', indicator: null, unit: '', fix: true, select: true},
                {goal: 'Повышение энергоэффективности', indicator: null, unit: '', fix: true, select: true},
                {
                    goal: 'Восстановление (ремонт, реставрация, за исключением реконструкции) объектов культурного наследия',
                    indicator: null,
                    unit: '',
                    fix: true, select: true
                }
            ],
            '02-10': [
                {
                    goal: 'Количество комплектов проектно-сметной документации',
                    indicator: null,
                    unit: 'ед.',
                    fix: true,
                    select: false
                },
                {
                    goal: 'Вовлечение в хозяйственную деятельность за счет проведенного капитального ремонта, общая площадь',
                    indicator: null,
                    unit: 'кв.м',
                    fix: true,
                    select: false
                },
                {goal: 'Снижение затрат на эксплуатацию', indicator: null, unit: '', fix: true, select: true},
                {goal: 'Повышение энергоэффективности', indicator: null, unit: '', fix: true, select: true},
                {
                    goal: 'Восстановление (ремонт, реставрация, за исключением реконструкции) объектов культурного наследия',
                    indicator: null,
                    unit: '',
                    fix: true, select: true
                }
            ]
        },
    }),
    methods: {
        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.edited_item = Object.assign({}, this.default_item)
                this.edited_index = -1
            })
        },
        closeDelete() {
            this.dialog_delete = false
            this.$nextTick(() => {
                this.edited_item = Object.assign({}, this.default_item)
                this.edited_index = -1
            })
        },
        async deleteItem() {
            const submitter = Axios.post(
                `/subsidies/${this.code}/${this.subsidyId}/expected-results/${this.edited_item.id}/delete`,
                new FormData()
            )
            submitter.catch(({response}) => {
                console.log(response.data.errors)
            })
            submitter.then(async ({data}) => {
                console.log(data)
                if (data.success) {
                    this.items.splice(this.edited_index, 1)
                    this.closeDelete()
                }
            })
            await submitter
        },
        async getItems() {
            this.loading = true
            const items = await this.fetch('subsidy_expected_results', {
                goal: true,
                id: true,
                indicator: true,
                unit: true
            }, {subsidy_id: parseInt(this.subsidyId)})
            this.items = [...this.templates[this.code]]
            items.forEach(item => {
                const index = this.templates[this.code].findIndex(template => template.goal === item.goal)
                if (index > -1) {
                    this.items[index].id = item.id
                    this.items[index].indicator = item.indicator
                } else {
                    this.items.push(item)
                }
            })
            this.loading = false
        },
        open(item) {
            this.edited_index = this.items.indexOf(item)
            this.edited_item = Object.assign({}, item)
            this.dialog = true
        },
        openDelete(item) {
            this.edited_index = this.items.indexOf(item)
            this.edited_item = Object.assign({}, item)
            this.dialog_delete = true
        },
        async save() {
            const formData = new FormData()
            formData.append('form', JSON.stringify(this.edited_item))
            const submitter = Axios.post(this.edited_item.id
                    ? `/subsidies/${this.code}/${this.subsidyId}/expected-results/${this.edited_item.id}/edit`
                    : `/subsidies/${this.code}/${this.subsidyId}/expected-results/add`,
                formData)
            submitter.catch(({response}) => {
                console.log(response.data.errors)
            })
            submitter.then(async ({data}) => {
                console.log(data)
                if (data.success) {
                    if (this.edited_index > -1) {
                        Object.assign(this.items[this.edited_index], data.item)
                    } else {
                        this.items.push(data.item)
                    }
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
    name: "SubsidyExpectedResult",
    props: {
        code: {require: true, type: String},
        isChange: {default: false, type: Boolean},
        subsidyId: {require: true, type: Number | String}
    },
    watch: {
        async code() {
            await this.getItems()
        }
    }
}
</script>
