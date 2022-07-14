<template>
    <v-expansion-panel>
        <v-expansion-panel-header class="font-inter-normal-800" style="color: #4E86E2;">
            Заключения
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-data-table :headers="headers" :items="items" :loading="loading">
                <template v-if="isChange" v-slot:body.append>
                    <tr>
                        <td :colspan="headers.length">
                            <v-btn block color="green" text @click="open">Добавить</v-btn>
                            <v-dialog scrollable transition="dialog-bottom-transition" v-model="dialog">
                                <v-card>
                                    <v-toolbar color="primary" dark>
                                        <v-toolbar-title>Добавление заключения</v-toolbar-title>
                                        <v-spacer/>
                                        <v-btn dark icon @click="close">
                                            <v-icon>mdi-close</v-icon>
                                        </v-btn>
                                    </v-toolbar>
                                    <v-card-text style="padding: 20px 24px;">
                                        <v-autocomplete dense item-text="id"
                                                        label="Выберите объекты, к которым относится справка" multiple
                                                        outlined return-object v-if="subsidies.length > 0"
                                                        v-model="edited_item.subsidies" :items="subsidies"
                                                        :rules="[rules.min(1)]">
                                            <template #item={item}>
                                                <div class="mb-2">
                                                    <p class="ma-0">{{ item.name }}</p>
                                                    <span class="text--secondary font-small">{{ item.address }}</span>
                                                </div>
                                            </template>
                                        </v-autocomplete>
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
                <template v-slot:header.comment="{ header }">
                    <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
                </template>
                <template v-slot:header.created_at="{ header }">
                    <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
                </template>
                <template v-slot:header.file="{ header }">
                    <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
                </template>
                <template v-slot:header.index="{ header }">
                    <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
                </template>
                <template v-slot:header.note="{ header }">
                    <span class="font-inter-normal-700" style="color: #1B202B;">{{ header.text }}</span>
                </template>
                <template v-slot:item.comment="{ item }">
                    <span class="font-inter-normal-400" style="color: #1B202B;">{{ item.comment }}</span>
                </template>
                <template v-slot:item.created_at="{ item }">
                    <span class="font-inter-normal-400" style="color: #1B202B;">{{ getDate(item.created_at) }}</span>
                </template>
                <template v-slot:item.file="{ item }">
                    <v-btn color="primary" elevation="0" @click="downloadItem(item)">Скачать</v-btn>
                </template>
                <template v-slot:item.index="{ item, index }">
                    <span class="font-inter-normal-400" style="color: #1B202B;">{{ index + 1 }}</span>
                </template>
                <template v-slot:item.note="{ item }">
                    <span class="font-inter-normal-400" style="color: #1B202B;">{{ item.note }}</span>
                </template>
            </v-data-table>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
import {SubsidiesMixin} from "../../mixins/SubsidiesMixin";

export default {
    computed: {
        validate() {
            return (this.subsidies.length === 0 || this.rules.min(1)(this.edited_item.subsidies)) &&
                this.rules.required(this.edited_item.file) === true &&
                this.rules.required(this.edited_item.note) === true
        }
    },
    data: () => ({
        default_item: {comment: null, file: null, note: null, subsidies: []},
        dialog: false,
        edited_index: -1,
        edited_item: {comment: null, file: null, note: null, subsidies: []},
        headers: [
            {text: '№', value: 'index'},
            {text: 'Справка', value: 'file'},
            {text: 'Примечание', value: 'note'},
            {text: 'Комментарий', value: 'comment'},
            {text: 'Дата загрузки', value: 'created_at'}
        ],
        items: [],
        loading: true,
        subsidies: []
    }),
    methods: {
        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.edited_item = Object.assign({}, this.default_item)
                this.edited_index = -1
                this.subsidies = []
            })
        },
        downloadItem(item) {
            window.open(`/subsidies/conclusions/${item.id}/download`)
        },
        async getItems() {
            const subsidy_conclusion = {
                comment: true,
                created_at: true,
                extension: true,
                id: true,
                name: true,
                note: true
            }
            this.loading = true
            this.items = []
            if (this.code) {
                if (this.organizationId) {
                    const subsidies = await this.fetch('subsidies', {
                        conclusions: subsidy_conclusion
                    }, {code: this.code, organization_id: parseInt(this.organizationId)})
                    subsidies.forEach(subsidy => {
                        this.items = [...this.items, ...subsidy.conclusions]
                    })
                } else {
                    if (this.subsidyId) {
                        const subsidy = await this.fetch('subsidy', {
                            conclusions: subsidy_conclusion
                        }, {code: this.code, id: parseInt(this.subsidyId)})
                        this.items = [...this.items, ...subsidy.conclusions]
                    } else {
                        const subsidies = await this.fetch('subsidies', {
                            conclusions: subsidy_conclusion
                        }, {code: this.code})
                        subsidies.forEach(subsidy => {
                            this.items = [...this.items, ...subsidy.conclusions]
                        })
                    }
                }
            } else {
                if (this.organizationId) {
                    const subsidies = await this.fetch('subsidies', {
                        conclusions: subsidy_conclusion
                    }, {organization_id: parseInt(this.organizationId)})
                    subsidies.forEach(subsidy => {
                        this.items = [...this.items, ...subsidy.conclusions]
                    })
                } else {
                    if (this.subsidyId) {
                        this.items = await this.fetch('subsidy_conclusions', subsidy_conclusion, {subsidy_id: parseInt(this.subsidyId)})
                    } else {
                        const subsidies = await this.fetch('subsidies', {conclusions: subsidy_conclusion})
                        subsidies.forEach(subsidy => {
                            this.items = [...this.items, ...subsidy.conclusions]
                        })
                    }
                }
            }
            this.loading = false
        },
        async open() {
            if (!this.subsidyId) {
                if (this.code) {
                    if (this.organizationId) {
                        this.subsidies = await this.fetch('subsidies', {
                            address: true,
                            code: true,
                            id: true,
                            name: true
                        }, {code: this.code, organization_id: parseInt(this.organizationId)})
                    } else {
                        this.subsidies = await this.fetch('subsidies', {
                            address: true,
                            code: true,
                            id: true,
                            name: true
                        }, {code: this.code})
                    }
                } else {
                    if (this.organizationId) {
                        this.subsidies = await this.fetch('subsidies', {
                            address: true,
                            code: true,
                            id: true,
                            name: true
                        }, {organization_id: parseInt(this.organizationId)})
                    } else {
                        this.subsidies = await this.fetch('subsidies', {
                            address: true,
                            code: true,
                            id: true,
                            name: true
                        })
                    }
                }
            }
            this.dialog = true
        },
        async save() {
            if (this.subsidies.length > 0) {
                for (const subsidy of this.edited_item.subsidies) {
                    let formData = new FormData();
                    formData.append('file', this.edited_item.file);
                    formData.append('form', JSON.stringify(this.edited_item));
                    const submitter = Axios.post(`/subsidies/${subsidy.code}/${subsidy.id}/conclusions/add`, formData)
                    submitter.catch(({response}) => {
                        console.log(response.data.errors)
                    })
                    submitter.then(async ({data}) => {
                        console.log(data)
                        if (data.success) {
                            this.items.push(data.item)
                        }
                    })
                    await submitter
                }
                this.close()
            } else {
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

<style lang="scss" scoped>
.font-small {
    font-size: 9px;
}
</style>
