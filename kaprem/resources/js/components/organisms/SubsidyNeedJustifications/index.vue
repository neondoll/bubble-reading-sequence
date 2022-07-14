<template>
    <v-card>
        <v-data-table :headers="headers" :items="items" :loading="loading">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>
                        Обоснование необходимости (целесообразности) планируемых мероприятий
                    </v-toolbar-title>
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
                                    <v-autocomplete dense item-text="value" item-value="id"
                                                    label="Строительная конструкция или система инженерно-технического обеспечения"
                                                    outlined v-model="edited_item.building_construction_id"
                                                    :items="buildingConstructions" :rules="[rules.required]"/>
                                    <v-textarea auto-grow counter="255" dense label="Материал конструкции" outlined
                                                row-height="15" rows="1"
                                                v-if="editedBuildingConstruction && editedBuildingConstruction.type === 1"
                                                v-model="edited_item.material"
                                                :rules="[rules.required, rules.max(255)]"/>
                                    <v-textarea auto-grow counter="255" dense
                                                label="Срок эксплуатации с момента строительства или предыдущего капитального ремонта"
                                                outlined row-height="15" rows="1" v-model="edited_item.srok_eks"
                                                :rules="[rules.required, rules.max(255)]"/>
                                    <v-row>
                                        <v-col cols="12" md="6" lg="5" xl="3">
                                            <v-select dense label="Требуется капитальный ремонт" outlined
                                                      v-model="edited_item.is_kap_remont" :items="no_yes"
                                                      :rules="[rules.required]"/>
                                        </v-col>
                                        <v-col cols="12" md="6" lg="7" xl="9" v-if="edited_item.is_kap_remont">
                                            <v-textarea auto-grow counter="255" dense label="Обоснование необходимости"
                                                        outlined row-height="15" rows="1"
                                                        v-model="edited_item.obosnovanie"
                                                        :rules="[rules.required, rules.max(255)]"/>
                                        </v-col>
                                    </v-row>
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
            <template v-slot:header.building_construction_id="{ header }"><b>{{ header.text }}</b></template>
            <template v-slot:header.is_kap_remont="{ header }"><b>{{ header.text }}</b></template>
            <template v-slot:header.material="{ header }"><b>{{ header.text }}</b></template>
            <template v-slot:header.obosnovanie="{ header }"><b>{{ header.text }}</b></template>
            <template v-slot:header.srok_eks="{ header }"><b>{{ header.text }}</b></template>
            <template v-slot:item.actions="{ item }">
                <v-btn color="primary" icon small v-if="isChange" @click="open(item)">
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn color="error" icon small v-if="isChange" @click="openDelete(item)">
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </template>
            <template v-slot:item.building_construction_id="{ item }">
                {{
                    building_constructions.find(construction => construction.id === item.building_construction_id).value
                }}
            </template>
            <template v-slot:item.is_kap_remont="{ item }">
                {{ item.is_kap_remont ? 'Да' : 'Нет' }}
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
import {SubsidiesMixin} from "../../../mixins/SubsidiesMixin";

export default {
    computed: {
        buildingConstructions() {
            let type = 0
            let array = [];
            this.building_constructions.forEach(element => {
                if (element.type !== type) {
                    type = element.type
                    if (type > 1) array.push({divider: true})
                    array.push({header: this.building_construction_types.find(building_construction_type => building_construction_type.id === type).value})
                }
                array.push(element)
            })
            return array
        },
        editedBuildingConstruction() {
            return this.building_constructions.find(building_construction => building_construction.id === this.edited_item.building_construction_id)
        },
        formTitle() {
            return this.edited_need_justification_index === -1
                ? 'Добавление строительной конструкции или системы инженерно-технического обеспечения, замена и (или) восстановление которой планируется при капитальном ремонте'
                : 'Редактирование строительной конструкции или системы инженерно-технического обеспечения, замена и (или) восстановление которой планируется при капитальном ремонте'
        },
        headers() {
            let headers = [
                {
                    sortable: false,
                    text: 'Строительные конструкции или системы инженерно-технического обеспечения, замена и (или) восстановление которых планируются при капитальном ремонте',
                    value: 'building_construction_id'
                },
                {sortable: false, text: 'Материал конструкции', value: 'material'},
                {
                    sortable: false,
                    text: 'Срок эксплуатации с момента строительства или предыдущего капитального ремонта',
                    value: 'srok_eks'
                },
                {sortable: false, text: 'Требуется капитальный ремонт', value: 'is_kap_remont'},
                {sortable: false, text: 'Обоснование необходимости', value: 'obosnovanie'}
            ]
            if (this.isChange) {
                headers.push({sortable: false, text: '', value: 'actions'})
            }
            return headers
        },
        validate() {
            return this.rules.required(this.edited_item.building_construction_id) === true &&
                (this.editedBuildingConstruction && (this.editedBuildingConstruction.type !== 1 || this.rules.required(this.edited_item.material) === true && this.rules.max(255)(this.edited_item.material) === true)) &&
                this.rules.required(this.edited_item.srok_eks) === true && this.rules.max(255)(this.edited_item.srok_eks) === true &&
                this.rules.required(this.edited_item.is_kap_remont) === true &&
                (this.edited_item.is_kap_remont === 0 || this.rules.required(this.edited_item.obosnovanie) === true && this.rules.max(255)(this.edited_item.obosnovanie) === true)
        }
    },
    data: () => ({
        default_item: {
            building_construction_id: null,
            material: '',
            srok_eks: '',
            is_kap_remont: null,
            obosnovanie: ''
        },
        dialog: false,
        dialog_delete: false,
        edited_item: {
            building_construction_id: null,
            material: '',
            srok_eks: '',
            is_kap_remont: null,
            obosnovanie: ''
        },
        edited_index: -1,
        items: [],
        loading: true
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
                `/subsidies/${this.code}/${this.subsidyId}/need-justifications/${this.edited_item.id}/delete`,
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
            this.items = await this.fetch('subsidy_need_justifications', {
                building_construction_id: true,
                is_kap_remont: true,
                id: true,
                material: true,
                obosnovanie: true,
                srok_eks: true,
                subsidy_id: true
            }, {subsidy_id: parseInt(this.subsidyId)})
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
                    ? `/subsidies/${this.code}/${this.subsidyId}/need-justifications/${this.edited_item.id}/edit`
                    : `/subsidies/${this.code}/${this.subsidyId}/need-justifications/add`,
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
        await this.getBuildingConstructions()
        await this.getItems()
    },
    name: "SubsidyNeedJustifications",
    props: {
        code: {require: true, type: String},
        isChange: {default: false, type: Boolean},
        subsidyId: {require: true, type: Number | String}
    }
}
</script>

<style scoped>

</style>
