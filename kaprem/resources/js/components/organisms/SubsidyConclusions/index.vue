<template>
    <v-expansion-panel>
        <v-expansion-panel-header>Заключения</v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-data-table :headers="headers" :items="items" :loading="loading">
                <template v-if="isChange" v-slot:body.append>
                    <tr>
                        <td :colspan="headers.length">
                            <v-dialog scrollable transition="dialog-bottom-transition" v-model="dialog">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn block color="green" text v-bind="attrs" v-on="on">Добавить</v-btn>
                                </template>
                                <v-card>
                                    <v-toolbar color="primary" dark>
                                        <v-toolbar-title>Добавление заключения</v-toolbar-title>
                                        <v-spacer/>
                                        <v-btn dark icon @click="close">
                                            <v-icon>mdi-close</v-icon>
                                        </v-btn>
                                    </v-toolbar>
                                    <v-card-text style="padding: 20px 24px;">
                                        <v-file-input dense hide-details="auto" label="Справка" outlined
                                                      v-model="edited_item.file" :rules="[rules.required]"/>
                                        <v-radio-group row v-model="edited_item.note" :rules="[rules.required]">
                                            <v-radio label="Согласовано" value="Согласовано"/>
                                            <v-radio label="Есть замечания" value="Есть замечания"/>
                                        </v-radio-group>
                                        <v-textarea auto-grow dense hide-details="auto" label="Комментарий" outlined
                                                    row-height="15" rows="1" v-model="edited_item.comment"/>
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
                        </td>
                    </tr>
                </template>
                <template v-slot:header.comment="{ header }"><b>{{ header.text }}</b></template>
                <template v-slot:header.created_at="{ header }"><b>{{ header.text }}</b></template>
                <template v-slot:header.file="{ header }"><b>{{ header.text }}</b></template>
                <template v-slot:header.index="{ header }"><b>{{ header.text }}</b></template>
                <template v-slot:header.note="{ header }"><b>{{ header.text }}</b></template>
                <template v-slot:item.created_at="{ item }">{{ getDate(item.created_at) }}</template>
                <template v-slot:item.file="{ item }">
                    <v-btn color="primary" elevation="0" @click="downloadItem(item)">Скачать</v-btn>
                </template>
                <template v-slot:item.index="{ item, index }">{{ index + 1 }}</template>
            </v-data-table>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
import {SubsidiesMixin} from "../../../mixins/SubsidiesMixin";

export default {
    computed: {
        validate() {
            return this.rules.required(this.edited_item.file) === true &&
                this.rules.required(this.edited_item.note) === true
        }
    },
    data: () => ({
        default_item: {comment: null, file: null, note: null},
        dialog: false,
        edited_index: -1,
        edited_item: {comment: null, file: null, note: null},
        headers: [
            {text: '№', value: 'index'},
            {text: 'Справка', value: 'file'},
            {text: 'Примечание', value: 'note'},
            {text: 'Комментарий', value: 'comment'},
            {text: 'Дата загрузки', value: 'created_at'}
        ],
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
        downloadItem(item) {
            window.open(`/subsidies/conclusions/${item.id}/download`)
        },
        async getItems() {
            this.loading = true
            if (this.organizationId) {
                this.items = []
                const subsidies = await this.fetch('subsidies', {
                    conclusions: {
                        comment: true,
                        created_at: true,
                        extension: true,
                        id: true,
                        name: true,
                        note: true
                    }
                }, {organization_id: parseInt(this.organizationId)})
                subsidies.forEach(subsidy => {
                    this.items = [...this.items, ...subsidy.conclusions]
                })
            }
            if (this.subsidyId) {
                this.items = await this.fetch('subsidy_conclusions', {
                    comment: true,
                    created_at: true,
                    extension: true,
                    id: true,
                    name: true,
                    note: true
                }, {subsidy_id: parseInt(this.subsidyId)})
            }
            this.loading = false
        },
        async save() {
            let formData = new FormData();
            formData.append('file', this.edited_item.file);
            formData.append('form', JSON.stringify(this.edited_item));
            const submitter = Axios.post(`/subsidies/${this.code}/${this.subsidyId}/conclusions/add`, formData)
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
                }
                this.close()
            })
            await submitter
        }
    },
    mixins: [SubsidiesMixin],
    async mounted() {
        await this.getItems()
    },
    name: "SubsidyConclusions",
    props: {
        code: {default: null, type: String},
        isChange: {default: false, type: Boolean},
        organizationId: {default: null, type: Number | String},
        subsidyId: {default: null, type: Number | String}
    },
}
</script>
